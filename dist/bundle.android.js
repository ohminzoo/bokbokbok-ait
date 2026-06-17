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
(function(e){e.__bedrock_require__==null&&(e.__bedrock_require__=function(n){return e.__MICRO_FRONTEND__.__SHARED__[n].get()});function r(){var n=e.__MICRO_FRONTEND__,t=n==null?[]:n.__INSTANCES__,_=t.find(function(a){return a.name==="apps-in-toss-host"});return _}if(r()==null){var o={name:"apps-in-toss-host",config:{}},i=new Proxy({},{get(n,t){var _;try{_=n[t]&&n[t].get()}catch{}try{_=_||e.__bedrock_require__(t)}catch{}if(_!=null)return{get:function(){return _},loaded:!0}},set(n,t,_){return n[t]=_,!0}});e.__MICRO_FRONTEND__={__INSTANCES__:[o],__SHARED__:i},e.__MICRO_FRONTEND__.__INSTANCES__["apps-in-toss-host"]=0}e.__appsInToss={deploymentId:"019ed5d3-737a-7e71-af7a-21b073c2b699",brandDisplayName:"\uBCF5\uBCF5\uBCF5",brandPrimaryColor:"#FF8FA3",brandIcon:"https://raw.githubusercontent.com/ohminzoo/bokbokbok-ait/main/src/assets/cat-happy.png",navigationBar:{}}})(typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof window<"u"?window:this);


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

  // src/assets/cat-normal.png
  var require_cat_normal = __commonJS({
    "src/assets/cat-normal.png"() {
      "use strict";
    }
  });

  // src/assets/cat-happy.png
  var require_cat_happy = __commonJS({
    "src/assets/cat-happy.png"() {
      "use strict";
    }
  });

  // src/assets/cat-sad.png
  var require_cat_sad = __commonJS({
    "src/assets/cat-sad.png"() {
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

  // node_modules/@swc/helpers/esm/_array_without_holes.js
  init_array_like_to_array();
  function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
  }

  // node_modules/@swc/helpers/esm/_to_consumable_array.js
  init_iterable_to_array();

  // node_modules/@swc/helpers/esm/_non_iterable_spread.js
  function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/@swc/helpers/esm/_to_consumable_array.js
  init_unsupported_iterable_to_array();
  function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
  }

  // src/App.tsx
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var import_react = __toESM(require_react());
  var import_react_native = __toESM(require_react_native());
  var catNormal = require_cat_normal();
  var catHappy = require_cat_happy();
  var catSad = require_cat_sad();
  var SPEECH = {
    sad: [
      "\uC57C\uC639... \uB098 \uC5EC\uAE30 \uC788\uC796\uC544 \u{1F440}",
      "\uC2EC\uC2EC\uD574... \uC4F0\uB2F4\uD574\uC918 \u{1F97A}",
      "\uB098 \uC0B4\uC9DD \uC090\uC84C\uC5B4..",
      "\uC5B4? \uB098 \uC548 \uBCF4\uC5EC? \uC5EC\uAE30\uC57C! \u{1F63E}",
      "\uC8FC\uC778\uC544~ \uBE68\uB9AC \uC640~ \u{1F43E}",
      "...(\uB208 \uB9C8\uC8FC\uCE68)"
    ],
    normal: [
      "\uC624\uB298 \uAE30\uBD84 \uB098\uC058\uC9C0 \uC54A\uC544 \u{1F431}",
      "\uC4F0\uB2F4 \uB354 \uD574\uC8FC\uBA74 \uC548 \uB3FC? \u{1F43E}",
      "\uB098 \uAE30\uBD84 \uB354 \uC88B\uC544\uC9C0\uACE0 \uC2F6\uC5B4 \u2728",
      "...\uC774 \uC815\uB3C4\uBA74 \uAD1C\uCC2E\uC544",
      "\uB0E5~ \uBB50\uD574? \uB098 \uBD10\uC918~"
    ],
    petting: [
      "\uB0E5!! \uAC70\uAE30! \uAC70\uAE30\uC57C!!",
      "\uB354 \uD574\uC918! \uB354!! \u{1F63B}",
      "\uC57C\uC639\uC57C\uC639!! \uD589\uBCF5\uD574!!",
      "\uADF8\uB798 \uADF8\uB798~ \uC88B\uC544~~",
      "\uB0E5\uB0E5\uB0E5!! \u{1F495}",
      "\uACE8\uACE8\uACE8~ \uCD5C\uACE0\uC57C~"
    ],
    happy: [
      "\uAE30\uBD84 \uCD5C\uACE0\uC57C!! \u{1F63B}",
      "\uC624\uB298 \uD558\uB8E8 \uD589\uBCF5\uD588\uC5B4 \u{1F495}",
      "\uB108 \uC815\uB9D0 \uC88B\uC544!! \u{1F43E}",
      "\uB0E5~ \uC81C\uC77C \uC88B\uC544\uD558\uB294 \uC0AC\uB78C~",
      "\uC774\uAC8C \uBC14\uB85C \uD589\uBCF5\uC774\uC57C \u2728"
    ]
  };
  var PARTICLE_POOL = [
    "\u2665",
    "\u2605",
    "\u2726",
    "\u{1F43E}",
    "\u2661",
    "\u273F"
  ];
  var TICK_MS = 50;
  var PET_GAIN = 2.5;
  var IDLE_LOSS = 0.45;
  function App() {
    var _useState = _sliced_to_array((0, import_react.useState)(50), 2), happiness = _useState[0], setHappiness = _useState[1];
    var _useState1 = _sliced_to_array((0, import_react.useState)(false), 2), isPetting = _useState1[0], setIsPetting = _useState1[1];
    var _useState2 = _sliced_to_array((0, import_react.useState)(""), 2), speech = _useState2[0], setSpeech = _useState2[1];
    var _useState3 = _sliced_to_array((0, import_react.useState)(0), 2), speechKey = _useState3[0], setSpeechKey = _useState3[1];
    var _useState4 = _sliced_to_array((0, import_react.useState)([]), 2), particles = _useState4[0], setParticles = _useState4[1];
    var isPettingRef = (0, import_react.useRef)(false);
    var happinessRef = (0, import_react.useRef)(50);
    var particleId = (0, import_react.useRef)(0);
    var wiggleAnim = (0, import_react.useRef)(new import_react_native.Animated.Value(0)).current;
    var wiggleLoopRef = (0, import_react.useRef)(null);
    isPettingRef.current = isPetting;
    (0, import_react.useEffect)(function() {
      var id = setInterval(function() {
        setHappiness(function(h) {
          var next = isPettingRef.current ? Math.min(100, h + PET_GAIN) : Math.max(0, h - IDLE_LOSS);
          happinessRef.current = next;
          return next;
        });
      }, TICK_MS);
      return function() {
        return clearInterval(id);
      };
    }, []);
    (0, import_react.useEffect)(function() {
      if (isPetting) {
        var loop = import_react_native.Animated.loop(import_react_native.Animated.sequence([
          import_react_native.Animated.timing(wiggleAnim, {
            toValue: 1,
            duration: 220,
            useNativeDriver: true,
            easing: import_react_native.Easing.inOut(import_react_native.Easing.sine)
          }),
          import_react_native.Animated.timing(wiggleAnim, {
            toValue: -1,
            duration: 220,
            useNativeDriver: true,
            easing: import_react_native.Easing.inOut(import_react_native.Easing.sine)
          })
        ]));
        wiggleLoopRef.current = loop;
        loop.start();
      } else {
        var _wiggleLoopRef_current;
        (_wiggleLoopRef_current = wiggleLoopRef.current) === null || _wiggleLoopRef_current === void 0 ? void 0 : _wiggleLoopRef_current.stop();
        import_react_native.Animated.spring(wiggleAnim, {
          toValue: 0,
          useNativeDriver: true
        }).start();
      }
    }, [
      isPetting
    ]);
    (0, import_react.useEffect)(function() {
      if (!isPetting) return;
      var id = setInterval(function() {
        var pid = particleId.current++;
        var translateY = new import_react_native.Animated.Value(0);
        var opacity = new import_react_native.Animated.Value(1);
        var rotate = new import_react_native.Animated.Value(0);
        setParticles(function(prev) {
          return _to_consumable_array(prev).concat([
            {
              id: pid,
              x: 10 + Math.random() * 80,
              type: PARTICLE_POOL[Math.floor(Math.random() * PARTICLE_POOL.length)],
              translateY,
              opacity,
              rotate
            }
          ]);
        });
        import_react_native.Animated.parallel([
          import_react_native.Animated.timing(translateY, {
            toValue: -130,
            duration: 1500,
            useNativeDriver: true
          }),
          import_react_native.Animated.timing(opacity, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true
          }),
          import_react_native.Animated.timing(rotate, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
          })
        ]).start(function() {
          return setParticles(function(prev) {
            return prev.filter(function(q) {
              return q.id !== pid;
            });
          });
        });
      }, 220);
      return function() {
        return clearInterval(id);
      };
    }, [
      isPetting
    ]);
    (0, import_react.useEffect)(function() {
      var cycle = function() {
        var h = happinessRef.current;
        var p = isPettingRef.current;
        var pool = p ? SPEECH.petting : h >= 70 ? SPEECH.happy : h >= 30 ? SPEECH.normal : SPEECH.sad;
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
    }, []);
    var catSrc = happiness >= 70 ? catHappy : happiness >= 30 ? catNormal : catSad;
    var pawCount = Math.round(happiness / 20);
    var mood = happiness >= 85 ? "\uAE30\uBD84 \uCD5C\uACE0\uC57C!! \u{1F63B}" : happiness >= 65 ? "\uAE30\uBD84 \uC88B\uC544~ \u{1F431}" : happiness >= 40 ? "\uADF8\uB0E5 \uADF8\uB798..." : happiness >= 20 ? "\uC4F0\uB2F4\uD574\uC918... \u{1F63F}" : "\uB098 \uC090\uC84C\uC5B4 \u{1F63E}";
    var startPet = (0, import_react.useCallback)(function() {
      return setIsPetting(true);
    }, []);
    var stopPet = (0, import_react.useCallback)(function() {
      return setIsPetting(false);
    }, []);
    var wiggleDeg = wiggleAnim.interpolate({
      inputRange: [
        -1,
        0,
        1
      ],
      outputRange: [
        "-5deg",
        "0deg",
        "5deg"
      ]
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
      style: s.screen,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
          style: s.header,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
              style: s.title,
              children: "\uBCF5\uBCF5\uBCF5"
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
              style: s.enTitle,
              children: "BOKBOKBOK"
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.View, {
          style: s.barSection,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, {
              style: s.pawRow,
              children: [
                0,
                1,
                2,
                3,
                4
              ].map(function(i) {
                return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
                  style: [
                    s.paw,
                    i < pawCount && s.pawOn
                  ],
                  children: "\u{1F43E}"
                }, i);
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, {
              style: s.barTrack,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.View, {
                style: [
                  s.barFill,
                  {
                    width: "".concat(happiness, "%")
                  }
                ]
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
              style: s.mood,
              children: mood
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_native.Pressable, {
          style: s.catZone,
          onPressIn: startPet,
          onPressOut: stopPet,
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Animated.Image, {
              source: catSrc,
              style: [
                s.cat,
                {
                  transform: [
                    {
                      rotate: wiggleDeg
                    },
                    {
                      scale: isPetting ? 1.07 : 1
                    }
                  ]
                }
              ],
              resizeMode: "contain"
            }),
            particles.map(function(p) {
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Animated.Text, {
                style: [
                  s.particle,
                  {
                    left: "".concat(p.x, "%"),
                    transform: [
                      {
                        translateY: p.translateY
                      },
                      {
                        rotate: p.rotate.interpolate({
                          inputRange: [
                            0,
                            1
                          ],
                          outputRange: [
                            "0deg",
                            "200deg"
                          ]
                        })
                      }
                    ],
                    opacity: p.opacity
                  }
                ],
                children: p.type
              }, p.id);
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_native.Text, {
          style: s.hint,
          children: isPetting ? "\uACE8\uACE8\uACE8~ \uB0E5\uB0E5\uB0E5~ \u{1F43E}" : "\uAFB9 \uB204\uB974\uACE0 \uC788\uC73C\uBA74 \uC4F0\uB2F4\uC4F0\uB2F4!"
        })
      ]
    });
  }
  var s = import_react_native.StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFF5F0",
      gap: 24,
      paddingHorizontal: 24
    },
    header: {
      alignItems: "center"
    },
    title: {
      fontSize: 48,
      fontWeight: "900",
      color: "#5D3535",
      letterSpacing: 4
    },
    enTitle: {
      fontSize: 11,
      fontWeight: "700",
      color: "#FF8FA3",
      letterSpacing: 6,
      marginTop: 4
    },
    barSection: {
      width: "100%",
      alignItems: "center",
      gap: 10
    },
    pawRow: {
      flexDirection: "row",
      gap: 6
    },
    paw: {
      fontSize: 20,
      opacity: 0.18
    },
    pawOn: {
      opacity: 1
    },
    barTrack: {
      width: "100%",
      height: 14,
      backgroundColor: "#FFE0E8",
      borderRadius: 99,
      overflow: "hidden"
    },
    barFill: {
      height: "100%",
      backgroundColor: "#FF6B8A",
      borderRadius: 99
    },
    mood: {
      fontSize: 15,
      fontWeight: "600",
      color: "#5D3535"
    },
    catZone: {
      position: "relative",
      alignItems: "center",
      width: 280,
      height: 330
    },
    bubble: {
      position: "absolute",
      top: 0,
      alignSelf: "center",
      backgroundColor: "#fff",
      borderRadius: 18,
      borderWidth: 2,
      borderColor: "#FFD6E0",
      paddingHorizontal: 16,
      paddingVertical: 8,
      zIndex: 2
    },
    bubbleText: {
      fontSize: 13,
      fontWeight: "600",
      color: "#5D3535"
    },
    bubbleTail: {
      position: "absolute",
      bottom: -12,
      alignSelf: "center",
      width: 0,
      height: 0,
      borderLeftWidth: 8,
      borderRightWidth: 8,
      borderTopWidth: 12,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "#FFD6E0"
    },
    cat: {
      width: 250,
      height: 250,
      marginTop: 50
    },
    particle: {
      position: "absolute",
      bottom: "50%",
      fontSize: 22,
      color: "#FF8FA3"
    },
    hint: {
      fontSize: 13,
      color: "#C0A0A8",
      textAlign: "center"
    }
  });
})();
//# sourceMappingURL=bundle.android.js.map
