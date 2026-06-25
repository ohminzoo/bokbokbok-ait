var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now();
var __DEV__=false;
var global=typeof globalThis!=='undefined'?globalThis:typeof global!=='undefined'?global:typeof window!=='undefined'?window:this;


    if (global.__MICRO_FRONTEND__ == null) {
      global.__MICRO_FRONTEND__ = {
        __SHARED__: {},
        __INSTANCES__: [],
      };
    }
    
// Runtime setup script
(function(e){e.__bedrock_require__==null&&(e.__bedrock_require__=function(n){return e.__MICRO_FRONTEND__.__SHARED__[n].get()});function r(){var n=e.__MICRO_FRONTEND__,t=n==null?[]:n.__INSTANCES__,_=t.find(function(a){return a.name==="apps-in-toss-host"});return _}if(r()==null){var o={name:"apps-in-toss-host",config:{}},i=new Proxy({},{get(n,t){var _;try{_=n[t]&&n[t].get()}catch{}try{_=_||e.__bedrock_require__(t)}catch{}if(_!=null)return{get:function(){return _},loaded:!0}},set(n,t,_){return n[t]=_,!0}});e.__MICRO_FRONTEND__={__INSTANCES__:[o],__SHARED__:i},e.__MICRO_FRONTEND__.__INSTANCES__["apps-in-toss-host"]=0}e.__appsInToss={deploymentId:"019f00f7-2291-7fbd-9c95-8a840605ed6f",brandDisplayName:"\uBCF5\uBCF5\uBCF5",brandPrimaryColor:"#FF8FA3",brandIcon:"https://raw.githubusercontent.com/ohminzoo/bokbokbok-ait/main/src/assets/cat-happy.png",navigationBar:{}}})(typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:this);


(function (global) {
  if (global.__nativeModuleProxyConfigured) {
    return;
  }

  function getCustomTurboModuleRegistry(registry) {
    var remappedModules = {
      'GraniteModule': 'BedrockModule',
      'GraniteCoreModule': 'BedrockCoreModule',
    };

    return {
      get: function (name) {
        var mod;
        var remappedName = remappedModules[name];

        if (remappedName) {
          mod = registry.get(remappedName);
        }

        return mod || registry.get(name);
      },
      getEnforcing: function (name) {
        var mod;
        var remappedName = remappedModules[name];

        if (remappedName) {
          mod = registry.get(remappedName);
        }

        return mod || registry.getEnforcing(name);
      }
    };
  }

  function createReactNativeProxy(reactNative) {
    return new Proxy(reactNative, {
      get: function (target, name) {
        var origin = target[name];
        return name === 'TurboModuleRegistry' ? getCustomTurboModuleRegistry(origin) : origin;
      }
    });
  }

  var reactNative;

  if (typeof global.__MICRO_FRONTEND__ !== 'undefined') {
    var mod = global.__MICRO_FRONTEND__.__SHARED__['react-native'];
    reactNative = mod && mod.get();
  }

  if (reactNative == null && typeof __bedrock_require__ === 'function') {
    reactNative = global.__bedrock_require__('react-native');
  }

  if (reactNative == null) {
    throw new Error('cannot get react-native in the global registry');
  }

  global.__reactNativeProxy = createReactNativeProxy(reactNative);
  global.__MICRO_FRONTEND__.__SHARED__['react-native'] = {
    get: function () {
      return global.__reactNativeProxy;
    },
    loaded: true,
  };
})(
  typeof globalThis !== 'undefined'
    ? globalThis
    : typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
    ? window
    : this
);

