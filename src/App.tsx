import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Animated,
  Easing,
  ImageSourcePropType,
} from 'react-native'

const catNormal: ImageSourcePropType = require('./assets/cat-normal.png')
const catHappy: ImageSourcePropType  = require('./assets/cat-happy.png')
const catSad: ImageSourcePropType    = require('./assets/cat-sad.png')

// ── Speech ────────────────────────────────────────────────────────────────

const SPEECH = {
  sad:     ['야옹... 나 여기 있잖아 👀', '심심해... 쓰담해줘 🥺', '나 살짝 삐졌어..', '어? 나 안 보여? 여기야! 😾', '주인아~ 빨리 와~ 🐾', '...(눈 마주침)'],
  normal:  ['오늘 기분 나쁘지 않아 🐱', '쓰담 더 해주면 안 돼? 🐾', '나 기분 더 좋아지고 싶어 ✨', '...이 정도면 괜찮아', '냥~ 뭐해? 나 봐줘~'],
  petting: ['냥!! 거기! 거기야!!', '더 해줘! 더!! 😻', '야옹야옹!! 행복해!!', '그래 그래~ 좋아~~', '냥냥냥!! 💕', '골골골~ 최고야~'],
  happy:   ['기분 최고야!! 😻', '오늘 하루 행복했어 💕', '너 정말 좋아!! 🐾', '냥~ 제일 좋아하는 사람~', '이게 바로 행복이야 ✨'],
}

const PARTICLE_POOL = ['♥', '★', '✦', '🐾', '♡', '✿']

// ── Types ─────────────────────────────────────────────────────────────────

interface Particle {
  id: number
  x: number
  type: string
  translateY: Animated.Value
  opacity: Animated.Value
  rotate: Animated.Value
}

const TICK_MS  = 50
const PET_GAIN = 2.5
const IDLE_LOSS = 0.45

// ── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [happiness, setHappiness] = useState(50)
  const [isPetting, setIsPetting] = useState(false)
  const [speech, setSpeech]       = useState('')
  const [speechKey, setSpeechKey] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  const isPettingRef  = useRef(false)
  const happinessRef  = useRef(50)
  const particleId    = useRef(0)
  const wiggleAnim    = useRef(new Animated.Value(0)).current
  const wiggleLoopRef = useRef<Animated.CompositeAnimation | null>(null)

  isPettingRef.current = isPetting

  // Happiness tick
  useEffect(() => {
    const id = setInterval(() => {
      setHappiness(h => {
        const next = isPettingRef.current
          ? Math.min(100, h + PET_GAIN)
          : Math.max(0, h - IDLE_LOSS)
        happinessRef.current = next
        return next
      })
    }, TICK_MS)
    return () => clearInterval(id)
  }, [])

  // Wiggle when petting
  useEffect(() => {
    if (isPetting) {
      const loop = Animated.loop(
        Animated.sequence([
          Animated.timing(wiggleAnim, { toValue: 1,  duration: 220, useNativeDriver: true, easing: Easing.inOut(Easing.sine) }),
          Animated.timing(wiggleAnim, { toValue: -1, duration: 220, useNativeDriver: true, easing: Easing.inOut(Easing.sine) }),
        ])
      )
      wiggleLoopRef.current = loop
      loop.start()
    } else {
      wiggleLoopRef.current?.stop()
      Animated.spring(wiggleAnim, { toValue: 0, useNativeDriver: true }).start()
    }
  }, [isPetting])

  // Particle spawner
  useEffect(() => {
    if (!isPetting) return
    const id = setInterval(() => {
      const pid = particleId.current++
      const translateY = new Animated.Value(0)
      const opacity    = new Animated.Value(1)
      const rotate     = new Animated.Value(0)

      setParticles(prev => [...prev, { id: pid, x: 10 + Math.random() * 80, type: PARTICLE_POOL[Math.floor(Math.random() * PARTICLE_POOL.length)], translateY, opacity, rotate }])

      Animated.parallel([
        Animated.timing(translateY, { toValue: -130, duration: 1500, useNativeDriver: true }),
        Animated.timing(opacity,    { toValue: 0,    duration: 1500, useNativeDriver: true }),
        Animated.timing(rotate,     { toValue: 1,    duration: 1500, useNativeDriver: true }),
      ]).start(() => setParticles(prev => prev.filter(q => q.id !== pid)))
    }, 220)
    return () => clearInterval(id)
  }, [isPetting])

  // Speech cycling
  useEffect(() => {
    const cycle = () => {
      const h = happinessRef.current
      const p = isPettingRef.current
      const pool = p ? SPEECH.petting : h >= 70 ? SPEECH.happy : h >= 30 ? SPEECH.normal : SPEECH.sad
      setSpeech(pool[Math.floor(Math.random() * pool.length)])
      setSpeechKey(k => k + 1)
    }
    cycle()
    const id = setInterval(cycle, 3200)
    return () => clearInterval(id)
  }, [])

  const catSrc = happiness >= 70 ? catHappy : happiness >= 30 ? catNormal : catSad
  const pawCount = Math.round(happiness / 20)
  const mood =
    happiness >= 85 ? '기분 최고야!! 😻' :
    happiness >= 65 ? '기분 좋아~ 🐱'   :
    happiness >= 40 ? '그냥 그래...'     :
    happiness >= 20 ? '쓰담해줘... 😿'  :
    '나 삐졌어 😾'

  const startPet = useCallback(() => setIsPetting(true), [])
  const stopPet  = useCallback(() => setIsPetting(false), [])

  const wiggleDeg = wiggleAnim.interpolate({ inputRange: [-1, 0, 1], outputRange: ['-5deg', '0deg', '5deg'] })

  return (
    <View style={s.screen}>
      {/* Title */}
      <View style={s.header}>
        <Text style={s.title}>복복복</Text>
        <Text style={s.enTitle}>BOKBOKBOK</Text>
      </View>

      {/* Happiness bar */}
      <View style={s.barSection}>
        <View style={s.pawRow}>
          {[0, 1, 2, 3, 4].map(i => (
            <Text key={i} style={[s.paw, i < pawCount && s.pawOn]}>🐾</Text>
          ))}
        </View>
        <View style={s.barTrack}>
          <View style={[s.barFill, { width: `${happiness}%` as any }]} />
        </View>
        <Text style={s.mood}>{mood}</Text>
      </View>

      {/* Cat */}
      <Pressable style={s.catZone} onPressIn={startPet} onPressOut={stopPet}>
        {/* Speech bubble */}
        <View key={speechKey} style={s.bubble}>
          <Text style={s.bubbleText}>{speech}</Text>
          <View style={s.bubbleTail} />
        </View>

        <Animated.Image
          source={catSrc}
          style={[s.cat, { transform: [{ rotate: wiggleDeg }, { scale: isPetting ? 1.07 : 1 }] }]}
          resizeMode="contain"
        />

        {/* Particles */}
        {particles.map(p => (
          <Animated.Text
            key={p.id}
            style={[
              s.particle,
              { left: `${p.x}%` as any,
                transform: [
                  { translateY: p.translateY },
                  { rotate: p.rotate.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '200deg'] }) },
                ],
                opacity: p.opacity,
              },
            ]}
          >
            {p.type}
          </Animated.Text>
        ))}
      </Pressable>

      {/* Hint */}
      <Text style={s.hint}>
        {isPetting ? '골골골~ 냥냥냥~ 🐾' : '꾹 누르고 있으면 쓰담쓰담!'}
      </Text>
    </View>
  )
}

// ── Styles ────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF5F0',
    gap: 24,
    paddingHorizontal: 24,
  },
  header: { alignItems: 'center' },
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#5D3535',
    letterSpacing: 4,
  },
  enTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FF8FA3',
    letterSpacing: 6,
    marginTop: 4,
  },
  barSection: { width: '100%', alignItems: 'center', gap: 10 },
  pawRow:  { flexDirection: 'row', gap: 6 },
  paw:     { fontSize: 20, opacity: 0.18 },
  pawOn:   { opacity: 1 },
  barTrack: {
    width: '100%',
    height: 14,
    backgroundColor: '#FFE0E8',
    borderRadius: 99,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#FF6B8A',
    borderRadius: 99,
  },
  mood: { fontSize: 15, fontWeight: '600', color: '#5D3535' },
  catZone: {
    position: 'relative',
    alignItems: 'center',
    width: 280,
    height: 330,
  },
  bubble: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#FFD6E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    zIndex: 2,
  },
  bubbleText: { fontSize: 13, fontWeight: '600', color: '#5D3535' },
  bubbleTail: {
    position: 'absolute',
    bottom: -12,
    alignSelf: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FFD6E0',
  },
  cat: { width: 250, height: 250, marginTop: 50 },
  particle: {
    position: 'absolute',
    bottom: '50%',
    fontSize: 22,
    color: '#FF8FA3',
  },
  hint: { fontSize: 13, color: '#C0A0A8', textAlign: 'center' },
})
