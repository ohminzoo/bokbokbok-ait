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
  Vibration,
  Platform,
} from 'react-native'

// ── Cat photos: 쓰담할수록 이 순서로 표정 변화 ──────────────────────────
const CATS: ImageSourcePropType[] = [
  require('./assets/cat-1-normal.png'),   // 0: 평온 (처음)
  require('./assets/cat-2-happy.png'),    // 1: 눈 감음 (5회~)
  require('./assets/cat-3-wink.png'),     // 2: 윙크 (15회~)
  require('./assets/cat-4-tongue.png'),   // 3: 혀 내밈 (30회~)
  require('./assets/cat-5-excited.png'),  // 4: 입 벌림 MAX (60회~)
]

// 표정이 바뀌는 쓰담 횟수 기준
const PET_THRESHOLDS = [0, 5, 15, 30, 60]

// 표정별 말풍선 대사
const SPEECH: Record<number, string[]> = {
  0: ['쓰담 해주세요!', '여기 있잖아 👀', '심심해... 🥺', '주인아~ 🐾', '...'],
  1: ['냥~ 좋아~', '거기 거기!', '기분 좋다 😸', '더 해줘~', '골골...'],
  2: ['냥냥!! 💕', '좋아 좋아!! 😻', '거기야!!', '윙크~ 💫', '냥냥냥~'],
  3: ['냥야야야!!', '혀 나왔다 😛', '너무 좋아!!', '쓰담쓰담!!', '최고야!!'],
  4: ['이게 행복!! 😻', '냥냥냥냥!!', '골골골~ 💕', '제일 좋아~!!', '퍼~펙트!!'],
}
const SPEECH_PET = ['야옹!!', '더 해줘!!', '냥!!', '골골골~', '거기!!', '냥냥!!', '좋아!!']

const PARTICLES = ['♥', '★', '🐾', '♡', '✦', '💕', '✿']