(function() {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = function(fn, res) {
    return function __init() {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    };
  };
  var __commonJS = function(cb, mod) {
    return function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
  };
  var __export = function(target, all) {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: function(k) {
            return from[k];
          }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    );
  };

  // node_modules/@swc/helpers/esm/_define_property.js
  function _define_property(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else obj[key] = value;
    return obj;
  }
  var init_define_property = __esm({
    "node_modules/@swc/helpers/esm/_define_property.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_object_spread.js
  function _object_spread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      if (typeof Object.getOwnPropertySymbols === "function") {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      ownKeys.forEach(function(key) {
        _define_property(target, key, source[key]);
      });
    }
    return target;
  }
  var init_object_spread = __esm({
    "node_modules/@swc/helpers/esm/_object_spread.js"() {
      init_define_property();
    }
  });

  // node_modules/@swc/helpers/esm/_array_with_holes.js
  function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
  }
  var init_array_with_holes = __esm({
    "node_modules/@swc/helpers/esm/_array_with_holes.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_iterable_to_array.js
  function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
      return Array.from(iter);
    }
  }
  var init_iterable_to_array = __esm({
    "node_modules/@swc/helpers/esm/_iterable_to_array.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_non_iterable_rest.js
  function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var init_non_iterable_rest = __esm({
    "node_modules/@swc/helpers/esm/_non_iterable_rest.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_array_like_to_array.js
  function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  var init_array_like_to_array = __esm({
    "node_modules/@swc/helpers/esm/_array_like_to_array.js"() {
    }
  });

  // node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js
  function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
  }
  var init_unsupported_iterable_to_array = __esm({
    "node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js"() {
      init_array_like_to_array();
    }
  });

  // node_modules/@swc/helpers/esm/_to_array.js
  function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
  }
  var init_to_array = __esm({
    "node_modules/@swc/helpers/esm/_to_array.js"() {
      init_array_with_holes();
      init_iterable_to_array();
      init_non_iterable_rest();
      init_unsupported_iterable_to_array();
    }
  });

  // node_modules/@granite-js/plugin-micro-frontend/dist/runtime/index.cjs
  var require_runtime = __commonJS({
    "node_modules/@granite-js/plugin-micro-frontend/dist/runtime/index.cjs"(exports) {
      init_object_spread();
      init_to_array();
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
      function createContainer2(name, config) {
        if (typeof global.__MICRO_FRONTEND__.__INSTANCES__[name] === "number") throw new Error("'".concat(name, "' container already registered"));
        var containerIndex = global.__MICRO_FRONTEND__.__INSTANCES__.length;
        var container = {
          name,
          config,
          exposeMap: {}
        };
        Object.defineProperty(global.__MICRO_FRONTEND__.__INSTANCES__, name, {
          value: containerIndex,
          enumerable: false,
          writable: false
        });
        global.__MICRO_FRONTEND__.__INSTANCES__.push(container);
        return container;
      }
      function getContainer(instanceName) {
        var containerIndex = __MICRO_FRONTEND__.__INSTANCES__[instanceName];
        return typeof containerIndex === "number" ? __MICRO_FRONTEND__.__INSTANCES__[containerIndex] : null;
      }
      function normalizePath(path) {
        if (path.startsWith("./")) return path.slice(2);
        return path;
      }
      function parseRemotePath(remotePath) {
        var _remotePath_split = _to_array(remotePath.split("/")), remoteName = _remotePath_split[0], rest = _remotePath_split.slice(1);
        if (remoteName && rest.length > 0) return {
          remoteName,
          modulePath: rest.join("/"),
          fullRequest: remotePath
        };
        throw new Error("Invalid remote request: ".concat(remotePath));
      }
      function importRemoteModule(remoteRequestPath) {
        var _parseRemotePath = parseRemotePath(remoteRequestPath), remoteName = _parseRemotePath.remoteName, modulePath = _parseRemotePath.modulePath;
        var container = getContainer(remoteName);
        if (container == null) throw new Error("".concat(remoteName, " container not found"));
        var module2 = container.exposeMap[normalizePath(modulePath)];
        if (module2 == null) throw new Error("Could not resolve '".concat(modulePath, "' in ").concat(remoteName, " container"));
        return module2;
      }
      function toESM(module2) {
        if (module2.__esModule) return module2;
        return Object.defineProperties(module2, _object_spread({
          __esModule: {
            value: true
          }
        }, module2.default == null ? {
          default: {
            value: module2,
            enumerable: true
          }
        } : null));
      }
      function registerShared(libName, module2) {
        if (global.__MICRO_FRONTEND__.__SHARED__[libName]) throw new Error("'".concat(libName, "' already registered as a shared module"));
        global.__MICRO_FRONTEND__.__SHARED__[libName] = {
          get: function() {
            return toESM(module2);
          },
          loaded: true
        };
      }
      function exposeModule2(container, exposeName, module2) {
        var normalizedExposeName = normalizePath(exposeName);
        if (container.exposeMap[normalizedExposeName]) throw new Error("'".concat(exposeName, "' is already exposed in ").concat(container.name, " container"));
        Object.defineProperty(container.exposeMap, normalizedExposeName, {
          get: function() {
            return toESM(module2);
          },
          enumerable: true
        });
      }
      exports.createContainer = createContainer2;
      exports.exposeModule = exposeModule2;
      exports.getContainer = getContainer;
      exports.importRemoteModule = importRemoteModule;
      exports.parseRemotePath = parseRemotePath;
      exports.registerShared = registerShared;
    }
  });

  // protocol-virtual-shared:react/jsx-runtime
  var require_jsx_runtime = __commonJS({
    "protocol-virtual-shared:react/jsx-runtime"(exports, module) {
      var sharedModule = global.__MICRO_FRONTEND__.__SHARED__["react/jsx-runtime"];
      if (sharedModule == null) {
        throw new Error("'react/jsx-runtime' is not registered in the shared registry");
      }
      module.exports = sharedModule.get();
    }
  });

  // protocol-virtual-shared:react
  var require_react = __commonJS({
    "protocol-virtual-shared:react"(exports, module) {
      var sharedModule = global.__MICRO_FRONTEND__.__SHARED__["react"];
      if (sharedModule == null) {
        throw new Error("'react' is not registered in the shared registry");
      }
      module.exports = sharedModule.get();
    }
  });

  // protocol-virtual-shared:react-native
  var require_react_native = __commonJS({
    "protocol-virtual-shared:react-native"(exports, module) {
      var sharedModule = global.__MICRO_FRONTEND__.__SHARED__["react-native"];
      if (sharedModule == null) {
        throw new Error("'react-native' is not registered in the shared registry");
      }
      module.exports = sharedModule.get();
    }
  });

  // src/assets/cat-1-normal.png
  var require_cat_1_normal = __commonJS({
    "src/assets/cat-1-normal.png"() {
      "use strict";
    }
  });

  // src/assets/cat-2-happy.png
  var require_cat_2_happy = __commonJS({
    "src/assets/cat-2-happy.png"() {
      "use strict";
    }
  });

  // src/assets/cat-3-wink.png
  var require_cat_3_wink = __commonJS({
    "src/assets/cat-3-wink.png"() {
      "use strict";
    }
  });

  // src/assets/cat-4-tongue.png
  var require_cat_4_tongue = __commonJS({
    "src/assets/cat-4-tongue.png"() {
      "use strict";
    }
  });

  // src/assets/cat-5-excited.png
  var require_cat_5_excited = __commonJS({
    "src/assets/cat-5-excited.png"() {
      "use strict";
    }
  });

  // src/_app.tsx
  var app_exports = {};
  __export(app_exports, {
    default: function() {
      return App;
    }
  });

  // .granite/granite-globals.js
  global.__granite = global.__granite || {};
  global.__granite.app = {
    name: "\uBCF5\uBCF5\uBCF5",
    scheme: "bokbokbok",
    host: ""
  };

  // .granite/micro-frontend-runtime.js
  var import_runtime = __toESM(require_runtime());
  var __container = (0, import_runtime.createContainer)("apps-in-toss-service", {
    "shared": {
      "@react-native-community/blur": {},
      "@react-navigation/native": {},
      "@react-navigation/native-stack": {},
      "@sentry/react-native": {},
      "@shopify/flash-list": {},
      "react-native-safe-area-context": {},
      "react-native-screens": {},
      "react-native-svg": {},
      "react-native-gesture-handler": {},
      "react-native": {},
      "react": {},
      "react-native-webview": {},
      "@granite-js/image": {},
      "@granite-js/lottie": {},
      "@granite-js/video": {},
      "brick-module": {},
      "@react-navigation/elements": {},
      "react-native/Libraries/BatchedBridge/BatchedBridge": {},
      "react-native/Libraries/BatchedBridge/NativeModules": {},
      "react-native/Libraries/BatchedBridge/MessageQueue": {},
      "react-native/Libraries/NativeComponent/NativeComponentRegistry": {},
      "react-native/Libraries/NativeComponent/NativeComponentRegistryUnstable": {},
      "react-native/Libraries/NativeComponent/ViewConfigIgnore": {},
      "react-native/Libraries/ReactNative/RendererProxy": {},
      "react-native/Libraries/StyleSheet/PlatformColorValueTypes": {},
      "react-native/Libraries/StyleSheet/normalizeColor": {},
      "react-native/Libraries/StyleSheet/processColor": {},
      "react-native/Libraries/TurboModule/TurboModuleRegistry": {},
      "react-native/Libraries/Utilities/NativePlatformConstantsIOS": {},
      "react-native/Libraries/Utilities/Platform": {},
      "react-native/Libraries/Utilities/defineLazyObjectProperty": {},
      "react/jsx-runtime": {},
      "react/jsx-dev-runtime": {}
    }
  });
  (0, import_runtime.exposeModule)(__container, "./ServiceEntry", app_exports);

  // node_modules/@swc/helpers/esm/_sliced_to_array.js
  init_array_with_holes();

  // node_modules/@swc/helpers/esm/_iterable_to_array_limit.js
  function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }

  // node_modules/@swc/helpers/esm/_sliced_to_array.js
  init_non_iterable_rest();
  init_unsupported_iterable_to_array();
  function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
  }

  // src/App.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var import_react = __toESM(require_react());
  var import_react_native = __toESM(require_react_native());
  var CATS = [
    require_cat_1_normal(),
    require_cat_2_happy(),
    require_cat_3_wink(),
    require_cat_4_tongue(),
    require_cat_5_excited()
  ];
  var PET_THRESHOLDS = [
    0,
    5,
    15,
    30,
    60
  ];
  var SPEECH = {
    0: [
      "\uC4F0\uB2F4 \uD574\uC8FC\uC138\uC694!",
      "\uC5EC\uAE30 \uC788\uC796\uC544 \u{1F440}",
      "\uC2EC\uC2EC\uD574... \u{1F97A}",
      "\uC8FC\uC778\uC544~ \u{1F43E}",
      "..."
    ],
    1: [
      "\uB0E5~ \uC88B\uC544~",
      "\uAC70\uAE30 \uAC70\uAE30!",
      "\uAE30\uBD84 \uC88B\uB2E4 \u{1F638}",
      "\uB354 \uD574\uC918~",
      "\uACE8\uACE8..."
    ],
    2: [
      "\uB0E5\uB0E5!! \u{1F495}",
      "\uC88B\uC544 \uC88B\uC544!! \u{1F63B}",
      "\uAC70\uAE30\uC57C!!",
      "\uC719\uD06C~ \u{1F4AB}",
      "\uB0E5\uB0E5\uB0E5~"
    ],
    3: [
      "\uB0E5\uC57C\uC57C\uC57C!!",
      "\uD600 \uB098\uC654\uB2E4 \u{1F61B}",
      "\uB108\uBB34 \uC88B\uC544!!",
      "\uC4F0\uB2F4\uC4F0\uB2F4!!",
      "\uCD5C\uACE0\uC57C!!"
    ],
    4: [
      "\uC774\uAC8C \uD589\uBCF5!! \u{1F63B}",
      "\uB0E5\uB0E5\uB0E5\uB0E5!!",
      "\uACE8\uACE8\uACE8~ \u{1F495}",
      "\uC81C\uC77C \uC88B\uC544~!!",
      "\uD37C~\uD399\uD2B8!!"
    ]
  };
  var SPEECH_PET = [
    "\uC57C\uC639!!",
    "\uB354 \uD574\uC918!!",
    "\uB0E5!!",
    "\uACE8\uACE8\uACE8~",
    "\uAC70\uAE30!!",
    "\uB0E5\uB0E5!!",
    "\uC88B\uC544!!"
  ];
  function playCatMeow() {
    if (import_react_native.Platform.OS !== "web") return;
    try {
      var AC = globalThis.AudioContext || globalThis.webkitAudioContext;
      if (!AC) return;
      var ctx = new AC();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(650, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(920, ctx.currentTime + 0.07);
      osc.frequency.exponentialRampToValueAtTime(520, ctx.currentTime + 0.28);
      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.38);
      osc.start();
      osc.stop(ctx.currentTime + 0.38);
    } catch (_) {
    }
  }
  function playPetSound() {
    if (import_react_native.Platform.OS !== "web") {
      import_react_native.Vibration.vibrate(22);
      return;
    }
    try {
      var AC = globalThis.AudioContext || globalThis.webkitAudioContext;
      if (!AC) return;
      var ctx = new AC();
      var size = Math.floor(ctx.sampleRate * 0.035);
      var buf = ctx.createBuffer(1, size, ctx.sampleRate);
      var data = buf.getChannelData(0);
      for (var i = 0; i < size; i++) data[i] = (Math.random() * 2 - 1) * 0.12;
      var src = ctx.createBufferSource();
      var filt = ctx.createBiquadFilter();
      var gain = ctx.createGain();
      src.buffer = buf;
      filt.type = "bandpass";
      filt.frequency.value = 1600;
      filt.Q.value = 0.9;
      src.connect(filt);
      filt.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, ctx.currentTime + 0.035);
      src.start();
    } catch (_) {
    }
  }
  var BAR_COLORS = [
    "#B0B8C1",
    "#FFB3C1",
    "#FF8FA3",
    "#FF6B8A",
    "#3182F6"
  ];
  function App() {
    var _useState = _sliced_to_array((0, import_react.useState)(0), 2), petCount = _useState[0], setPetCount = _useState[1];
    var _useState1 = _sliced_to_array((0, import_react.useState)(0), 2), happiness = _useState1[0], setHappiness = _useState1[1];
    var _useState2 = _sliced_to_array((0, import_react.useState)(0), 2), catState = _useState2[0], setCatState = _useState2[1];
    var _useState3 = _sliced_to_array((0, import_react.useState)(false), 2), isPetting = _useState3[0], setIsPetting = _useState3[1];
    var _useState4 = _sliced_to_array((0, import_react.useState)("\uC4F0\uB2F4 \uD574\uC8FC\uC138\uC694!"), 2), speech = _useState4[0], setSpeech = _useState4[1];
    var _useState5 = _sliced_to_array((0, import_react.useState)(0), 2), speechKey = _useState5[0], setSpeechKey = _useState5[1];
    var isPettingRef = (0, import_react.useRef)(false);
    var happinessRef = (0, import_react.useRef)(0);
    var petCountRef = (0, import_react.useRef)(0);
    var soundThrottle = (0, import_react.useRef)(0);
    var prevCatState = (0, import_react.useRef)(0);
    isPettingRef.current = isPetting;
    happinessRef.current = happiness;
    petCountRef.current = petCount;
    var breathAnim = (0, import_react.useRef)(new import_react_native.Animated.Value(0)).current;
    var petTiltAnim = (0, import_react.useRef)(new import_react_native.Animated.Value(0)).current;
    var scaleAnim = (0, import_react.useRef)(new import_react_native.Animated.Value(1)).current;
    var petDir = (0, import_react.useRef)(1);
    var expressionBounce = (0, import_react.useCallback)(function() {
      import_react_native.Animated.sequence([
        import_react_native.Animated.spring(scaleAnim, {
          toValue: 1.2,
          useNativeDriver: true,
          tension: 200,
          friction: 5
        }),
        import_react_native.Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 80,
          friction: 6
        })
      ]).start();
    }, [
      scaleAnim
    ]);
    (0, import_react.useEffect)(function() {
      var next = 0;
      for (var i = PET_THRESHOLDS.length - 1; i >= 0; i--) {
        if (petCount >= PET_THRESHOLDS[i]) {
          next = i;
          break;
        }
      }
      if (next !== prevCatState.current) {
        prevCatState.current = next;
        setCatState(next);
        expressionBounce();
        playCatMeow();
      }
    }, [
      petCount,
      expressionBounce
    ]);
    (0, import_react.useEffect)(function() {
      var loop = import_react_native.Animated.loop(import_react_native.Animated.sequence([
        import_react_native.Animated.timing(breathAnim, {
          toValue: 1,
          duration: 2400,
          easing: import_react_native.Easing.inOut(import_react_native.Easing.sin),
          useNativeDriver: true
        }),
        import_react_native.Animated.timing(breathAnim, {
          toValue: 0,
          duration: 2400,
          easing: import_react_native.Easing.inOut(import_react_native.Easing.sin),
          useNativeDriver: true
        })
      ]));
      loop.start();
      return function() {
        return loop.stop();
      };
    }, [
      breathAnim
    ]);
    (0, import_react.useEffect)(function() {
      var interval = null;
      if (isPetting) {
        import_react_native.Animated.spring(scaleAnim, {
          toValue: 1.08,
          useNativeDriver: true
        }).start();
        interval = setInterval(function() {
          petDir.current *= -1;
          import_react_native.Animated.timing(petTiltAnim, {
            toValue: petDir.current * 5,
            duration: 190,
            easing: import_react_native.Easing.inOut(import_react_native.Easing.ease),
            useNativeDriver: true
          }).start();
        }, 190);
      } else {
        import_react_native.Animated.spring(petTiltAnim, {
          toValue: 0,
          useNativeDriver: true
        }).start();
        import_react_native.Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true
        }).start();
      }
      return function() {
        if (interval) clearInterval(interval);
      };
    }, [
      isPetting,
      petTiltAnim,
      scaleAnim
    ]);
    (0, import_react.useEffect)(function() {
      var id = setInterval(function() {
        setHappiness(function(h) {
          var next = isPettingRef.current ? Math.min(100, h + 2.8) : Math.max(0, h - 0.38);
          happinessRef.current = next;
          return next;
        });
      }, 50);
      return function() {
        return clearInterval(id);
      };
    }, []);
    (0, import_react.useEffect)(function() {
      if (!isPetting) return;
      var id = setInterval(function() {
        setPetCount(function(c) {
          return c + 1;
        });
        var now = Date.now();
        if (now - soundThrottle.current > 270) {
          soundThrottle.current = now;
          playPetSound();
        }
      }, 80);
      return function() {
        return clearInterval(id);
      };
    }, [
      isPetting
    ]);
    (0, import_react.useEffect)(function() {
      var cycle = function() {
        var _SPEECH_catState;
        var pool = isPettingRef.current ? SPEECH_PET : (_SPEECH_catState = SPEECH[catState]) !== null && _SPEECH_catState !== void 0 ? _SPEECH_catState : SPEECH[0];
        setSpeech(pool[Math.floor(Math.random() * pool.length)]);
        setSpeechKey(function(k) {
          return k + 1;
        });
      };
      cycle();
      var id = setInterval(cycle, 3200);
      return function() {
        return clearInterval(id);
      };
    }, [
      catState,
      isPetting
    ]);
    var startPet = (0, import_react.useCallback)(function() {
      return setIsPetting(true);
    }, []);
    var stopPet = (0, import_react.useCallback)(function() {
      return setIsPetting(false);
    }, []);
    var breathScale = breathAnim.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        1,
        1.02
      ]
    });
    var breathY = breathAnim.interpolate({
      inputRange: [
        0,
        1
      ],
      outputRange: [
        0,
        -5
      ]
    });
    var tiltDeg = petTiltAnim.interpolate({
      inputRange: [
        -10,
        10
      ],
      outputRange: [
        "-10deg",
        "10deg"
      ]
    });
    var happinessRound = Math.round(happiness);
    var barColor = BAR_COLORS[catState];
    var isMax = catState === CATS.length - 1;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
      style: s.screen,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
          style: s.content,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
              style: s.bubble,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
                  style: s.bubbleText,
                  children: speech
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, {
                  style: s.bubbleTail
                })
              ]
            }, speechKey),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Pressable, {
              style: s.catZone,
              onPressIn: startPet,
              onPressOut: stopPet,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Animated.View, {
                style: {
                  transform: [
                    {
                      scale: import_react_native.Animated.multiply(scaleAnim, breathScale)
                    },
                    {
                      rotate: tiltDeg
                    },
                    {
                      translateY: breathY
                    }
                  ]
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Image, {
                  source: CATS[catState],
                  style: s.cat,
                  resizeMode: "contain"
                })
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
              style: s.stats,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
                  style: s.happinessSection,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
                      style: s.happinessRow,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
                          style: s.statLabel,
                          children: "\uD589\uBCF5\uB3C4"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.Text, {
                          style: s.statLabel,
                          children: [
                            happinessRound,
                            "%"
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, {
                      style: s.barTrack,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, {
                        style: [
                          s.barFill,
                          {
                            width: "".concat(happinessRound, "%"),
                            backgroundColor: barColor
                          }
                        ]
                      })
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
                  style: s.petCard,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
                      style: s.petCardLabel,
                      children: "\uC4F0\uB2F4 \uD69F\uC218"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.Text, {
                      style: s.petCardValue,
                      children: [
                        petCount,
                        "\uD68C"
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, {
          style: s.bottom,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Pressable, {
            style: [
              s.btn,
              isPetting && s.btnActive
            ],
            onPressIn: startPet,
            onPressOut: stopPet,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
              style: s.btnText,
              children: isPetting ? "\uACE8\uACE8\uACE8~ \u{1F43E}" : petCount === 0 ? "\uC2DC\uC791\uD558\uAE30" : isMax ? "\uCD5C\uACE0\uC57C!! \u{1F63B}" : "\uACC4\uC18D \uC4F0\uB2F4\uD558\uAE30 \u{1F43E}"
            })
          })
        })
      ]
    });
  }
  var s = import_react_native.StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    content: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: 20,
      paddingTop: 20
    },
    bubble: {
      backgroundColor: "#EBEBF0",
      borderRadius: 999,
      paddingHorizontal: 14,
      paddingVertical: 5,
      alignSelf: "center",
      marginBottom: 12
    },
    bubbleText: {
      fontSize: 14,
      fontWeight: "600",
      color: "#697482",
      letterSpacing: -0.3
    },
    bubbleTail: {
      position: "absolute",
      bottom: -10,
      alignSelf: "center",
      width: 0,
      height: 0,
      borderLeftWidth: 6,
      borderRightWidth: 6,
      borderTopWidth: 10,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "#EBEBF0",
      left: "50%",
      marginLeft: -6
    },
    catZone: {
      width: 300,
      height: 300,
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    },
    cat: {
      width: 280,
      height: 280
    },
    stats: {
      width: "100%",
      marginTop: 4,
      gap: 0
    },
    happinessSection: {
      width: "100%",
      gap: 8
    },
    happinessRow: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    statLabel: {
      fontSize: 14,
      fontWeight: "600",
      color: "#697482",
      letterSpacing: -0.5
    },
    barTrack: {
      width: "100%",
      height: 7,
      backgroundColor: "#EBEBF0",
      borderRadius: 100,
      overflow: "hidden"
    },
    barFill: {
      height: "100%",
      borderRadius: 100
    },
    petCard: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#FAFAFB",
      borderRadius: 18,
      paddingHorizontal: 16,
      paddingVertical: 17,
      marginTop: 16
    },
    petCardLabel: {
      fontSize: 16,
      fontWeight: "600",
      color: "#3182F6",
      letterSpacing: -0.5
    },
    petCardValue: {
      fontSize: 16,
      fontWeight: "600",
      color: "#3182F6",
      letterSpacing: -0.5
    },
    bottom: {
      paddingHorizontal: 20,
      paddingBottom: 20,
      paddingTop: 12,
      backgroundColor: "#FFFFFF"
    },
    btn: {
      backgroundColor: "#3182F6",
      borderRadius: 16,
      minHeight: 56,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 28
    },
    btnActive: {
      backgroundColor: "#1A5FCC"
    },
    btnText: {
      fontSize: 17,
      fontWeight: "600",
      color: "#FFFFFF",
      letterSpacing: -0.3
    }
  });
})();
//# sourceMappingURL=bundle.android.js.map