// ── 음향: Web Audio API (웹/개발 환경) + 진동 (네이티브) ────────────────
function playCatMeow() {
  if (Platform.OS !== 'web') return
  try {
    const AC = (globalThis as any).AudioContext || (globalThis as any).webkitAudioContext
    if (!AC) return
    const ctx = new AC()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain); gain.connect(ctx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(650, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(920, ctx.currentTime + 0.07)
    osc.frequency.exponentialRampToValueAtTime(520, ctx.currentTime + 0.28)
    gain.gain.setValueAtTime(0.28, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.38)
    osc.start(); osc.stop(ctx.currentTime + 0.38)
  } catch (_) {}
}

function playPetSound() {
  // 네이티브에서는 진동으로 대체
  if (Platform.OS !== 'web') {
    Vibration.vibrate(22)
    return
  }
  try {
    const AC = (globalThis as any).AudioContext || (globalThis as any).webkitAudioContext
    if (!AC) return
    const ctx = new AC()
    const size = Math.floor(ctx.sampleRate * 0.035)
    const buf = ctx.createBuffer(1, size, ctx.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < size; i++) data[i] = (Math.random() * 2 - 1) * 0.12
    const src = ctx.createBufferSource()
    const filt = ctx.createBiquadFilter()
    const gain = ctx.createGain()
    src.buffer = buf
    filt.type = 'bandpass'; filt.frequency.value = 1600; filt.Q.value = 0.9
    src.connect(filt); filt.connect(gain); gain.connect(ctx.destination)
    gain.gain.setValueAtTime(1, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035)
    src.start()
  } catch (_) {}
}

// ── 파티클 타입 ───────────────────────────────────────────────────────────
interface Particle {
  id: number
  x: number
  type: string
  translateY: Animated.Value
  opacity: Animated.Value
  scale: Animated.Value
}

// ── 행복도 바 색상 (표정 단계별) ─────────────────────────────────────────
const BAR_COLORS = ['#B0B8C1', '#FFB3C1', '#FF8FA3', '#FF6B8A', '#3182F6']

// ── App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [petCount, setPetCount]   = useState(0)
  const [happiness, setHappiness] = useState(0)
  const [catState, setCatState]   = useState(0)
  const [isPetting, setIsPetting] = useState(false)
  const [speech, setSpeech]       = useState('쓰담 해주세요!')
  const [speechKey, setSpeechKey] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  const isPettingRef  = useRef(false)
  const happinessRef  = useRef(0)
  const petCountRef   = useRef(0)
  const particleId    = useRef(0)
  const soundThrottle = useRef(0)
  const prevCatState  = useRef(0)

  isPettingRef.current  = isPetting
  happinessRef.current  = happiness
  petCountRef.current   = petCount

  // ── Animations ────────────────────────────────────────────────────────
  const breathAnim  = useRef(new Animated.Value(0)).current
  const petTiltAnim = useRef(new Animated.Value(0)).current
  const scaleAnim   = useRef(new Animated.Value(1)).current
  const petDir      = useRef(1)

  // 표정 변화 시 바운스
  const expressionBounce = useCallback(() => {
    Animated.sequence([
      Animated.spring(scaleAnim, { toValue: 1.2, useNativeDriver: true, tension: 200, friction: 5 }),
      Animated.spring(scaleAnim, { toValue: 1.0, useNativeDriver: true, tension: 80, friction: 6 }),
    ]).start()
  }, [scaleAnim])

  // 쓰담 횟수 → 표정 단계 업데이트
  useEffect(() => {
    let next = 0
    for (let i = PET_THRESHOLDS.length - 1; i >= 0; i--) {
      if (petCount >= PET_THRESHOLDS[i]) { next = i; break }
    }
    if (next !== prevCatState.current) {
      prevCatState.current = next
      setCatState(next)
      expressionBounce()
      playCatMeow()
    }
  }, [petCount, expressionBounce])

  // 숨쉬기 애니메이션 (idle)
  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(breathAnim, {
          toValue: 1, duration: 2400,
          easing: Easing.inOut(Easing.sin), useNativeDriver: true,
        }),
        Animated.timing(breathAnim, {
          toValue: 0, duration: 2400,
          easing: Easing.inOut(Easing.sin), useNativeDriver: true,
        }),
      ])
    )
    loop.start()
    return () => loop.stop()
  }, [breathAnim])

  // 쓰담 시 고개 흔들기 애니메이션
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null
    if (isPetting) {
      Animated.spring(scaleAnim, { toValue: 1.08, useNativeDriver: true }).start()
      interval = setInterval(() => {
        petDir.current *= -1
        Animated.timing(petTiltAnim, {
          toValue: petDir.current * 5,
          duration: 190,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start()
      }, 190)
    } else {
      Animated.spring(petTiltAnim, { toValue: 0, useNativeDriver: true }).start()
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start()
    }
    return () => { if (interval) clearInterval(interval) }
  }, [isPetting, petTiltAnim, scaleAnim])

  // 행복도 tick (쓰담 시 올라가고 안 하면 내려감)
  useEffect(() => {
    const id = setInterval(() => {
      setHappiness(h => {
        const next = isPettingRef.current
          ? Math.min(100, h + 2.8)
          : Math.max(0, h - 0.38)
        happinessRef.current = next
        return next
      })
    }, 50)
    return () => clearInterval(id)
  }, [])

  // 쓰담 횟수 카운트 + 사운드
  useEffect(() => {
    if (!isPetting) return
    const id = setInterval(() => {
      setPetCount(c => c + 1)
      const now = Date.now()
      if (now - soundThrottle.current > 270) {
        soundThrottle.current = now
        playPetSound()
      }
    }, 80)
    return () => clearInterval(id)
  }, [isPetting])

  // 파티클 생성
  useEffect(() => {
    if (!isPetting) return
    const id = setInterval(() => {
      const pid = particleId.current++
      const translateY = new Animated.Value(0)
      const opacity    = new Animated.Value(1)
      const scale      = new Animated.Value(0.6)
      setParticles(prev => [
        ...prev,
        {
          id: pid,
          x: 5 + Math.random() * 90,
          type: PARTICLES[Math.floor(Math.random() * PARTICLES.length)],
          translateY, opacity, scale,
        },
      ])
      Animated.parallel([
        Animated.timing(translateY, { toValue: -140, duration: 1300, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 0, duration: 1300, useNativeDriver: true }),
        Animated.sequence([
          Animated.spring(scale, { toValue: 1.2, useNativeDriver: true }),
          Animated.timing(scale, { toValue: 0.4, duration: 900, useNativeDriver: true }),
        ]),
      ]).start(() => setParticles(prev => prev.filter(p => p.id !== pid)))
    }, 250)
    return () => clearInterval(id)
  }, [isPetting])

  // 말풍선 사이클
  useEffect(() => {
    const cycle = () => {
      const pool = isPettingRef.current ? SPEECH_PET : (SPEECH[catState] ?? SPEECH[0])
      setSpeech(pool[Math.floor(Math.random() * pool.length)])
      setSpeechKey(k => k + 1)
    }
    cycle()
    const id = setInterval(cycle, 3200)
    return () => clearInterval(id)
  }, [catState, isPetting])

  const startPet = useCallback(() => setIsPetting(true), [])
  const stopPet  = useCallback(() => setIsPetting(false), [])

  // 애니메이션 보간값
  const breathScale = breathAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.02] })
  const breathY     = breathAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -5] })
  const tiltDeg     = petTiltAnim.interpolate({ inputRange: [-10, 10], outputRange: ['-10deg', '10deg'] })

  const happinessRound = Math.round(happiness)
  const barColor = BAR_COLORS[catState]
  const isMax = catState === CATS.length - 1

  return (
    <View style={s.screen}>
      <View style={s.content}>
        {/* 말풍선 */}
        <View key={speechKey} style={s.bubble}>
          <Text style={s.bubbleText}>{speech}</Text>
          <View style={s.bubbleTail} />
        </View>

        {/* 고양이 + 파티클 */}
        <Pressable style={s.catZone} onPressIn={startPet} onPressOut={stopPet}>
          <Animated.View
            style={{
              transform: [
                { scale: Animated.multiply(scaleAnim, breathScale) as any },
                { rotate: tiltDeg },
                { translateY: breathY },
              ],
            }}
          >
            <Image source={CATS[catState]} style={s.cat} resizeMode="contain" />
          </Animated.View>

          {particles.map(p => (
            <Animated.Text
              key={p.id}
              style={[
                s.particle,
                {
                  left: `${p.x}%` as any,
                  transform: [
                    { translateY: p.translateY },
                    { scale: p.scale },
                  ],
                  opacity: p.opacity,
                },
              ]}
            >
              {p.type}
            </Animated.Text>
          ))}
        </Pressable>

        {/* 스탯 */}
        <View style={s.stats}>
          {/* 행복도 바 */}
          <View style={s.happinessSection}>
            <View style={s.happinessRow}>
              <Text style={s.statLabel}>행복도</Text>
              <Text style={s.statLabel}>{happinessRound}%</Text>
            </View>
            <View style={s.barTrack}>
              <View
                style={[
                  s.barFill,
                  { width: `${happinessRound}%` as any, backgroundColor: barColor },
                ]}
              />
            </View>
          </View>

          {/* 쓰담 횟수 카드 */}
          <View style={s.petCard}>
            <Text style={s.petCardLabel}>쓰담 횟수</Text>
            <Text style={s.petCardValue}>{petCount}회</Text>
          </View>
        </View>
      </View>

      {/* 하단 버튼 */}
      <View style={s.bottom}>
        <Pressable
          style={[s.btn, isPetting && s.btnActive]}
          onPressIn={startPet}
          onPressOut={stopPet}
        >
          <Text style={s.btnText}>
            {isPetting
              ? '골골골~ 🐾'
              : petCount === 0
              ? '시작하기'
              : isMax
              ? '최고야!! 😻'
              : '계속 쓰담하기 🐾'}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

// ── Styles (피그마 디자인 기반) ────────────────────────────────────────────
const s = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  bubble: {
    backgroundColor: '#EBEBF0',
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 5,
    alignSelf: 'center',
    marginBottom: 12,
  },
  bubbleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#697482',
    letterSpacing: -0.3,
  },
  bubbleTail: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#EBEBF0',
    left: '50%',
    marginLeft: -6,
  },
  catZone: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cat: {
    width: 280,
    height: 280,
  },
  particle: {
    position: 'absolute',
    bottom: '35%',
    fontSize: 22,
  },
  stats: {
    width: '100%',
    marginTop: 4,
    gap: 0,
  },
  happinessSection: {
    width: '100%',
    gap: 8,
  },
  happinessRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#697482',
    letterSpacing: -0.5,
  },
  barTrack: {
    width: '100%',
    height: 7,
    backgroundColor: '#EBEBF0',
    borderRadius: 100,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 100,
  },
  petCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAFAFB',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 17,
    marginTop: 16,
  },
  petCardLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3182F6',
    letterSpacing: -0.5,
  },
  petCardValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3182F6',
    letterSpacing: -0.5,
  },
  bottom: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: '#FFFFFF',
  },
  btn: {
    backgroundColor: '#3182F6',
    borderRadius: 16,
    minHeight: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  btnActive: {
    backgroundColor: '#1A5FCC',
  },
  btnText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: -0.3,
  },
})
