(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("onlis", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["onlis"] = factory(require("vue"));
	else
		root["onlis"] = factory(root["Vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__976__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 976:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__976__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// NAMESPACE OBJECT: ./src/components/index.ts
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, {
  "uiAlert": () => (components_uiAlert),
  "uiAvatar": () => (components_uiAvatar),
  "uiBadge": () => (components_uiBadge),
  "uiBottomSheet": () => (components_uiBottomSheet),
  "uiButton": () => (components_uiButton),
  "uiCard": () => (components_uiCard),
  "uiCarousel": () => (uiCarousel_base),
  "uiCarouselItem": () => (item),
  "uiCheckBox": () => (uiCheckbox),
  "uiChip": () => (components_uiChip),
  "uiDialog": () => (components_uiDialog),
  "uiFlex": () => (components_uiFlex),
  "uiInput": () => (components_uiInput),
  "uiList": () => (uiList_base),
  "uiListGroup": () => (group),
  "uiListItem": () => (uiList_item),
  "uiLoader": () => (components_uiLoader),
  "uiMenu": () => (uiMenu),
  "uiProcess": () => (uiProcess_base),
  "uiProcessCircle": () => (circle),
  "uiRange": () => (uiRange_base),
  "uiRangeCircle": () => (uiRange_circle),
  "uiSelect": () => (uiSelect_base),
  "uiSelectOption": () => (uiSelect_option),
  "uiSwitch": () => (components_uiSwitch)
});

// NAMESPACE OBJECT: ./src/layouts/index.ts
var layouts_namespaceObject = {};
__webpack_require__.r(layouts_namespaceObject);
__webpack_require__.d(layouts_namespaceObject, {
  "uiApp": () => (layouts_uiApp),
  "uiCol": () => (_uiCol),
  "uiMain": () => (layouts_uiMain),
  "uiRow": () => (_uiRow),
  "uiSidebar": () => (uiSidebar_base),
  "uiSidebarGroup": () => (uiSidebar_group),
  "uiSidebarItem": () => (uiSidebar_item)
});

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__(976);
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);
;// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function vue_class_component_esm_createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return Vue.extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default()) ? superProto.constructor : (external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default());
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = (/* unused pure expression or super */ null && ([// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter']));
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ const vue_class_component_esm = (Component);


;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Emit.js
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, __spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, __spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/helpers/metadata.js
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function metadata_applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Model.js


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        metadata_applyMetadata(options, target, key);
        vue_class_component_esm_createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/ModelSync.js


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Prop.js


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        metadata_applyMetadata(options, target, key);
        vue_class_component_esm_createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/PropSync.js


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}

;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Watch.js

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return vue_class_component_esm_createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}

;// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/index.js
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>
















;// CONCATENATED MODULE: ./src/mixins/component/base/index.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiComponent = /** @class */ (function (_super) {
    __extends(uiComponent, _super);
    function uiComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiComponent.prototype, "isActive", {
        // Is Status
        get: function () {
            return !!this.active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponent.prototype, "isLoading", {
        get: function () {
            return !!this.loading;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponent.prototype, "isDisabled", {
        get: function () {
            return !!this.disabled;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponent.prototype, "isPointer", {
        // Is Pointer
        get: function () {
            return !!this.$listeners.click || !!this.to || !!this.href;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponent.prototype, "classStatus", {
        // Class Status
        get: function () {
            return {
                'ui-component--active': !!this.isActive,
                'ui-component--disabled': !!this.isDisabled,
                'ui-component--loading': !!this.isLoading,
                'ui-component--pointer': !!this.isPointer,
            };
        },
        enumerable: false,
        configurable: true
    });
    // On Link Active
    uiComponent.prototype.onLink = function () {
        if (!!this.to) {
            if (!this.$router)
                return false;
            this.$router.push(this.to);
        }
        else if (!!this.href) {
            window.open(this.href, !this.self ? '_blank' : '_self');
        }
    };
    __decorate([
        Prop({ type: Boolean })
    ], uiComponent.prototype, "active", void 0);
    __decorate([
        Prop({ type: Boolean })
    ], uiComponent.prototype, "disabled", void 0);
    __decorate([
        Prop({ type: Boolean })
    ], uiComponent.prototype, "loading", void 0);
    __decorate([
        Prop({ type: Boolean })
    ], uiComponent.prototype, "inline", void 0);
    __decorate([
        Prop({ type: Boolean })
    ], uiComponent.prototype, "block", void 0);
    __decorate([
        Prop({ default: null })
    ], uiComponent.prototype, "to", void 0);
    __decorate([
        Prop({ type: String })
    ], uiComponent.prototype, "href", void 0);
    __decorate([
        Prop({ type: Boolean })
    ], uiComponent.prototype, "self", void 0);
    uiComponent = __decorate([
        vue_class_component_esm
    ], uiComponent);
    return uiComponent;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const base = (uiComponent);

;// CONCATENATED MODULE: ./src/mixins/public/loading/index.ts
var loading_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var loading_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VsComponent = /** @class */ (function (_super) {
    loading_extends(VsComponent, _super);
    function VsComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show = false;
        return _this;
    }
    VsComponent.prototype.mounted = function () {
        var _this = this;
        this.$nextTick(function () {
            _this.show = true;
        });
    };
    VsComponent.prototype.render = function (h) {
        var text = h('div', {
            staticClass: 'ui-loading-text'
        }, [
            this.text
        ]);
        var loading = h('div', {
            staticClass: 'ui-loading',
            class: {
                'ui-loading--large': !!this.large,
                'ui-loading--small': !!this.small
            }
        }, []);
        var root = h('div', {
            staticClass: 'ui-loading-root',
            style: {
                '--ui-loading-background': this.background,
                '--ui-loading-color': this.color
            }
        }, [
            loading,
            this.text && text
        ]);
        return h('transition', {
            props: {
                name: 'show'
            }
        }, [
            this.show && root
        ]);
    };
    loading_decorate([
        Prop({ type: String, default: null })
    ], VsComponent.prototype, "background", void 0);
    loading_decorate([
        Prop({ type: String, default: null })
    ], VsComponent.prototype, "color", void 0);
    loading_decorate([
        Prop({ type: String, default: null })
    ], VsComponent.prototype, "text", void 0);
    loading_decorate([
        Prop({ type: Boolean })
    ], VsComponent.prototype, "large", void 0);
    loading_decorate([
        Prop({ type: Boolean })
    ], VsComponent.prototype, "small", void 0);
    VsComponent = loading_decorate([
        vue_class_component_esm
    ], VsComponent);
    return VsComponent;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const public_loading = (VsComponent);

;// CONCATENATED MODULE: ./src/util/helpers/index.ts
function getTag(value) {
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    else
        return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
var isBoolean = function (value) {
    return value === true
        || value === false
        || (isObjectLike(value) && getTag(value) == '[object Boolean]');
};
var isFunction = function (value) {
    return typeof value === 'function';
};
var isNull = function (value) {
    return value === null && value !== 0;
};
var isNumber = function (value) {
    return typeof value === 'number'
        || (isObjectLike(value) && getTag(value) == '[object Number]');
};
var isString = function (value) {
    var type = typeof value;
    return type === 'string'
        || (type === 'object'
            && value != null
            && !Array.isArray(value)
            && getTag(value) == '[object String]');
};
var isUndefined = function (value) {
    return value === undefined;
};
var isObject = function (value) {
    return typeof value === 'object'
        && !Array.isArray(value)
        && value !== null;
};
var isPercent = function (value) {
    return !!isNumber(value) && (0 <= value && value <= 100);
};
var isPxRemEm = function (value) {
    return /px$|rem$|em$/i.test(value);
};
var returnPX = function (value) {
    if (!isNumber(value) && !isString(value))
        return null;
    if (!!isNumber(value)) {
        return !isNaN(value) ? value + "px" : null;
    }
    else if (!!isString(value)) {
        return !isNaN(Number(value)) ? value + "px" : (!!isPxRemEm(value) ? value : null);
    }
};
var getObject = function (value) {
    if (!value)
        return undefined;
    if (!isObject(value) && !isFunction(value))
        return;
    var newValue;
    // Check Type
    if (!!isObject(value)) {
        newValue = value;
    }
    else if (!!isFunction(value)) {
        newValue = value();
    }
    // Return
    return !!isObject(newValue) ? newValue : undefined;
};
var toLowerCase = function (text, replaceSpace) {
    var string = text;
    var replace = replaceSpace ? replaceSpace : '';
    string = string.toLowerCase();
    string = string.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "a");
    string = string.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "e");
    string = string.replace(/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ/g, "i");
    string = string.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "o");
    string = string.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "u");
    string = string.replace(/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "y");
    string = string.replace(/đ|Đ/g, "d");
    string = string.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    string = string.replace(/(^\s+)/gm, "");
    string = string.replace(/(\s+$)/gm, "");
    string = string.replace(/\s+/g, replace);
    return string;
};

;// CONCATENATED MODULE: ./src/mixins/public/ripple/index.ts


var uiRipple = function (event, target, addClassRipple, removeClassRipple) {
    // Get Pos
    var targetPos = target.getBoundingClientRect();
    var posX = !!event ? event.clientX - targetPos.left : '50%';
    var posY = !!event ? event.clientY - targetPos.top : '50%';
    var diameter = Math.max(targetPos.width, targetPos.height);
    // Get All Ripple
    var countRipple = target.querySelectorAll('.ui-ripple-root').length;
    // Set Ripple Root
    var rippleRoot = document.createElement('div');
    rippleRoot.className = 'ui-ripple-root';
    rippleRoot.classList.add('ui-ripple-root--only');
    // Set Ripple
    var ripple = document.createElement('div');
    ripple.className = 'ui-ripple';
    ripple.style.left = returnPX(posX);
    ripple.style.top = returnPX(posY);
    ripple.style.width = returnPX(diameter);
    ripple.style.height = returnPX(diameter);
    // Init
    rippleRoot.appendChild(ripple);
    target.appendChild(rippleRoot);
    // Add Class To Target
    if (countRipple < 1) {
        addClassRipple();
    }
    // Remove Ripple
    setTimeout(function () {
        target.removeChild(rippleRoot);
        var getRipples = target.querySelectorAll('.ui-ripple-root');
        var newCountRipple = getRipples.length;
        if (newCountRipple === 0) {
            removeClassRipple();
        }
    }, 600);
};
var uiRippleFull = function (event, target, addClassRipple, removeClassRipple) {
    // Get Pos
    var targetPos = target.getBoundingClientRect();
    var posX = !!event ? event.clientX - targetPos.left : '50%';
    var posY = !!event ? event.clientY - targetPos.top : '50%';
    var diameter = Math.max(targetPos.width, targetPos.height);
    // Get All Ripple Start
    var countRippleStart = target.querySelectorAll('.ui-ripple-root--start').length;
    // Set Ripple Root
    var rippleRoot = document.createElement('div');
    rippleRoot.className = 'ui-ripple-root';
    // Set Start And Duplicate for Ripple Root
    if (countRippleStart < 1) {
        rippleRoot.classList.add('ui-ripple-root--start');
    }
    else {
        rippleRoot.classList.add('ui-ripple-root--duplicate');
    }
    // Set Ripple
    var ripple = document.createElement('div');
    ripple.className = 'ui-ripple';
    ripple.style.left = returnPX(posX);
    ripple.style.top = returnPX(posY);
    ripple.style.width = returnPX(diameter);
    ripple.style.height = returnPX(diameter);
    // Init
    rippleRoot.appendChild(ripple);
    target.appendChild(rippleRoot);
    // Add Class To Target
    if (countRippleStart < 1) {
        addClassRipple();
        //target.classList.add('ui-component--ripple')
    }
    //Remove Ripple
    function removeRipple() {
        setTimeout(function () {
            if (rippleRoot.classList.contains('ui-ripple-root--start')) {
                ripple.classList.add('ui-ripple--out');
                //target.classList.remove('ui-component--ripple')
                setTimeout(function () {
                    removeClassRipple();
                    target.removeChild(rippleRoot);
                }, 300);
            }
            else {
                target.removeChild(rippleRoot);
            }
        }, 600);
    }
    //Remove Start Ripple
    function removeStartRipple() {
        removeRipple();
        target.removeEventListener('mouseleave', removeStartRipple);
    }
    // End
    if (!!rippleRoot.classList.contains('ui-ripple-root--start')) {
        target.addEventListener('mouseleave', removeStartRipple);
    }
    else {
        removeRipple();
    }
};

;// CONCATENATED MODULE: ./src/mixins/public/icon/close/index.ts
var close_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var close_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var uiIconClose = /** @class */ (function (_super) {
    close_extends(uiIconClose, _super);
    function uiIconClose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiIconClose.prototype.render = function (h) {
        return h('i', {
            staticClass: 'ui-icon-close',
            style: {
                '--ui-icon-close-size': this.size
            },
            on: __assign({}, this.$listeners)
        });
    };
    close_decorate([
        Prop({ type: String, default: null })
    ], uiIconClose.prototype, "size", void 0);
    uiIconClose = close_decorate([
        vue_class_component_esm
    ], uiIconClose);
    return uiIconClose;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const icon_close = (uiIconClose);

;// CONCATENATED MODULE: ./src/mixins/public/icon/arrow/index.ts
var arrow_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arrow_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var uiIconArrow = /** @class */ (function (_super) {
    arrow_extends(uiIconArrow, _super);
    function uiIconArrow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiIconArrow.prototype.render = function (h) {
        return h('i', {
            staticClass: 'ui-icon-arrow',
            class: {
                'ui-icon-arrow--top': !!this.top,
                'ui-icon-arrow--left': !!this.left,
                'ui-icon-arrow--right': !!this.right,
            }
        });
    };
    arrow_decorate([
        Prop({ type: Boolean, default: false })
    ], uiIconArrow.prototype, "top", void 0);
    arrow_decorate([
        Prop({ type: Boolean, default: false })
    ], uiIconArrow.prototype, "left", void 0);
    arrow_decorate([
        Prop({ type: Boolean, default: false })
    ], uiIconArrow.prototype, "right", void 0);
    uiIconArrow = arrow_decorate([
        vue_class_component_esm
    ], uiIconArrow);
    return uiIconArrow;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const arrow = (uiIconArrow);

;// CONCATENATED MODULE: ./src/mixins/public/icon/check/index.ts
var check_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var check_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var uiIconCheck = /** @class */ (function (_super) {
    check_extends(uiIconCheck, _super);
    function uiIconCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiIconCheck.prototype.render = function (h) {
        var icon = h('i', {
            staticClass: 'ui-icon-check',
            class: [
                {
                    'ui-icon-check--checked': this.checked,
                }
            ]
        });
        return icon;
    };
    check_decorate([
        Prop({ type: Boolean })
    ], uiIconCheck.prototype, "checked", void 0);
    uiIconCheck = check_decorate([
        vue_class_component_esm
    ], uiIconCheck);
    return uiIconCheck;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const check = (uiIconCheck);

;// CONCATENATED MODULE: ./src/mixins/public/index.ts






;// CONCATENATED MODULE: ./src/util/color/index.ts
var hexToRGB = function (hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
var getColor = function (color) {
    if (!color)
        return null;
    if (color === 'primary'
        || color === 'danger'
        || color === 'warn'
        || color === 'success'
        || color === 'dark'
        || color === 'light'
        || color === 'background'
        || color === 'content'
        || color === 'child'
        || color === 'text'
        || color === 'gray'
        || color === 'disabled')
        return "var(--ui-" + color + ")";
    var isRGB = /^(rgb|rgba)/.test(color);
    var isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(color);
    var isHEX = /^(#)/.test(color);
    if (!!isRGB) {
        var arrayColor = color.replace(/[rgba()]/g, '').split(',');
        return arrayColor[0] + "," + arrayColor[1] + "," + arrayColor[2];
    }
    else if (!!isHEX) {
        var rgb = hexToRGB(color);
        return rgb.r + "," + rgb.g + "," + rgb.b;
    }
    else if (!!isRGBNumbers) {
        return color;
    }
    else
        return null;
};

;// CONCATENATED MODULE: ./src/mixins/component/color/index.ts
var color_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var color_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiComponentColor = /** @class */ (function (_super) {
    color_extends(uiComponentColor, _super);
    function uiComponentColor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onRipple = false;
        return _this;
    }
    // Ripple Logic
    uiComponentColor.prototype.addClassRipple = function () {
        this.onRipple = true;
    };
    uiComponentColor.prototype.removeClassRipple = function () {
        this.onRipple = false;
    };
    uiComponentColor.prototype.startRipple = function (event, el) {
        if (!this.ripple)
            return;
        if (this.fashion === 'flat-full') {
            uiRippleFull(event, el, this.addClassRipple, this.removeClassRipple);
        }
        else {
            uiRipple(event, el, this.addClassRipple, this.removeClassRipple);
        }
    };
    Object.defineProperty(uiComponentColor.prototype, "isColor", {
        // Color Logic
        get: function () {
            return !!this.color || !!this.isStatusColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponentColor.prototype, "isStatusColor", {
        get: function () {
            return !!this.success
                || !!this.warn
                || !!this.danger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponentColor.prototype, "isMainColor", {
        get: function () {
            return !this.isStatusColor && (this.color === 'primary' || this.color === 'dark' || this.color === 'light');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponentColor.prototype, "classColor", {
        get: function () {
            var _a;
            return _a = {
                    'ui-component--color': !!this.isColor,
                    'ui-color--child': !!this.child,
                    'ui-color--success': !!this.success,
                    'ui-color--warn': !!this.warn,
                    'ui-color--danger': !!this.danger
                },
                _a["ui-color--" + this.color] = !!this.isMainColor,
                _a;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponentColor.prototype, "styleColor", {
        get: function () {
            return {
                '--ui-color': !!this.color && (!this.isStatusColor && !this.isMainColor) ? getColor(this.color) : null
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponentColor.prototype, "getNowFashion", {
        // Fashion Logic
        get: function () {
            if (!this.isActive) {
                return this.fashion;
            }
            else {
                return !!this.fashionActive ? this.fashionActive : this.fashion;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiComponentColor.prototype, "classFashion", {
        get: function () {
            var _a;
            return _a = {
                    'ui-component--ripple': !!this.onRipple,
                    'ui-component--border': !!this.border && this.fashion !== 'text',
                    'ui-component-fashion--basic': !this.fashion
                },
                _a["ui-component-fashion--" + this.getNowFashion] = !!this.fashion,
                _a;
        },
        enumerable: false,
        configurable: true
    });
    color_decorate([
        Prop({ type: String })
    ], uiComponentColor.prototype, "fashion", void 0);
    color_decorate([
        Prop({ type: String })
    ], uiComponentColor.prototype, "fashionActive", void 0);
    color_decorate([
        Prop({ type: Boolean })
    ], uiComponentColor.prototype, "border", void 0);
    color_decorate([
        Prop({ type: String, default: 'primary' })
    ], uiComponentColor.prototype, "color", void 0);
    color_decorate([
        Prop({ type: Boolean })
    ], uiComponentColor.prototype, "warn", void 0);
    color_decorate([
        Prop({ type: Boolean })
    ], uiComponentColor.prototype, "success", void 0);
    color_decorate([
        Prop({ type: Boolean })
    ], uiComponentColor.prototype, "danger", void 0);
    color_decorate([
        Prop({ type: Boolean })
    ], uiComponentColor.prototype, "child", void 0);
    color_decorate([
        Prop({ type: Boolean, default: true })
    ], uiComponentColor.prototype, "ripple", void 0);
    uiComponentColor = color_decorate([
        vue_class_component_esm
    ], uiComponentColor);
    return uiComponentColor;
}(base));
/* harmony default export */ const color = (uiComponentColor);

;// CONCATENATED MODULE: ./src/mixins/component/index.ts



;// CONCATENATED MODULE: ./src/components/uiAvatar/_uiAvatar.ts
var _uiAvatar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiAvatar_assign = (undefined && undefined.__assign) || function () {
    _uiAvatar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiAvatar_assign.apply(this, arguments);
};
var _uiAvatar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiAvatar = /** @class */ (function (_super) {
    _uiAvatar_extends(uiAvatar, _super);
    function uiAvatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // On Click
    uiAvatar.prototype.onClick = function (event) {
        if (!this.isPointer)
            return;
        this.startRipple(event, this.$el);
        this.onLink();
        this.$emit('click', event);
    };
    Object.defineProperty(uiAvatar.prototype, "miniText", {
        // Mini Text
        get: function () {
            if (!this.$slots.text)
                return this.$slots.default;
            var nodeText = this.$slots.text[0];
            if (!nodeText.text)
                return this.$slots.default;
            var text = nodeText.text.trim();
            return text.split(/\s/g).map(function (item) {
                return item[0];
            });
        },
        enumerable: false,
        configurable: true
    });
    // Render
    uiAvatar.prototype.render = function (h) {
        return h('div', {
            staticClass: 'ui-avatar',
            class: [
                {
                    'ui-avatar--circle': !!this.circle,
                },
                'ui-component',
                'ui-component--inline-flex',
                this.classStatus,
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-avatar-size': returnPX(this.size),
                    '--ui-avatar-img-size': returnPX(this.imgSize)
                }
            ],
            attrs: _uiAvatar_assign({}, this.$attrs),
            on: _uiAvatar_assign(_uiAvatar_assign({}, this.$listeners), { click: this.onClick })
        }, [
            !!this.isLoading && h(public_loading),
            !!this.$slots.text ? this.miniText : this.$slots.default
        ]);
    };
    _uiAvatar_decorate([
        Prop({ type: String, default: 'full' })
    ], uiAvatar.prototype, "fashion", void 0);
    _uiAvatar_decorate([
        Prop()
    ], uiAvatar.prototype, "size", void 0);
    _uiAvatar_decorate([
        Prop()
    ], uiAvatar.prototype, "imgSize", void 0);
    _uiAvatar_decorate([
        Prop({ type: Boolean })
    ], uiAvatar.prototype, "circle", void 0);
    uiAvatar = _uiAvatar_decorate([
        vue_class_component_esm
    ], uiAvatar);
    return uiAvatar;
}(color));
/* harmony default export */ const _uiAvatar = (uiAvatar);

;// CONCATENATED MODULE: ./src/components/uiAvatar/index.ts


_uiAvatar.install = function (vue) {
    vue.component('ui-avatar', _uiAvatar);
};
/* harmony default export */ const components_uiAvatar = (_uiAvatar);

;// CONCATENATED MODULE: ./src/components/uiAlert/_uiAlert.ts
var _uiAlert_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiAlert_assign = (undefined && undefined.__assign) || function () {
    _uiAlert_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiAlert_assign.apply(this, arguments);
};
var _uiAlert_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiAlert = /** @class */ (function (_super) {
    _uiAlert_extends(uiAlert, _super);
    function uiAlert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiAlert.prototype.onClick = function (event) {
        if (!this.isPointer)
            return;
        this.onLink();
        this.startRipple(event, this.$el);
        this.$emit('click', event);
    };
    uiAlert.prototype.render = function (h) {
        var _this = this;
        // Left
        var icon = h('div', {
            staticClass: 'ui-alert__left__icon',
            class: {
                'ui-component--pointer': !!this.$listeners.icon
            },
            on: {
                click: function (event) {
                    if (!_this.$listeners.icon)
                        return;
                    _this.startRipple(event, _this.$el);
                    _this.$emit('icon');
                }
            }
        }, [
            this.$slots.icon
        ]);
        var left = h('div', {
            staticClass: 'ui-alert__left'
        }, [
            !!this.$slots.icon ? icon : this.$slots.left
        ]);
        // Content
        var title = h('div', {
            staticClass: 'ui-alert__content__title'
        }, [
            this.$slots.title
        ]);
        var body = h('div', {
            staticClass: 'ui-alert__content__body'
        }, [
            this.$slots.default
        ]);
        var content = h('div', {
            staticClass: 'ui-alert__content'
        }, [
            !!this.$slots.title && title,
            !!this.$slots.default && body
        ]);
        //Right
        var right = h('div', {
            staticClass: 'ui-alert__right',
        }, [
            !!this.isLoading ? h(public_loading) : this.$slots.right
        ]);
        // Alert
        var alert = h('div', {
            staticClass: 'ui-alert',
            class: [
                {
                    'ui-alert--center': !!this.center
                },
                'ui-component',
                'ui-component--flex',
                this.classStatus,
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-alert-width': returnPX(this.width),
                    '--ui-alert-icon-size': returnPX(this.iconSize)
                }
            ],
            directives: [
                {
                    name: 'show',
                    value: !!this.value
                }
            ],
            attrs: this.$attrs,
            on: _uiAlert_assign(_uiAlert_assign({}, this.$listeners), { click: this.onClick })
        }, [
            (!!this.$slots.left || !!this.$slots.icon) && left,
            content,
            (!!this.$slots.right || !!this.isLoading) && right
        ]);
        // Transition
        return h('transition', {
            props: {
                name: "ui-" + this.effect
            }
        }, [
            alert
        ]);
    };
    _uiAlert_decorate([
        Model('model', { type: Boolean, default: true })
    ], uiAlert.prototype, "value", void 0);
    _uiAlert_decorate([
        Prop()
    ], uiAlert.prototype, "width", void 0);
    _uiAlert_decorate([
        Prop()
    ], uiAlert.prototype, "iconSize", void 0);
    _uiAlert_decorate([
        Prop({ type: Boolean })
    ], uiAlert.prototype, "center", void 0);
    _uiAlert_decorate([
        Prop({ type: String, default: 'right' })
    ], uiAlert.prototype, "effect", void 0);
    uiAlert = _uiAlert_decorate([
        vue_class_component_esm
    ], uiAlert);
    return uiAlert;
}(color));
/* harmony default export */ const _uiAlert = (uiAlert);

;// CONCATENATED MODULE: ./src/components/uiAlert/index.ts


_uiAlert.install = function (vue) {
    vue.component('ui-alert', _uiAlert);
};
/* harmony default export */ const components_uiAlert = (_uiAlert);

;// CONCATENATED MODULE: ./src/components/uiBadge/_uiBadge.ts
var _uiBadge_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiBadge_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var uiBadge = /** @class */ (function (_super) {
    _uiBadge_extends(uiBadge, _super);
    function uiBadge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiBadge.prototype.render = function (h) {
        var dot = h('div', {
            staticClass: 'ui-badge-dot',
            class: {
                'ui-badge-dot--top': !!this.top,
                'ui-badge-dot--left': !!this.left,
                'ui-badge-dot--border': !!this.border,
                'ui-badge-dot--hasContent': !!this.$slots.text,
            },
            directives: [
                {
                    name: 'show',
                    value: !!this.value
                }
            ]
        }, [
            this.$slots.text
        ]);
        var dotTransition = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            dot
        ]);
        return h('div', {
            staticClass: 'ui-badge',
            class: [
                {
                    'ui-component--inline-flex': !this.block,
                    'ui-component--flex': !!this.block
                },
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-badge-size': returnPX(this.size),
                    '--ui-badge-zIndex': this.zIndex
                }
            ]
        }, [
            this.$slots.default,
            dotTransition
        ]);
    };
    _uiBadge_decorate([
        Model('model', { type: Boolean, default: true })
    ], uiBadge.prototype, "value", void 0);
    _uiBadge_decorate([
        Prop({ type: String, default: 'success' })
    ], uiBadge.prototype, "color", void 0);
    _uiBadge_decorate([
        Prop()
    ], uiBadge.prototype, "size", void 0);
    _uiBadge_decorate([
        Prop({ type: Boolean })
    ], uiBadge.prototype, "left", void 0);
    _uiBadge_decorate([
        Prop({ type: Boolean })
    ], uiBadge.prototype, "top", void 0);
    _uiBadge_decorate([
        Prop({ type: [String, Number] })
    ], uiBadge.prototype, "zIndex", void 0);
    uiBadge = _uiBadge_decorate([
        vue_class_component_esm
    ], uiBadge);
    return uiBadge;
}(color));
/* harmony default export */ const _uiBadge = (uiBadge);

;// CONCATENATED MODULE: ./src/components/uiBadge/index.ts


_uiBadge.install = function (vue) {
    vue.component('ui-badge', _uiBadge);
};
/* harmony default export */ const components_uiBadge = (_uiBadge);

;// CONCATENATED MODULE: ./src/util/body/index.ts
var insertBody = function (el, parent) {
    var rootApp = document.getElementById('_app_') || document.body;
    var target = parent ? parent : (rootApp ? rootApp : document.body);
    target.insertBefore(el, target.lastChild);
};
var removeBody = function (el, parent) {
    var rootApp = document.getElementById('_app_') || document.body;
    var target = parent ? parent : (rootApp ? rootApp : document.body);
    target.removeChild(el);
};
var attachedRoot = function (node) {
    if (typeof node.getRootNode !== 'function') {
        while (node.parentNode)
            node = node.parentNode;
        if (node !== document)
            return null;
        return document;
    }
    var root = node.getRootNode();
    if (root !== document && root.getRootNode({ composed: true }) !== document)
        return null;
    return root;
};

;// CONCATENATED MODULE: ./src/components/uiDialog/_uiDialog.ts
var _uiDialog_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiDialog_assign = (undefined && undefined.__assign) || function () {
    _uiDialog_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiDialog_assign.apply(this, arguments);
};
var _uiDialog_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiDialog = /** @class */ (function (_super) {
    _uiDialog_extends(uiDialog, _super);
    function uiDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isShow = false;
        _this.isShake = false;
        return _this;
    }
    Object.defineProperty(uiDialog.prototype, "controlConfig", {
        // Control
        get: function () {
            return _uiDialog_assign({ top: false, right: false, block: false }, this.control);
        },
        enumerable: false,
        configurable: true
    });
    // Action Shake
    uiDialog.prototype.onShake = function () {
        var _this = this;
        if (!!this.isShake)
            return;
        this.isShake = true;
        setTimeout(function () {
            _this.isShake = false;
        }, 250);
    };
    // On Close
    uiDialog.prototype.onClose = function () {
        if (!!this.custom)
            return this.$emit('custom-close');
        this.$emit('model', false);
    };
    // Insert, Remove
    uiDialog.prototype.insertDialog = function () {
        var _this = this;
        if (!!this.absolute)
            return;
        this.$nextTick(function () {
            insertBody(_this.$el);
            document.body.style.overflow = 'hidden';
        });
    };
    uiDialog.prototype.beforeDestroy = function () {
        if (!!this.absolute)
            return;
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
    };
    // Show, Hide
    uiDialog.prototype.show = function () {
        var _this = this;
        this.isShow = true;
        this.insertDialog();
        this.$nextTick(function () { return _this.$emit('open'); });
    };
    uiDialog.prototype.hide = function () {
        this.isShow = false;
        document.body.style.overflow = '';
        this.$emit('close');
    };
    // Vue Function
    uiDialog.prototype.mounted = function () {
        if (this.value)
            return this.show();
    };
    uiDialog.prototype.onValueChange = function (val) {
        if (!!val)
            return this.show();
        this.hide();
    };
    uiDialog.prototype.onShakeChange = function (val) {
        if (!!val) {
            this.onShake();
            this.$emit('update:shake', false);
        }
    };
    // Render
    uiDialog.prototype.render = function (h) {
        var _this = this;
        var loading = h(public_loading, {
            props: {
                large: true
            }
        });
        var close = h(icon_close, {
            staticClass: 'ui-dialog__close',
            on: {
                click: this.onClose
            }
        });
        var title = h('div', {
            staticClass: 'ui-dialog__title'
        }, [
            this.$slots.title
        ]);
        var header = h('div', {
            staticClass: 'ui-dialog__header'
        }, [
            this.$slots.header
        ]);
        var body = h('div', {
            staticClass: 'ui-dialog__body'
        }, [
            this.$slots.default
        ]);
        var footer = h('div', {
            staticClass: 'ui-dialog__footer'
        }, [
            this.$slots.footer
        ]);
        var dialog = h('div', {
            staticClass: 'ui-dialog',
            class: [
                'ui-component',
                'ui-component--flex',
                {
                    'ui-component--loading': !!this.isLoading,
                },
                this.classFashion,
                this.classColor
            ]
        }, [
            !!this.loading && loading,
            !this.hideClose && !this.loading && close,
            !!this.$slots.title && title,
            !!this.$slots.header && header,
            !!this.$slots.default && body,
            !!this.$slots.footer && footer
        ]);
        var overlay = h('div', {
            staticClass: 'ui-dialog-overlay',
            on: {
                click: function () {
                    if (!!_this.preventClose || !!_this.loading)
                        return _this.onShake();
                    _this.onClose();
                }
            }
        });
        var control = h('div', {
            staticClass: 'ui-dialog-control',
            class: {
                'ui-dialog-control--block': !!this.controlConfig.block,
                'ui-dialog-control--top': !!this.controlConfig.top,
                'ui-dialog-control--right': !!this.controlConfig.right
            }
        }, [
            this.$slots.control
        ]);
        var root = h('div', {
            staticClass: 'ui-dialog-root',
            ref: 'dialog',
            class: [
                {
                    'ui-dialog-root--blur': !!this.blur,
                    'ui-dialog-root--shake': !!this.isShake
                },
                {
                    'ui-dialog-root--default': !this.bottom,
                    'ui-dialog-root--bottom': !!this.bottom,
                    'ui-dialog-root--fullScreen': !!this.fullScreen,
                },
                {
                    'ui-component--absolute': !!this.absolute,
                }
            ],
            style: [
                this.styleColor,
                {
                    '--ui-dialog-max-width': returnPX(this.maxWidth),
                    '--ui-dialog-max-height': returnPX(this.maxHeight)
                }
            ]
        }, [
            overlay,
            dialog,
            control
        ]);
        return h('transition', {
            props: {
                name: 'ui-dialog'
            }
        }, [
            this.isShow && root
        ]);
    };
    _uiDialog_decorate([
        Model('model', { type: Boolean })
    ], uiDialog.prototype, "value", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean })
    ], uiDialog.prototype, "absolute", void 0);
    _uiDialog_decorate([
        Prop()
    ], uiDialog.prototype, "maxWidth", void 0);
    _uiDialog_decorate([
        Prop()
    ], uiDialog.prototype, "maxHeight", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean })
    ], uiDialog.prototype, "preventClose", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean })
    ], uiDialog.prototype, "hideClose", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean })
    ], uiDialog.prototype, "shake", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean })
    ], uiDialog.prototype, "fullScreen", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean })
    ], uiDialog.prototype, "custom", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean, default: true })
    ], uiDialog.prototype, "blur", void 0);
    _uiDialog_decorate([
        Prop({ type: Boolean })
    ], uiDialog.prototype, "bottom", void 0);
    _uiDialog_decorate([
        Prop({ type: Object })
    ], uiDialog.prototype, "control", void 0);
    _uiDialog_decorate([
        Watch('value')
    ], uiDialog.prototype, "onValueChange", null);
    _uiDialog_decorate([
        Watch('shake')
    ], uiDialog.prototype, "onShakeChange", null);
    uiDialog = _uiDialog_decorate([
        vue_class_component_esm
    ], uiDialog);
    return uiDialog;
}(color));
/* harmony default export */ const _uiDialog = (uiDialog);

;// CONCATENATED MODULE: ./src/components/uiBottomSheet/_uiBottomSheet.ts
var _uiBottomSheet_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiBottomSheet_assign = (undefined && undefined.__assign) || function () {
    _uiBottomSheet_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiBottomSheet_assign.apply(this, arguments);
};
var _uiBottomSheet_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiBottomSheet = /** @class */ (function (_super) {
    _uiBottomSheet_extends(uiBottomSheet, _super);
    function uiBottomSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiBottomSheet.prototype, "controlConfig", {
        // Control
        get: function () {
            return _uiBottomSheet_assign({ top: true, right: false, block: false }, this.control);
        },
        enumerable: false,
        configurable: true
    });
    _uiBottomSheet_decorate([
        Prop({ type: Boolean, default: true })
    ], uiBottomSheet.prototype, "bottom", void 0);
    _uiBottomSheet_decorate([
        Prop({ type: Boolean, default: false })
    ], uiBottomSheet.prototype, "blur", void 0);
    _uiBottomSheet_decorate([
        Prop({ type: Object })
    ], uiBottomSheet.prototype, "control", void 0);
    uiBottomSheet = _uiBottomSheet_decorate([
        vue_class_component_esm
    ], uiBottomSheet);
    return uiBottomSheet;
}(_uiDialog));
/* harmony default export */ const _uiBottomSheet = (uiBottomSheet);

;// CONCATENATED MODULE: ./src/components/uiBottomSheet/index.ts

_uiBottomSheet.install = function (vue) {
    vue.component('ui-bottom-sheet', _uiBottomSheet);
};
/* harmony default export */ const components_uiBottomSheet = (_uiBottomSheet);

;// CONCATENATED MODULE: ./src/components/uiButton/_uiButton.ts
var _uiButton_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiButton_assign = (undefined && undefined.__assign) || function () {
    _uiButton_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiButton_assign.apply(this, arguments);
};
var _uiButton_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiButton = /** @class */ (function (_super) {
    _uiButton_extends(uiButton, _super);
    function uiButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiButton.prototype.onClick = function (event) {
        this.startRipple(event, this.$el);
        this.onLink();
        this.$emit('click', event);
    };
    uiButton.prototype.render = function (h) {
        var _a;
        return h('button', {
            staticClass: 'ui-button',
            class: [
                'ui-component',
                {
                    'ui-button--icon': !!this.icon,
                    'ui-button--circle': !!this.circle,
                    'ui-button--block': !!this.block
                },
                {
                    'ui-component--inline-flex': !this.block,
                    'ui-component--flex': !!this.block,
                },
                (_a = {
                        'ui-component--size--m': !this.size
                    },
                    _a["ui-component--size--" + this.size] = !!this.size,
                    _a),
                this.classStatus,
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-button-width': !this.block ? returnPX(this.width) : null
                }
            ],
            attrs: _uiButton_assign(_uiButton_assign({}, this.$attrs), { active: this.active, disabled: this.disabled }),
            on: _uiButton_assign(_uiButton_assign({}, this.$listeners), { click: this.onClick })
        }, [
            !!this.isLoading && h(public_loading),
            this.$slots.default
        ]);
    };
    _uiButton_decorate([
        Prop()
    ], uiButton.prototype, "width", void 0);
    _uiButton_decorate([
        Prop({ type: String, default: 'full' })
    ], uiButton.prototype, "fashion", void 0);
    _uiButton_decorate([
        Prop({ type: String, default: 'm' })
    ], uiButton.prototype, "size", void 0);
    _uiButton_decorate([
        Prop({ type: Boolean })
    ], uiButton.prototype, "icon", void 0);
    _uiButton_decorate([
        Prop({ type: Boolean })
    ], uiButton.prototype, "circle", void 0);
    _uiButton_decorate([
        Prop({ type: Boolean })
    ], uiButton.prototype, "block", void 0);
    uiButton = _uiButton_decorate([
        vue_class_component_esm
    ], uiButton);
    return uiButton;
}(color));
/* harmony default export */ const _uiButton = (uiButton);

;// CONCATENATED MODULE: ./src/components/uiButton/index.ts


_uiButton.install = function (vue) {
    vue.component('ui-button', _uiButton);
};
/* harmony default export */ const components_uiButton = (_uiButton);

;// CONCATENATED MODULE: ./src/components/uiCard/_uiCard.ts
var _uiCard_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiCard_assign = (undefined && undefined.__assign) || function () {
    _uiCard_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiCard_assign.apply(this, arguments);
};
var _uiCard_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiCard = /** @class */ (function (_super) {
    _uiCard_extends(uiCard, _super);
    function uiCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiCard.prototype.onClick = function (event) {
        if (!this.isPointer)
            return;
        this.startRipple(event, this.$el);
        this.onLink();
        this.$emit('click', event);
    };
    uiCard.prototype.renderSlot = function (name, type, classDefault) {
        if (classDefault === void 0) { classDefault = false; }
        var slot = !!type ? this.$slots[name + "-" + type] : this.$slots["" + name];
        if (!slot)
            return null;
        return this.$createElement('div', {
            staticClass: "ui-card__" + name,
            class: [
                !!classDefault ? "ui-card__" + name + "--default" : null,
                !!type ? "ui-card__" + name + "--" + type : null
            ]
        }, [
            slot
        ]);
    };
    uiCard.prototype.render = function (h) {
        //Image
        var defaultImage = this.renderSlot('img', null, true);
        var avatarImage = this.renderSlot('img', 'avatar');
        //Title
        var defaultTitle = this.renderSlot('title');
        var centerTitle = this.renderSlot('title', 'center');
        var rightTitle = this.renderSlot('title', 'right');
        //SubTitle
        var defaultSubtitle = this.renderSlot('subtitle');
        var centerSubtitle = this.renderSlot('subtitle', 'center');
        var rightSubtitle = this.renderSlot('subtitle', 'right');
        //Body
        var body = h('div', {
            staticClass: 'ui-card__body'
        }, [
            this.$slots.default
        ]);
        //Footer
        var defaultFooter = this.renderSlot('footer');
        var centerFooter = this.renderSlot('footer', 'center');
        var rightFooter = this.renderSlot('footer', 'right');
        return h('div', {
            staticClass: 'ui-card',
            class: [
                'ui-component',
                'ui-component--flex',
                this.classStatus,
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-card-width': returnPX(this.width)
                }
            ],
            attrs: _uiCard_assign({}, this.$attrs),
            on: _uiCard_assign(_uiCard_assign({}, this.$listeners), { click: this.onClick })
        }, [
            //Loading
            !!this.isLoading && h(public_loading, {
                props: {
                    large: true
                }
            }),
            //Img
            !!this.$slots.img && !this.$slots["img-avatar"] && defaultImage,
            !this.$slots.img && !!this.$slots["img-avatar"] && avatarImage,
            //Title
            !!this.$slots.title && !this.$slots["title-center"] && !this.$slots["title-right"] && defaultTitle,
            !this.$slots.title && !!this.$slots["title-center"] && !this.$slots["title-right"] && centerTitle,
            !this.$slots.title && !this.$slots["title-center"] && !!this.$slots["title-right"] && rightTitle,
            //SubTitle
            !!this.$slots.subtitle && !this.$slots["subtitle-center"] && !this.$slots["subtitle-right"] && defaultSubtitle,
            !this.$slots.subtitle && !!this.$slots["subtitle-center"] && !this.$slots["subtitle-right"] && centerSubtitle,
            !this.$slots.subtitle && !this.$slots["subtitle-center"] && !!this.$slots["subtitle-right"] && rightSubtitle,
            //Body
            !!this.$slots.default && body,
            //Footer
            !!this.$slots.footer && !this.$slots["footer-center"] && !this.$slots["footer-right"] && defaultFooter,
            !this.$slots.footer && !!this.$slots["footer-center"] && !this.$slots["footer-right"] && centerFooter,
            !this.$slots.footer && !this.$slots["footer-center"] && !!this.$slots["footer-right"] && rightFooter,
        ]);
    };
    _uiCard_decorate([
        Prop({ default: null })
    ], uiCard.prototype, "width", void 0);
    uiCard = _uiCard_decorate([
        vue_class_component_esm
    ], uiCard);
    return uiCard;
}(color));
/* harmony default export */ const _uiCard = (uiCard);

;// CONCATENATED MODULE: ./src/components/uiCard/index.ts


_uiCard.install = function (vue) {
    vue.component('ui-card', _uiCard);
};
/* harmony default export */ const components_uiCard = (_uiCard);

;// CONCATENATED MODULE: ./src/components/uiCheckbox/_uiCheckbox.ts
var _uiCheckbox_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiCheckbox_assign = (undefined && undefined.__assign) || function () {
    _uiCheckbox_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiCheckbox_assign.apply(this, arguments);
};
var _uiCheckbox_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiCheckBox = /** @class */ (function (_super) {
    _uiCheckbox_extends(uiCheckBox, _super);
    function uiCheckBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiCheckBox.prototype, "isChecked", {
        // Get Checked
        get: function () {
            if (!isUndefined(this.checked))
                return this.checked;
            if (!!isUndefined(this.model))
                return false;
            if (typeof this.model == 'boolean') {
                return this.model;
            }
            else if (Array.isArray(this.model)) {
                if (!this.value)
                    return;
                var array = this.model;
                var isValueInModel = void 0;
                // Check Value
                if (typeof this.value === 'object') {
                    isValueInModel = JSON.stringify(array).indexOf(JSON.stringify(this.value)) !== -1;
                }
                else {
                    isValueInModel = array.indexOf(this.value) !== -1;
                }
                return isValueInModel;
            }
            else {
                if (!this.value)
                    return false;
                if (this.value === this.model)
                    return true;
                else if (JSON.stringify(this.value) === JSON.stringify(this.model))
                    return true;
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Input
    uiCheckBox.prototype.onInput = function (event) {
        var _this = this;
        if (!isUndefined(this.checked))
            return;
        if (!!this.isLoading || !!this.isDisabled)
            return;
        if (!!isUndefined(this.model))
            return;
        if (typeof this.model == 'boolean') {
            this.$emit('model', !this.model);
        }
        else if (Array.isArray(this.model)) {
            if (!this.value)
                return;
            var array = this.model;
            var isValueInModel = void 0;
            var indexValue_1 = 0;
            // Check Value
            if (typeof this.value === 'object') {
                isValueInModel = JSON.stringify(array).indexOf(JSON.stringify(this.value)) !== -1;
            }
            else {
                isValueInModel = array.indexOf(this.value) !== -1;
            }
            // Set Index Value
            array.forEach(function (item, index) {
                if (JSON.stringify(item) === JSON.stringify(_this.value)) {
                    indexValue_1 = index;
                }
            });
            // Update Model
            if (isValueInModel) {
                this.$delete(array, indexValue_1);
            }
            else {
                this.$set(array, array.length, this.value);
            }
        }
        else {
            if (!this.value)
                return;
            if (!this.model || this.model !== this.value)
                return this.$emit('model', this.value);
            this.$emit('model', null);
        }
        this.$emit('input', this.model);
    };
    uiCheckBox.prototype.render = function (h) {
        // Loading
        var loading = h(public_loading, {
            props: {
                small: true
            }
        });
        // Icon Checkbox
        var iconCheckbox = h(check, {
            props: {
                checked: this.isChecked
            }
        });
        // Input
        var input = h('input', {
            staticClass: 'ui-checkbox-input',
            domProps: {
                id: this._uid,
                checked: this.isChecked,
                disabled: this.isDisabled
            },
            attrs: _uiCheckbox_assign(_uiCheckbox_assign({}, this.$attrs), { type: 'checkbox' }),
            on: _uiCheckbox_assign(_uiCheckbox_assign({}, this.$listeners), { input: this.onInput })
        });
        // Label
        var label = h('span', {
            staticClass: 'ui-checkbox-label',
            class: {
                'ui-checkbox-label--right': !this.labelLeft,
                'ui-checkbox-label--left': !!this.labelLeft,
                'ui-checkbox-label--space': !!this.labelSpace,
            }
        }, [
            this.$slots.default
        ]);
        // On
        var on = h('span', {
            directives: [
                {
                    name: 'show',
                    value: this.isChecked
                }
            ]
        }, [
            this.$slots.on
        ]);
        // Off
        var off = h('span', {
            directives: [
                {
                    name: 'show',
                    value: !this.isChecked
                }
            ]
        }, [
            this.$slots.off
        ]);
        // Text Switch
        var textSwitch = h('div', {
            staticClass: 'ui-switch-text'
        }, [
            !!this.isChecked ? on : off
        ]);
        // Icon Switch
        var iconSwitch = h('div', {
            staticClass: 'ui-switch-icon'
        });
        // Checkbox
        var checkbox = h('div', {
            staticClass: 'ui-checkbox',
            class: [
                'ui-component',
                {
                    'ui-component-fashion--basic': !this.isChecked,
                    'ui-component-fashion--full': !!this.isChecked
                },
                {
                    'ui-component--loading': !!this.isLoading,
                    'ui-component--disabled': !!this.isDisabled,
                },
                {
                    'ui-checkbox--default': !this.switch,
                    'ui-checkbox--switch': !!this.switch,
                    'ui-checkbox--checked': !!this.isChecked,
                    'ui-checkbox--disabled': !!this.isDisabled,
                },
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-checkbox-size': returnPX(this.size)
                }
            ]
        }, [
            !!this.isLoading && loading,
            !!this.switch && textSwitch,
            !!this.switch ? iconSwitch : iconCheckbox
        ]);
        // Root
        return h('label', {
            staticClass: 'ui-checkbox-root',
            class: {
                'ui-component--inline-flex': !this.labelSpace,
                'ui-component--flex': !!this.labelSpace,
            },
            attrs: {
                for: this._uid
            }
        }, [
            input,
            checkbox,
            !!this.$slots.default && label
        ]);
    };
    _uiCheckbox_decorate([
        Model('model')
    ], uiCheckBox.prototype, "model", void 0);
    _uiCheckbox_decorate([
        Prop([String, Object, Number])
    ], uiCheckBox.prototype, "value", void 0);
    _uiCheckbox_decorate([
        Prop({ type: Boolean, default: undefined })
    ], uiCheckBox.prototype, "checked", void 0);
    _uiCheckbox_decorate([
        Prop({ type: Boolean })
    ], uiCheckBox.prototype, "switch", void 0);
    _uiCheckbox_decorate([
        Prop({ default: null })
    ], uiCheckBox.prototype, "size", void 0);
    _uiCheckbox_decorate([
        Prop({ type: Boolean })
    ], uiCheckBox.prototype, "labelLeft", void 0);
    _uiCheckbox_decorate([
        Prop({ type: Boolean })
    ], uiCheckBox.prototype, "labelSpace", void 0);
    uiCheckBox = _uiCheckbox_decorate([
        vue_class_component_esm
    ], uiCheckBox);
    return uiCheckBox;
}(color));
/* harmony default export */ const _uiCheckbox = (uiCheckBox);

;// CONCATENATED MODULE: ./src/components/uiCheckbox/index.ts


_uiCheckbox.install = function (vue) {
    vue.component('ui-checkbox', _uiCheckbox);
};
/* harmony default export */ const uiCheckbox = (_uiCheckbox);

;// CONCATENATED MODULE: ./src/components/uiSwitch/_uiSwitch.ts
var _uiSwitch_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiSwitch_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiSwitch = /** @class */ (function (_super) {
    _uiSwitch_extends(uiSwitch, _super);
    function uiSwitch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _uiSwitch_decorate([
        Prop({ type: Boolean, default: true })
    ], uiSwitch.prototype, "switch", void 0);
    uiSwitch = _uiSwitch_decorate([
        vue_class_component_esm
    ], uiSwitch);
    return uiSwitch;
}(_uiCheckbox));
/* harmony default export */ const _uiSwitch = (uiSwitch);

;// CONCATENATED MODULE: ./src/components/uiSwitch/index.ts

_uiSwitch.install = function (vue) {
    vue.component('ui-switch', _uiSwitch);
};
/* harmony default export */ const components_uiSwitch = (_uiSwitch);

;// CONCATENATED MODULE: ./src/components/uiCarousel/base/_uiCarousel.ts
var _uiCarousel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiCarousel_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var uiCarousel = /** @class */ (function (_super) {
    _uiCarousel_extends(uiCarousel, _super);
    function uiCarousel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'carousel';
        _this.items = [];
        _this.indexNowItem = 0;
        _this.onAuto = null;
        _this.effect = '';
        return _this;
    }
    Object.defineProperty(uiCarousel.prototype, "nowID", {
        // Now Item
        get: function () {
            if (this.items.length < 1)
                return null;
            return this.items[this.indexNowItem];
        },
        enumerable: false,
        configurable: true
    });
    // Next
    uiCarousel.prototype.next = function () {
        if (this.indexNowItem === this.items.length - 1) {
            this.indexNowItem = 0;
        }
        else {
            this.indexNowItem = this.indexNowItem + 1;
        }
        this.effect = 'uiCarouselNext';
    };
    // Prev
    uiCarousel.prototype.prev = function () {
        if (this.indexNowItem === 0) {
            this.indexNowItem = this.items.length - 1;
        }
        else {
            this.indexNowItem = this.indexNowItem - 1;
        }
        this.effect = 'uiCarouselPrev';
    };
    // Arrow Click
    uiCarousel.prototype.onArrowClick = function (type) {
        this.stopSlide();
        if (type == 'next') {
            this.next();
        }
        else {
            this.prev();
        }
        this.startSlide();
    };
    // Start Slide
    uiCarousel.prototype.startSlide = function () {
        var _this = this;
        if (!this.auto)
            return;
        if (!!this.onAuto)
            return;
        if (this.items.length < 2)
            return;
        this.onAuto = setInterval(function () {
            console.log('start');
            _this.next();
        }, this.delay);
    };
    // Restart Slide
    uiCarousel.prototype.restartSlide = function () {
        if (!this.auto)
            return;
        if (!this.onAuto)
            return;
        this.stopSlide();
        window.requestAnimationFrame(this.startSlide);
    };
    // Remove Slide
    uiCarousel.prototype.stopSlide = function () {
        if (!this.onAuto)
            return;
        clearTimeout(this.onAuto);
        this.onAuto = undefined;
    };
    // Vue Function
    uiCarousel.prototype.mounted = function () {
        this.startSlide();
    };
    uiCarousel.prototype.beforeDestroy = function () {
        !!this.onAuto && this.stopSlide();
    };
    // Check Items
    uiCarousel.prototype.onItemsChange = function (val) {
        if (val.length < 2) {
            this.stopSlide();
        }
        else {
            this.startSlide();
        }
    };
    // Check Delay
    uiCarousel.prototype.onDelayChange = function (val) {
        this.restartSlide();
    };
    // Check Auto
    uiCarousel.prototype.onAutoChange = function (val) {
        if (!!val) {
            this.startSlide();
        }
        else {
            this.stopSlide();
        }
    };
    // Render
    uiCarousel.prototype.render = function (h) {
        var _this = this;
        var next = h('div', {
            staticClass: 'ui-carousel__next',
            on: {
                click: function () { return _this.onArrowClick('next'); }
            }
        }, [
            !!this.$slots.next ? this.$slots.next : h(_uiButton, {
                props: {
                    icon: true,
                    text: true,
                    size: 's',
                    fullColor: false,
                    primary: false
                }
            }, [
                h(arrow, {
                    props: {
                        left: true
                    }
                })
            ])
        ]);
        var prev = h('div', {
            staticClass: 'ui-carousel__prev',
            on: {
                click: function () { return _this.onArrowClick('prev'); }
            }
        }, [
            !!this.$slots.prev ? this.$slots.prev : h(_uiButton, {
                props: {
                    icon: true,
                    text: true,
                    size: 's',
                    fullColor: false,
                    primary: false
                }
            }, [
                h(arrow, {
                    props: {
                        right: true
                    }
                })
            ])
        ]);
        var carousel = h('div', {
            staticClass: 'ui-carousel',
        }, [
            this.$slots.default,
            this.items.length > 1 && !this.hideArrow && next,
            this.items.length > 1 && !this.hideArrow && prev,
        ]);
        return h('div', {
            staticClass: 'ui-carousel-root',
            class: {
                'ui-component--flex': true,
                'ui-component--child': !!this.child,
                'ui-carousel-root--arrowHover': !!this.arrowHover,
                'ui-carousel-root--transparent': !!this.transparent
            },
            style: {
                '--ui-carousel-width': returnPX(this.width),
                '--ui-carousel-height': returnPX(this.height)
            }
        }, [
            !!this.$slots.default && carousel
        ]);
    };
    _uiCarousel_decorate([
        Prop({ default: null })
    ], uiCarousel.prototype, "width", void 0);
    _uiCarousel_decorate([
        Prop({ default: 300 })
    ], uiCarousel.prototype, "height", void 0);
    _uiCarousel_decorate([
        Prop({ type: Boolean })
    ], uiCarousel.prototype, "transparent", void 0);
    _uiCarousel_decorate([
        Prop({ type: Boolean })
    ], uiCarousel.prototype, "child", void 0);
    _uiCarousel_decorate([
        Prop({ type: Boolean })
    ], uiCarousel.prototype, "hideArrow", void 0);
    _uiCarousel_decorate([
        Prop({ type: Boolean })
    ], uiCarousel.prototype, "arrowHover", void 0);
    _uiCarousel_decorate([
        Prop({ type: Number, default: 5000 })
    ], uiCarousel.prototype, "delay", void 0);
    _uiCarousel_decorate([
        Prop({ type: Boolean, default: true })
    ], uiCarousel.prototype, "auto", void 0);
    _uiCarousel_decorate([
        Watch('items')
    ], uiCarousel.prototype, "onItemsChange", null);
    _uiCarousel_decorate([
        Watch('delay')
    ], uiCarousel.prototype, "onDelayChange", null);
    _uiCarousel_decorate([
        Watch('auto')
    ], uiCarousel.prototype, "onAutoChange", null);
    uiCarousel = _uiCarousel_decorate([
        vue_class_component_esm
    ], uiCarousel);
    return uiCarousel;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiCarousel = (uiCarousel);

;// CONCATENATED MODULE: ./src/components/uiCarousel/base/index.ts


_uiCarousel.install = function (vue) {
    vue.component('ui-carousel', _uiCarousel);
};
/* harmony default export */ const uiCarousel_base = (_uiCarousel);

;// CONCATENATED MODULE: ./src/components/uiCarousel/item/_uiCarouselItem.ts
var _uiCarouselItem_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiCarouselItem_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiCarouselItem = /** @class */ (function (_super) {
    _uiCarouselItem_extends(uiCarouselItem, _super);
    function uiCarouselItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiCarouselItem.prototype, "id", {
        get: function () {
            return this._uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiCarouselItem.prototype, "parent", {
        get: function () {
            return (!!this.$parent && this.$parent.componentName == 'carousel') ? this.$parent : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiCarouselItem.prototype, "effect", {
        get: function () {
            return !!this.parent ? this.parent.effect : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiCarouselItem.prototype, "isItemActive", {
        get: function () {
            return this.parent.nowID === this.id;
        },
        enumerable: false,
        configurable: true
    });
    uiCarouselItem.prototype.mounted = function () {
        if (!!this.parent) {
            this.parent.items.push(this.id);
        }
    };
    uiCarouselItem.prototype.beforeDestroy = function () {
        if (!!this.parent) {
            var itemIndex = this.parent.items.indexOf(this.id);
            this.$delete(this.parent.items, itemIndex);
            this.parent.indexNowItem = itemIndex >= 1 ? itemIndex - 1 : 0;
        }
    };
    uiCarouselItem.prototype.render = function (h) {
        var item = h('div', {
            staticClass: 'ui-carousel-item-root',
            class: 'ui-component--flex',
            directives: [
                {
                    name: 'show',
                    value: this.isItemActive
                }
            ]
        }, [
            this.$slots.default
        ]);
        return h('transition', {
            props: {
                name: this.effect
            }
        }, [
            item
        ]);
    };
    uiCarouselItem = _uiCarouselItem_decorate([
        vue_class_component_esm
    ], uiCarouselItem);
    return uiCarouselItem;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiCarouselItem = (uiCarouselItem);

;// CONCATENATED MODULE: ./src/components/uiCarousel/item/index.ts


_uiCarouselItem.install = function (vue) {
    vue.component('ui-carousel-item', _uiCarouselItem);
};
/* harmony default export */ const item = (_uiCarouselItem);

;// CONCATENATED MODULE: ./src/components/uiChip/_uiChip.ts
var _uiChip_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiChip_assign = (undefined && undefined.__assign) || function () {
    _uiChip_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiChip_assign.apply(this, arguments);
};
var _uiChip_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiChip = /** @class */ (function (_super) {
    _uiChip_extends(uiChip, _super);
    function uiChip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isShow = true;
        return _this;
    }
    // On Click
    uiChip.prototype.onClick = function (event) {
        if (!this.isPointer)
            return;
        this.startRipple(event, this.$el);
        this.onLink();
        this.$emit('click', event);
    };
    // Remove
    uiChip.prototype.onRemove = function (event) {
        var _this = this;
        this.startRipple(event, this.$el);
        setTimeout(function () {
            if (!!isUndefined(_this.value)) {
                _this.isShow = false;
            }
            else {
                _this.$emit('model', false);
            }
            _this.$emit('remove');
        }, 200);
    };
    // Render
    uiChip.prototype.render = function (h) {
        var _a;
        var remove = h(icon_close, {
            on: {
                click: this.onRemove.bind(this)
            }
        });
        var right = h('div', {
            staticClass: 'ui-chip__right',
            class: {
                'ui-chip__right--loading': !!this.isLoading
            }
        }, [
            !!this.isLoading ? h(public_loading) : remove
        ]);
        var chip = h('div', {
            staticClass: 'ui-chip',
            ref: 'chip',
            class: [
                'ui-component',
                'ui-component--inline-flex',
                (_a = {
                        'ui-component--size--s': !this.size
                    },
                    _a["ui-component--size--" + this.size] = !!this.size,
                    _a),
                this.classStatus,
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-chip-width': returnPX(this.width)
                }
            ],
            attrs: _uiChip_assign({}, this.$attrs),
            on: _uiChip_assign(_uiChip_assign({}, this.$listeners), { click: this.onClick }),
            directives: [
                {
                    name: 'show',
                    value: !isUndefined(this.value) ? this.value : this.isShow
                }
            ]
        }, [
            this.$slots.default,
            (!!this.isLoading || !!this.remove) && right,
        ]);
        // Transition
        return h('transition', {
            props: {
                name: "ui-" + this.effect
            }
        }, [
            chip
        ]);
    };
    _uiChip_decorate([
        Model('model', { type: Boolean, default: undefined })
    ], uiChip.prototype, "value", void 0);
    _uiChip_decorate([
        Prop({ type: String, default: 's' })
    ], uiChip.prototype, "size", void 0);
    _uiChip_decorate([
        Prop({ type: String, default: null })
    ], uiChip.prototype, "color", void 0);
    _uiChip_decorate([
        Prop()
    ], uiChip.prototype, "width", void 0);
    _uiChip_decorate([
        Prop({ type: Boolean })
    ], uiChip.prototype, "remove", void 0);
    _uiChip_decorate([
        Prop({ type: String, default: 'zoom' })
    ], uiChip.prototype, "effect", void 0);
    uiChip = _uiChip_decorate([
        vue_class_component_esm
    ], uiChip);
    return uiChip;
}(color));
/* harmony default export */ const _uiChip = (uiChip);

;// CONCATENATED MODULE: ./src/components/uiChip/index.ts


_uiChip.install = function (vue) {
    vue.component('ui-chip', _uiChip);
};
/* harmony default export */ const components_uiChip = (_uiChip);

;// CONCATENATED MODULE: ./src/components/uiDialog/index.ts


_uiDialog.install = function (vue) {
    vue.component('ui-dialog', _uiDialog);
};
/* harmony default export */ const components_uiDialog = (_uiDialog);

;// CONCATENATED MODULE: ./src/components/uiInput/_uiInput.ts
var _uiInput_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiInput_assign = (undefined && undefined.__assign) || function () {
    _uiInput_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiInput_assign.apply(this, arguments);
};
var _uiInput_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiInput = /** @class */ (function (_super) {
    _uiInput_extends(uiInput, _super);
    function uiInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFocus = false;
        return _this;
    }
    uiInput.prototype.onInput = function (event) {
        this.$emit('model', event.target.value);
        this.$emit('input', event.target.value);
    };
    uiInput.prototype.onClick = function (event) {
        this.startRipple(event, this.$el);
        this.$emit('click', event);
    };
    uiInput.prototype.onFocus = function (event) {
        this.isFocus = true;
        this.$emit('focus', event);
    };
    uiInput.prototype.onBlur = function (event) {
        this.isFocus = false;
        this.$emit('blur', event);
    };
    uiInput.prototype.onRemove = function () {
        this.$emit('model', null);
        this.$emit('remove');
    };
    uiInput.prototype.render = function (h) {
        var _a;
        var _this = this;
        // Icon Remove
        var iconRemove = h(icon_close, {
            on: {
                click: this.onRemove.bind(this)
            }
        });
        // Icon Left
        var icon = h('div', {
            staticClass: 'ui-input__icon',
            class: {
                'ui-component--pointer': !!this.$listeners.icon
            },
            on: {
                click: function () { return _this.$emit('icon'); }
            }
        }, [
            this.$slots.icon
        ]);
        // Input Dom
        var inputDom = h('input', {
            staticClass: 'ui-input__dom',
            class: {
                'ui-input__dom--hasValue': !!this.value,
                'ui-input__dom--dateTime': this.type === 'date' || this.type === 'time'
            },
            domProps: {
                id: "input-" + this._uid,
                value: this.value,
                autocomplete: !!this.autoComplete ? 'on' : 'off'
            },
            attrs: _uiInput_assign(_uiInput_assign({}, this.$attrs), { type: this.type, placeholder: this.placeholder, readonly: this.readOnly, disabled: this.isDisabled }),
            on: _uiInput_assign(_uiInput_assign({}, this.$listeners), { focus: this.onFocus, blur: this.onBlur, input: this.onInput, click: this.onClick })
        });
        // Right
        var right = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            (!!this.isLoading || (!!this.remove && !!this.value)) && h('div', {
                staticClass: 'ui-input__right',
            }, [
                !!this.isLoading ? h(public_loading) : iconRemove
            ])
        ]);
        // Message Left
        var message = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            !!this.$slots.message && h('div', {
                staticClass: 'ui-input__message--left',
            }, [
                this.$slots.message
            ])
        ]);
        // Message Right
        var messageRight = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            !!this.$slots['message-right'] && h('div', {
                staticClass: 'ui-input__message--right',
            }, [
                this.$slots['message-right']
            ])
        ]);
        // Input
        return h('div', {
            staticClass: 'ui-input',
            class: [
                'ui-component',
                {
                    'ui-component--flex': !this.inline,
                    'ui-component--inline-flex': !!this.inline,
                },
                (_a = {
                        'ui-component--size--l': !this.size
                    },
                    _a["ui-component--size--" + this.size] = !!this.size,
                    _a),
                {
                    'ui-input--focus': !!this.isFocus,
                    'ui-input--error': !!this.danger || this.color === 'danger',
                },
                {
                    'ui-component--loading': !!this.isLoading,
                    'ui-component--disabled': !!this.isDisabled,
                },
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-input-width': returnPX(this.width),
                    '--ui-input-message-color': getColor(this.messageColor),
                    '--ui-input-message-right-color': getColor(this.messageRightColor)
                }
            ]
        }, [
            !!this.$slots.icon && icon,
            inputDom,
            right,
            message,
            messageRight
        ]);
    };
    _uiInput_decorate([
        Model('model')
    ], uiInput.prototype, "value", void 0);
    _uiInput_decorate([
        Prop()
    ], uiInput.prototype, "width", void 0);
    _uiInput_decorate([
        Prop({ type: String, default: 'l' })
    ], uiInput.prototype, "size", void 0);
    _uiInput_decorate([
        Prop({ type: String, default: 'text' })
    ], uiInput.prototype, "type", void 0);
    _uiInput_decorate([
        Prop({ type: String })
    ], uiInput.prototype, "placeholder", void 0);
    _uiInput_decorate([
        Prop({ type: Boolean })
    ], uiInput.prototype, "readOnly", void 0);
    _uiInput_decorate([
        Prop({ type: Boolean })
    ], uiInput.prototype, "autoComplete", void 0);
    _uiInput_decorate([
        Prop({ type: String })
    ], uiInput.prototype, "messageColor", void 0);
    _uiInput_decorate([
        Prop({ type: String })
    ], uiInput.prototype, "messageRightColor", void 0);
    _uiInput_decorate([
        Prop({ type: Boolean })
    ], uiInput.prototype, "remove", void 0);
    uiInput = _uiInput_decorate([
        vue_class_component_esm
    ], uiInput);
    return uiInput;
}(color));
/* harmony default export */ const _uiInput = (uiInput);

;// CONCATENATED MODULE: ./src/components/uiInput/index.ts


_uiInput.install = function (vue) {
    vue.component('ui-input', _uiInput);
};
/* harmony default export */ const components_uiInput = (_uiInput);

;// CONCATENATED MODULE: ./src/components/uiFlex/_uiFlex.ts
var _uiFlex_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiFlex_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiFlex = /** @class */ (function (_super) {
    _uiFlex_extends(uiFlex, _super);
    function uiFlex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiFlex.prototype.render = function (h) {
        return h('div', {
            staticClass: 'ui-flex',
            class: [
                'd-flex',
                "justify-" + this.jus,
                "align-" + this.align,
                "flex-" + this.dir,
                "align-content-" + this.content,
                {
                    'flex-wrap': !!this.wrap,
                    'flex-nowrap': !this.wrap,
                }
            ]
        }, [
            this.$slots.default
        ]);
    };
    _uiFlex_decorate([
        Prop({ type: String, default: 'space-between' })
    ], uiFlex.prototype, "jus", void 0);
    _uiFlex_decorate([
        Prop({ type: String, default: 'center' })
    ], uiFlex.prototype, "align", void 0);
    _uiFlex_decorate([
        Prop({ type: String, default: 'row' })
    ], uiFlex.prototype, "dir", void 0);
    _uiFlex_decorate([
        Prop({ type: String, default: 'center' })
    ], uiFlex.prototype, "content", void 0);
    _uiFlex_decorate([
        Prop({ type: Boolean })
    ], uiFlex.prototype, "wrap", void 0);
    uiFlex = _uiFlex_decorate([
        vue_class_component_esm
    ], uiFlex);
    return uiFlex;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiFlex = (uiFlex);

;// CONCATENATED MODULE: ./src/components/uiFlex/index.ts

_uiFlex.install = function (vue) {
    vue.component('ui-flex', _uiFlex);
};
/* harmony default export */ const components_uiFlex = (_uiFlex);

;// CONCATENATED MODULE: ./src/components/uiLoader/_uiLoader.ts
var _uiLoader_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiLoader_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var uiLoader = /** @class */ (function (_super) {
    _uiLoader_extends(uiLoader, _super);
    function uiLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiLoader.prototype.render = function (h) {
        var _a;
        return h('div', {
            staticClass: 'ui-loader',
            class: [
                (_a = {}, _a["ui-loader--" + this.type] = !!this.type, _a),
                {
                    'ui-loader--circle': !!this.circle
                },
                {
                    'ui-component--inline-flex': !this.block,
                    'ui-component--flex': !!this.block
                }
            ],
            style: {
                '--ui-loader-width': returnPX(this.w),
                '--ui-loader-height': returnPX(this.h)
            }
        });
    };
    _uiLoader_decorate([
        Prop({ type: Boolean })
    ], uiLoader.prototype, "circle", void 0);
    _uiLoader_decorate([
        Prop({ type: Boolean })
    ], uiLoader.prototype, "block", void 0);
    _uiLoader_decorate([
        Prop({ type: String })
    ], uiLoader.prototype, "type", void 0);
    _uiLoader_decorate([
        Prop()
    ], uiLoader.prototype, "w", void 0);
    _uiLoader_decorate([
        Prop()
    ], uiLoader.prototype, "h", void 0);
    uiLoader = _uiLoader_decorate([
        vue_class_component_esm
    ], uiLoader);
    return uiLoader;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiLoader = (uiLoader);

;// CONCATENATED MODULE: ./src/components/uiLoader/index.ts


_uiLoader.install = function (vue) {
    vue.component('ui-loader', _uiLoader);
};
/* harmony default export */ const components_uiLoader = (_uiLoader);

;// CONCATENATED MODULE: ./src/components/uiMenu/_uiMenu.ts
var _uiMenu_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiMenu_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var uiMain = /** @class */ (function (_super) {
    _uiMenu_extends(uiMain, _super);
    function uiMain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isShow = false;
        _this.isMenuHover = false;
        return _this;
    }
    Object.defineProperty(uiMain.prototype, "hasValue", {
        // Has Model
        get: function () {
            return this.value !== null;
        },
        enumerable: false,
        configurable: true
    });
    // Insert
    uiMain.prototype.insertMenu = function () {
        var menu = this.$refs.menu;
        insertBody(menu);
        this.setPos();
    };
    // Remove
    uiMain.prototype.removeMenu = function () {
        var menu = this.$refs.dropdown;
        if (!!this.isShow) {
            this.hide();
        }
        if (menu && menu.parentNode) {
            menu.parentNode.removeChild(menu);
        }
    };
    // Click OutSide
    uiMain.prototype.clickOutSide = function (event) {
        if (!this.isShow)
            return;
        if (!!this.hasValue)
            return;
        if (!!event.target.closest("#menu-" + this._uid))
            return;
        this.hide();
    };
    // Set Pos
    uiMain.prototype.setPos = function () {
        var target = this.$refs.target;
        var menu = this.$refs.menu;
        // Reset Pos
        menu.style.maxWidth = '';
        menu.style.top = '';
        menu.style.left = '';
        // Client
        var clientWidth = window.innerWidth || document.documentElement.clientWidth;
        var clientScrollTop = !!this.fixed ? 0 : document.documentElement.scrollTop;
        var clientScrollLeft = !!this.fixed ? 0 : document.documentElement.scrollLeft;
        // Target Pos
        var targetPos = target.getBoundingClientRect();
        var target_left = targetPos.left;
        var target_top = targetPos.top;
        var target_width = targetPos.width;
        var target_height = targetPos.height;
        if (!!this.targetMax) {
            menu.style.maxWidth = returnPX(target_width);
        }
        // Menu Pos
        var menuPos = menu.getBoundingClientRect();
        var menu_width = menuPos.width;
        var menu_height = menuPos.height;
        // New Menu Pos
        var NewPos = {
            top: 'auto',
            left: 'auto'
        };
        // Set Top
        if (!this.top) {
            NewPos.top = (target_top + clientScrollTop) + target_height + this.offsetY;
        }
        else {
            NewPos.top = (target_top + clientScrollTop) - menu_height - this.offsetY;
        }
        // Set Left
        if (!!this.right) {
            NewPos.left = (target_left + clientScrollLeft) + (target_width - menu_width) - this.offsetX;
        }
        else if (!!this.center) {
            NewPos.left = (target_left + clientScrollLeft) + (target_width / 2) - (menu_width / 2);
        }
        else if (!this.center && !this.right) {
            NewPos.left = (target_left + clientScrollLeft) + this.offsetX;
        }
        // Check OutSide
        if ((Number(NewPos.left) + menu_width) >= clientWidth) {
            NewPos.left = (target_left + clientScrollLeft) + (target_width / 2) - (menu_width / 2);
        }
        // Init
        menu.style.top = returnPX(NewPos.top);
        menu.style.left = returnPX(NewPos.left);
    };
    // Show
    uiMain.prototype.show = function () {
        var _this = this;
        this.isShow = true;
        this.$nextTick(function () {
            _this.insertMenu();
            window.addEventListener('resize', _this.setPos, { passive: true });
        });
        this.$emit('show');
    };
    // Hide
    uiMain.prototype.hide = function () {
        this.isShow = false;
        window.removeEventListener('resize', this.setPos);
        this.$emit('hide');
    };
    // Target Click
    uiMain.prototype.targetClick = function () {
        if (!!this.hasValue) {
            if (!!this.targetToggle)
                return this.$emit('model', !this.value);
            this.$emit('model', true);
        }
        else {
            if (!!this.targetToggle) {
                if (!this.isShow)
                    return this.show();
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    // Content Click
    uiMain.prototype.contentClick = function () {
        var _this = this;
        if (!this.closeOnContent)
            return;
        if (!!this.hasValue) {
            this.$emit('model', false);
        }
        setTimeout(function () {
            _this.hide();
        }, 100);
    };
    // Vue Function
    uiMain.prototype.mounted = function () {
        if (!!this.hasValue && !!this.value)
            return this.show();
    };
    uiMain.prototype.onValueChange = function (val) {
        if (!!val)
            return this.show();
        this.hide();
    };
    uiMain.prototype.beforeDestroy = function () {
        this.removeMenu();
    };
    // Render
    uiMain.prototype.render = function (h) {
        var menu = h('div', {
            ref: 'menu',
            staticClass: 'ui-menu',
            class: {
                'ui-component--fixed': !!this.fixed
            },
            style: {
                '--ui-menu-width': returnPX(this.width),
                '--ui-menu-max-height': returnPX(this.maxHeight)
            },
            on: {
                click: this.contentClick
            },
            directives: [
                {
                    name: 'show',
                    value: this.isShow
                },
                {
                    name: 'onlis-click-outside',
                    value: this.clickOutSide
                }
            ]
        }, [
            this.$slots.default
        ]);
        var menuTransition = h('transition', {
            props: {
                name: 'ui-menu'
            }
        }, [
            menu
        ]);
        var target = h('div', {
            ref: 'target',
            staticClass: 'ui-menu-target',
            domProps: {
                id: "menu-" + this._uid,
            },
            class: {
                'ui-component--inline-flex': true,
                'ui-component--block': !!this.block,
            },
            on: {
                click: this.targetClick
            }
        }, [
            this.$slots.target,
            menuTransition
        ]);
        return target;
    };
    _uiMenu_decorate([
        Model('model', { type: Boolean, default: null })
    ], uiMain.prototype, "value", void 0);
    _uiMenu_decorate([
        Prop({ default: null })
    ], uiMain.prototype, "width", void 0);
    _uiMenu_decorate([
        Prop({ default: null })
    ], uiMain.prototype, "maxHeight", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean })
    ], uiMain.prototype, "block", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean })
    ], uiMain.prototype, "fixed", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean })
    ], uiMain.prototype, "top", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean })
    ], uiMain.prototype, "right", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean })
    ], uiMain.prototype, "center", void 0);
    _uiMenu_decorate([
        Prop({ type: Number, default: 3 })
    ], uiMain.prototype, "offsetY", void 0);
    _uiMenu_decorate([
        Prop({ type: Number, default: 0 })
    ], uiMain.prototype, "offsetX", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean })
    ], uiMain.prototype, "targetMax", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean })
    ], uiMain.prototype, "targetToggle", void 0);
    _uiMenu_decorate([
        Prop({ type: Boolean, default: true })
    ], uiMain.prototype, "closeOnContent", void 0);
    _uiMenu_decorate([
        Watch('value')
    ], uiMain.prototype, "onValueChange", null);
    uiMain = _uiMenu_decorate([
        vue_class_component_esm
    ], uiMain);
    return uiMain;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiMenu = (uiMain);

;// CONCATENATED MODULE: ./src/components/uiMenu/index.ts


_uiMenu.install = function (vue) {
    vue.component('ui-menu', _uiMenu);
};
/* harmony default export */ const uiMenu = (_uiMenu);

;// CONCATENATED MODULE: ./src/components/uiSelect/base/_uiSelect.ts
var _uiSelect_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiSelect_assign = (undefined && undefined.__assign) || function () {
    _uiSelect_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiSelect_assign.apply(this, arguments);
};
var _uiSelect_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiSelect = /** @class */ (function (_super) {
    _uiSelect_extends(uiSelect, _super);
    function uiSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'select';
        // Data
        _this.textFilter = '';
        _this.countFilter = null;
        _this.isShowOptions = false;
        _this.options = [];
        return _this;
    }
    ////////////////Menu Options////////////////
    // Insert
    uiSelect.prototype.insertOptions = function () {
        var options = this.$refs.options;
        insertBody(options);
        this.setPos();
    };
    // Remove
    uiSelect.prototype.removeOptions = function () {
        var options = this.$refs.options;
        if (!!this.isShowOptions) {
            this.hideOptions();
        }
        if (options && options.parentNode) {
            options.parentNode.removeChild(options);
        }
    };
    // Set Pos
    uiSelect.prototype.setPos = function () {
        var target = this.$el;
        var options = this.$refs.options;
        // Reset Pos
        options.style.top = '';
        options.style.left = '';
        // Client
        var clientWidth = window.innerWidth || document.documentElement.clientWidth;
        var clientScrollTop = !!this.fixed ? 0 : document.documentElement.scrollTop;
        var clientScrollLeft = !!this.fixed ? 0 : document.documentElement.scrollLeft;
        // Target Pos
        var targetPos = target.getBoundingClientRect();
        var target_left = targetPos.left;
        var target_top = targetPos.top;
        var target_width = targetPos.width;
        var target_height = targetPos.height;
        // Set Max-Width
        options.style.maxWidth = returnPX(target_width);
        // Options Pos
        var optionsPos = options.getBoundingClientRect();
        var options_height = optionsPos.height;
        // New Options Pos
        var NewPos = {
            top: 'auto',
            left: 'auto'
        };
        // Set Top
        if (!this.top) {
            NewPos.top = (target_top + clientScrollTop) + target_height + this.offset;
        }
        else {
            NewPos.top = (target_top + clientScrollTop) - options_height - this.offset;
        }
        // Set Left
        NewPos.left = target_left + clientScrollLeft;
        // Init
        options.style.top = returnPX(NewPos.top);
        options.style.left = returnPX(NewPos.left);
    };
    // Show
    uiSelect.prototype.showOptions = function () {
        var _this = this;
        if (!!this.isShowOptions)
            return;
        this.isShowOptions = true;
        this.$nextTick(function () {
            _this.insertOptions();
            window.addEventListener('resize', _this.setPos, { passive: true });
        });
    };
    // Hide
    uiSelect.prototype.hideOptions = function () {
        this.isShowOptions = false;
        if (!!this.filter) {
            this.textFilter = '';
            this.countFilter = null;
        }
        window.removeEventListener('resize', this.setPos);
    };
    // Click OutSide
    uiSelect.prototype.clickOutSide = function (event) {
        if (!this.isShowOptions)
            return;
        if (!!event.target.closest("#select-" + this._uid))
            return;
        this.hideOptions();
    };
    // Before Destroy
    uiSelect.prototype.beforeDestroy = function () {
        this.removeOptions();
    };
    Object.defineProperty(uiSelect.prototype, "isMultiple", {
        //////////////End Menu Options//////////////
        ////////////////Select Logic////////////////
        // Is Multiple
        get: function () {
            return !!Array.isArray(this.value);
        },
        enumerable: false,
        configurable: true
    });
    // Get Option By ID
    uiSelect.prototype.getOptionByID = function (id) {
        return this.options.find(function (option) { return option.id === id; });
    };
    // Get Option By ID
    uiSelect.prototype.getOptionByValue = function (value) {
        return this.options.find(function (option) { return option.value === value; });
    };
    // On Option Click
    uiSelect.prototype.onOptionSelect = function (id) {
        var _this = this;
        if (!!isUndefined(this.value))
            return;
        var option = this.getOptionByID(id);
        if (!option)
            return;
        if (!!this.isMultiple) {
            var array = this.value;
            var isValueInModel = void 0;
            var indexValue_1 = 0;
            // Check Value
            if (typeof option.value === 'object') {
                isValueInModel = JSON.stringify(array).indexOf(JSON.stringify(option.value)) !== -1;
            }
            else {
                isValueInModel = array.indexOf(option.value) !== -1;
            }
            // Set Index Value
            array.forEach(function (item, index) {
                if (JSON.stringify(item) === JSON.stringify(option.value)) {
                    indexValue_1 = index;
                }
            });
            // Update Model
            if (isValueInModel) {
                this.$delete(array, indexValue_1);
            }
            else {
                this.$set(array, array.length, option.value);
            }
            // Update Pos
            this.$nextTick(function () { return _this.setPos(); });
        }
        else {
            if (option.value !== this.value) {
                this.$emit('model', option.value);
            }
            else {
                this.$emit('model', null);
            }
            this.hideOptions();
        }
        this.$emit('change', this.value);
    };
    Object.defineProperty(uiSelect.prototype, "labelInput", {
        // Get Label Input
        get: function () {
            if (!this.value)
                return this.placeholder;
            if (!!this.isMultiple)
                return null;
            var option = this.getOptionByValue(this.value);
            return !!option ? option.label : this.placeholder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSelect.prototype, "renderChips", {
        // Render list Label if is Multiple
        get: function () {
            var _this = this;
            if (!this.isMultiple)
                return null;
            if (this.value.length < 1)
                return this.placeholder;
            else
                return this.value.map(function (val, index) {
                    var option = _this.getOptionByValue(val);
                    if (!!option) {
                        return _this.$createElement('div', {
                            staticClass: 'ui-input__center__chip'
                        }, [
                            option.label,
                            !!_this.remove && _this.$createElement(icon_close, {
                                class: [
                                    "select-chip-" + _this._uid
                                ],
                                on: {
                                    click: _this.onChipRemove.bind(_this, index)
                                }
                            })
                        ]);
                    }
                });
        },
        enumerable: false,
        configurable: true
    });
    // Chip Remove Click
    uiSelect.prototype.onChipRemove = function (index) {
        var _this = this;
        this.$delete(this.value, index);
        if (!!this.isShowOptions) {
            this.$nextTick(function () { return _this.setPos(); });
        }
    };
    // On Filter
    uiSelect.prototype.onTextFilter = function (val) {
        if (!this.filter)
            return;
        if (val) {
            var listFilter = this.options.filter(function (option) {
                var labelLowerCase = toLowerCase(option.label);
                var valLowerCase = toLowerCase(val);
                return labelLowerCase.indexOf(valLowerCase.toLowerCase()) !== -1;
            });
            this.countFilter = listFilter.length;
        }
        else {
            this.countFilter = null;
        }
    };
    //////////////End Select Logic//////////////
    ////////////////Input Logic/////////////////
    uiSelect.prototype.onClick = function (event) {
        if (!!event.target.closest(".select-chip-" + this._uid))
            return;
        this.startRipple(event, this.$el);
        if (!this.isShowOptions) {
            this.showOptions();
        }
        else {
            this.hideOptions();
        }
        this.$emit('click', event);
    };
    uiSelect.prototype.onRemove = function () {
        this.$emit('model', null);
        this.$emit('change', this.value);
        this.$emit('remove');
    };
    ////////////////End Input Logic/////////////
    uiSelect.prototype.render = function (h) {
        var _a;
        var _this = this;
        /////////////// Options ////////////////
        // Input Filter
        var inputFilter = h('input', {
            staticClass: 'ui-options__input',
            domProps: {
                value: this.textFilter,
                autocomplete: 'off'
            },
            attrs: {
                type: 'text',
                placeholder: this.placeholderFilter,
            },
            on: {
                input: function (event) {
                    _this.textFilter = event.target.value;
                }
            }
        });
        var noData = h('div', {
            class: {
                'ui-options__noData': !this.$slots['no-data']
            }
        }, [
            this.$slots['no-data'] ? this.$slots['no-data'] : this.noDataText
        ]);
        var options = h('div', {
            staticClass: 'ui-options',
            ref: 'options',
            class: {
                'ui-component--fixed': !!this.fixed,
            },
            style: {
                '--ui-options-max-height': returnPX(this.maxHeight)
            },
            directives: [
                {
                    name: 'show',
                    value: this.isShowOptions
                },
                {
                    name: 'onlis-click-outside',
                    value: this.clickOutSide
                }
            ]
        }, [
            !!this.filter && inputFilter,
            this.countFilter === 0 && noData,
            this.$slots.options
        ]);
        var optionsTransition = h('transition', {
            props: {
                name: 'ui-menu'
            }
        }, [
            options
        ]);
        /////////////// Input //////////////////
        // Icon Remove
        var iconRemove = h(icon_close, {
            on: {
                click: this.onRemove.bind(this)
            }
        });
        // Icon Left
        var icon = h('div', {
            staticClass: 'ui-input__icon',
            class: {
                'ui-component--pointer': !!this.$listeners.icon
            },
            on: {
                click: function () { return _this.$emit('icon'); }
            }
        }, [
            this.$slots.icon
        ]);
        // Center Select
        var center = h('div', {
            staticClass: 'ui-input__center',
            class: [
                'ui-component--pointer',
                {
                    'ui-input__center--focus': !!this.isShowOptions,
                    'ui-input__center--noValue': !this.value || (!!this.isMultiple && this.value.length < 1)
                }
            ],
            domProps: {
                id: "select-" + this._uid,
            },
            on: _uiSelect_assign(_uiSelect_assign({}, this.$listeners), { click: this.onClick })
        }, [
            !this.isMultiple ? this.labelInput : this.renderChips
        ]);
        // Right
        var right = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            (!!this.isLoading || (!!this.remove && !!this.value && !this.isMultiple)) && h('div', {
                staticClass: 'ui-input__right',
            }, [
                !!this.isLoading ? h(public_loading) : iconRemove
            ])
        ]);
        // Message Left
        var message = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            !!this.$slots.message && h('div', {
                staticClass: 'ui-input__message--left',
            }, [
                this.$slots.message
            ])
        ]);
        // Message Right
        var messageRight = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            !!this.$slots['message-right'] && h('div', {
                staticClass: 'ui-input__message--right',
            }, [
                this.$slots['message-right']
            ])
        ]);
        // Input
        return h('div', {
            staticClass: 'ui-input',
            class: [
                'ui-component',
                {
                    'ui-component--flex': !this.inline,
                    'ui-component--inline-flex': !!this.inline,
                },
                (_a = {
                        'ui-component--size--l': !this.size
                    },
                    _a["ui-component--size--" + this.size] = !!this.size,
                    _a),
                {
                    'ui-input--focus': !!this.isShowOptions,
                    'ui-input--error': !!this.danger || this.color === 'danger'
                },
                {
                    'ui-component--loading': !!this.isLoading,
                    'ui-component--disabled': !!this.isDisabled,
                },
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-input-width': returnPX(this.width),
                    '--ui-input-message-color': getColor(this.messageColor),
                    '--ui-input-message-right-color': getColor(this.messageRightColor)
                }
            ],
            attrs: _uiSelect_assign({}, this.$attrs)
        }, [
            !!this.$slots.icon && icon,
            center,
            right,
            message,
            messageRight,
            optionsTransition
        ]);
    };
    _uiSelect_decorate([
        Model('model')
    ], uiSelect.prototype, "value", void 0);
    _uiSelect_decorate([
        Prop()
    ], uiSelect.prototype, "width", void 0);
    _uiSelect_decorate([
        Prop({ type: String, default: 'l' })
    ], uiSelect.prototype, "size", void 0);
    _uiSelect_decorate([
        Prop({ type: String, default: 'text' })
    ], uiSelect.prototype, "type", void 0);
    _uiSelect_decorate([
        Prop({ type: String })
    ], uiSelect.prototype, "placeholder", void 0);
    _uiSelect_decorate([
        Prop({ type: String })
    ], uiSelect.prototype, "messageColor", void 0);
    _uiSelect_decorate([
        Prop({ type: String })
    ], uiSelect.prototype, "messageRightColor", void 0);
    _uiSelect_decorate([
        Prop({ type: Boolean })
    ], uiSelect.prototype, "remove", void 0);
    _uiSelect_decorate([
        Prop({ type: Boolean })
    ], uiSelect.prototype, "filter", void 0);
    _uiSelect_decorate([
        Prop({ type: Boolean })
    ], uiSelect.prototype, "hideCheckbox", void 0);
    _uiSelect_decorate([
        Prop({ type: Boolean })
    ], uiSelect.prototype, "checkboxRight", void 0);
    _uiSelect_decorate([
        Prop({ type: String, default: 'Search option...' })
    ], uiSelect.prototype, "placeholderFilter", void 0);
    _uiSelect_decorate([
        Prop({ type: String, default: 'No data available' })
    ], uiSelect.prototype, "noDataText", void 0);
    _uiSelect_decorate([
        Prop({ type: Boolean })
    ], uiSelect.prototype, "fixed", void 0);
    _uiSelect_decorate([
        Prop({ type: Number, default: 3 })
    ], uiSelect.prototype, "offset", void 0);
    _uiSelect_decorate([
        Prop({ type: Boolean })
    ], uiSelect.prototype, "top", void 0);
    _uiSelect_decorate([
        Prop({ default: null })
    ], uiSelect.prototype, "maxHeight", void 0);
    _uiSelect_decorate([
        Watch('textFilter')
    ], uiSelect.prototype, "onTextFilter", null);
    uiSelect = _uiSelect_decorate([
        vue_class_component_esm
    ], uiSelect);
    return uiSelect;
}(color));
/* harmony default export */ const _uiSelect = (uiSelect);

;// CONCATENATED MODULE: ./src/components/uiSelect/base/index.ts


_uiSelect.install = function (vue) {
    vue.component('ui-select', _uiSelect);
};
/* harmony default export */ const uiSelect_base = (_uiSelect);

;// CONCATENATED MODULE: ./src/components/uiSelect/option/_uiSelectOption.ts
var _uiSelectOption_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiSelectOption_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiSelectOption = /** @class */ (function (_super) {
    _uiSelectOption_extends(uiSelectOption, _super);
    function uiSelectOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isHidden = false;
        return _this;
    }
    Object.defineProperty(uiSelectOption.prototype, "colorProp", {
        get: function () {
            if (!!this.isStatusColor || (!!this.parent && !!this.parent.isStatusColor))
                return null;
            if (!!this.color)
                return this.color;
            if (!!this.parent && !!this.parent.color)
                return this.parent.color;
        },
        enumerable: false,
        configurable: true
    });
    uiSelectOption.prototype.colorStatusProp = function (name) {
        return !!this[name] || (!!this.parent && !!this.parent[name]);
    };
    Object.defineProperty(uiSelectOption.prototype, "id", {
        get: function () {
            return this._uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSelectOption.prototype, "parent", {
        get: function () {
            return (!!this.$parent &&
                this.$parent.componentName === 'select')
                ? this.$parent
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSelectOption.prototype, "isInvalid", {
        get: function () {
            return !this.parent || !this.value || !this.label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSelectOption.prototype, "isMultiple", {
        get: function () {
            return !!this.parent && !!this.parent.isMultiple;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSelectOption.prototype, "isActive", {
        // Is Active
        get: function () {
            if (!!this.isInvalid)
                return;
            if (Array.isArray(this.parent.value)) {
                var array = this.parent.value;
                var isValueInModel = void 0;
                // Check Value
                if (typeof this.value === 'object') {
                    isValueInModel = JSON.stringify(array).indexOf(JSON.stringify(this.value)) !== -1;
                }
                else {
                    isValueInModel = array.indexOf(this.value) !== -1;
                }
                return isValueInModel;
            }
            else {
                return this.parent.value === this.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Option Select
    uiSelectOption.prototype.onClick = function (event) {
        if (!!this.isInvalid)
            return;
        this.startRipple(event, this.$el);
        this.parent.onOptionSelect(this.id);
    };
    // Vue Function
    uiSelectOption.prototype.mounted = function () {
        if (!!this.isInvalid)
            return;
        var option = {
            id: this.id,
            value: this.value,
            label: this.label
        };
        this.parent.options.push(option);
    };
    uiSelectOption.prototype.beforeDestroy = function () {
        var _this = this;
        if (!!this.isInvalid)
            return;
        if (!!this.isActive) {
            this.parent.$emit('model', null);
            this.parent.textFilter = '';
        }
        var optionIndex = this.parent.options.findIndex(function (option) { return option.id === _this.id; });
        this.$delete(this.parent.options, optionIndex);
    };
    // Check Text Filter
    uiSelectOption.prototype.onTextFilterChange = function (val) {
        if (!!this.isInvalid)
            return;
        if (!this.parent.filter)
            return;
        if (!this.parent.isShowOptions)
            return;
        if (val) {
            var labelLowerCase = toLowerCase(this.label);
            var valLowerCase = toLowerCase(val);
            this.isHidden = labelLowerCase.indexOf(valLowerCase.toLowerCase()) === -1;
        }
        else {
            this.isHidden = false;
        }
    };
    uiSelectOption.prototype.onFocusChange = function (val) {
        var _this = this;
        if (!!this.isInvalid)
            return;
        if (!this.parent.filter)
            return;
        if (!val && !!this.isHidden) {
            setTimeout(function () {
                _this.isHidden = false;
            }, 250);
        }
    };
    // Render
    uiSelectOption.prototype.render = function (h) {
        var checkbox = h('transition', {
            props: {
                name: 'ui-zoom'
            }
        }, [
            !!this.isActive && h(_uiCheckbox, {
                class: [
                    'ui-list-item__checkbox',
                    {
                        'ui-list-item__checkbox--right': !!this.parent && !!this.parent.checkboxRight,
                    }
                ],
                props: {
                    checked: this.isActive,
                    warn: this.colorStatusProp('warn'),
                    danger: this.colorStatusProp('danger'),
                    success: this.colorStatusProp('success'),
                    color: this.colorProp,
                    size: 18
                },
                on: {
                    click: this.onClick.bind(this)
                }
            })
        ]);
        var left = h('div', {
            staticClass: 'ui-list-item__left',
        }, [
            this.$slots.left
        ]);
        var title = h('div', {
            staticClass: 'ui-list-item__center__title',
        }, [
            this.$slots.title
        ]);
        var body = h('div', {
            staticClass: 'ui-list-item__center__body',
        }, [
            !!this.$slots.default ? this.$slots.default : this.label
        ]);
        var center = h('div', {
            staticClass: 'ui-list-item__center',
        }, [
            this.$slots.title && title,
            body
        ]);
        var right = h('div', {
            staticClass: 'ui-list-item__right',
        }, [
            this.$slots.right
        ]);
        return h('div', {
            staticClass: 'ui-list-item',
            class: [
                'ui-component',
                'ui-component--flex',
                'ui-component--pointer',
                'ui-list-item--center',
                {
                    'ui-list-item--hidden': !!this.isHidden,
                    'ui-component--disabled': !!this.isInvalid || !!this.isDisabled,
                    'ui-component--active': !!this.isActive,
                },
                this.classFashion,
                {
                    'ui-component--color': this.colorStatusProp('isColor'),
                    'ui-color--child': !!this.child,
                    'ui-color--warn': this.colorStatusProp('warn'),
                    'ui-color--danger': this.colorStatusProp('danger'),
                    'ui-color--success': this.colorStatusProp('success'),
                }
            ],
            style: {
                '--ui-color': !!this.colorProp ? getColor(this.colorProp) : null
            },
            on: {
                click: this.onClick
            }
        }, [
            !this.parent.hideCheckbox && checkbox,
            !!this.$slots.left && left,
            center,
            !!this.$slots.right && right,
        ]);
    };
    _uiSelectOption_decorate([
        Prop({ type: [String, Object, Number] })
    ], uiSelectOption.prototype, "value", void 0);
    _uiSelectOption_decorate([
        Prop({ type: String })
    ], uiSelectOption.prototype, "label", void 0);
    _uiSelectOption_decorate([
        Prop({ type: String, default: 'transparent' })
    ], uiSelectOption.prototype, "fashion", void 0);
    _uiSelectOption_decorate([
        Prop({ type: String, default: 'flat' })
    ], uiSelectOption.prototype, "fashionActive", void 0);
    _uiSelectOption_decorate([
        Prop({ type: String, default: null })
    ], uiSelectOption.prototype, "color", void 0);
    _uiSelectOption_decorate([
        Watch('parent.textFilter')
    ], uiSelectOption.prototype, "onTextFilterChange", null);
    _uiSelectOption_decorate([
        Watch('parent.isShowOptions')
    ], uiSelectOption.prototype, "onFocusChange", null);
    uiSelectOption = _uiSelectOption_decorate([
        vue_class_component_esm
    ], uiSelectOption);
    return uiSelectOption;
}(color));
/* harmony default export */ const _uiSelectOption = (uiSelectOption);

;// CONCATENATED MODULE: ./src/components/uiSelect/option/index.ts


_uiSelectOption.install = function (vue) {
    vue.component('ui-select-option', _uiSelectOption);
};
/* harmony default export */ const uiSelect_option = (_uiSelectOption);

;// CONCATENATED MODULE: ./src/components/uiProcess/base/_uiProcess.ts
var _uiProcess_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiProcess_assign = (undefined && undefined.__assign) || function () {
    _uiProcess_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiProcess_assign.apply(this, arguments);
};
var _uiProcess_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiProcess = /** @class */ (function (_super) {
    _uiProcess_extends(uiProcess, _super);
    function uiProcess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFocus = false;
        _this.effect = null;
        return _this;
    }
    Object.defineProperty(uiProcess.prototype, "isValidValue", {
        // Check Value is Valid
        get: function () {
            return (!!isPercent(this.value) && !!isPercent(this.maxPercent));
        },
        enumerable: false,
        configurable: true
    });
    // Control Focus
    uiProcess.prototype.focus = function () {
        this.isFocus = true;
        this.$emit('focus');
        this.$emit('start');
        // Create Event
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("mouseup", this.blur);
        // Support Mobile / Tablet
        if ('ontouchstart' in document.documentElement) {
            window.addEventListener("touchmove", this.mouseMove, {
                passive: false
            });
            window.addEventListener("touchend", this.blur, {
                passive: false
            });
        }
        // Set Style Body
        document.body.style.overflow = 'hidden';
        document.body.style.cursor = 'grabbing';
    };
    // Control Blur
    uiProcess.prototype.blur = function () {
        this.isFocus = false;
        this.$emit('blur');
        this.$emit('end');
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("mouseup", this.blur);
        // Support Mobile / Tablet
        if ('ontouchstart' in document.documentElement) {
            window.removeEventListener("touchmove", this.mouseMove);
            window.removeEventListener("touchend", this.blur);
        }
        // Set Style Body
        document.body.style.overflow = '';
        document.body.style.cursor = '';
    };
    // Mouse Move
    uiProcess.prototype.mouseMove = function (event) {
        if (!this.isValidValue)
            return;
        var process = this.$el;
        var processPos = process.getBoundingClientRect();
        var width = !!this.center ? (processPos.width / 2) : processPos.width;
        var posX;
        var value;
        // Check event type and set PosX
        if (event.type == "touchmove") {
            posX = event.targetTouches[0].clientX - processPos.left;
        }
        else {
            posX = event.clientX - processPos.left;
        }
        // Check Not Center
        if (!this.center) {
            if (Math.sign(posX) == -1) {
                posX = !!this.right ? (0 + width) : 0;
            }
            else if (posX > width) {
                posX = !!this.right ? 0 : width;
            }
            else {
                posX = !!this.right ? (width - posX) : posX;
            }
        }
        // Is Center
        if (!!this.center) {
            if (Math.sign(posX) == -1 || posX > (width * 2)) {
                posX = width;
            }
            else if (posX > width) {
                posX = (posX - width);
            }
            else if (posX < width) {
                posX = (width - posX);
            }
            else {
                posX = 0;
            }
        }
        // Set Percent
        value = Math.round((posX / width) * 100);
        // Check Max Percent
        if (value >= this.maxPercent) {
            value = this.maxPercent;
        }
        // Set Effect
        this.setEffect();
        // Update
        this.$emit('model', value);
        this.$emit('change', value);
    };
    Object.defineProperty(uiProcess.prototype, "progress", {
        // Get Progress
        get: function () {
            if (!this.isValidValue)
                return 0;
            if (!this.value)
                return 0; // If value = null || value = 0
            if (this.value >= this.maxPercent) {
                return this.maxPercent;
            }
            else {
                return this.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    // Process CLick
    uiProcess.prototype.onClick = function (event) {
        this.$emit('click', event);
        if (!this.clickChange)
            return;
        var isControl = event.target.classList.contains('ui-process-control');
        if (!!isControl)
            return;
        this.mouseMove(event);
    };
    // Set Effect
    uiProcess.prototype.setEffect = function () {
        var _this = this;
        if (!!this.effect)
            return;
        this.effect = setTimeout(function () {
            clearTimeout(_this.effect);
            _this.effect = null;
        }, 1000);
    };
    // Watch Value
    uiProcess.prototype.onValueChange = function (val) {
        if (!!this.isFocus)
            return;
        this.setEffect();
    };
    uiProcess.prototype.render = function (h) {
        // Control
        var control = h('button', {
            staticClass: 'ui-process-control',
            on: {
                touchstart: this.focus,
                mousedown: this.focus
            }
        }, [
            !!this.isLoading && h(public_loading)
        ]);
        // Line
        var line = h('div', {
            staticClass: 'ui-process-line',
        });
        // Content
        var content = h('div', {
            staticClass: 'ui-process-content',
            class: {
                'ui-process-content--show': !!this.effect
            }
        }, [
            !!this.$slots.default ? this.$slots.default : (!!this.isValidValue ? this.progress : 0) + '%'
        ]);
        return h('div', {
            staticClass: 'ui-process',
            class: [
                'ui-component--flex',
                {
                    'ui-process--left': !this.right && !this.center,
                    'ui-process--center': !this.right && !!this.center,
                    'ui-process--right': !!this.right && !this.center,
                    'ui-process--pointer': !!this.clickChange,
                    'ui-process--focus': !!this.isFocus
                },
                this.classStatus,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-process-width': returnPX(this.width),
                    '--ui-process-size': returnPX(this.size),
                    '--ui-process-value': this.progress + "%"
                }
            ],
            attrs: _uiProcess_assign({}, this.$attrs),
            on: _uiProcess_assign(_uiProcess_assign({}, this.$listeners), { click: this.onClick })
        }, [
            line,
            !this.hiddenContent && content,
            !!this.control && control
        ]);
    };
    _uiProcess_decorate([
        Model('model', { type: Number })
    ], uiProcess.prototype, "value", void 0);
    _uiProcess_decorate([
        Prop()
    ], uiProcess.prototype, "width", void 0);
    _uiProcess_decorate([
        Prop()
    ], uiProcess.prototype, "size", void 0);
    _uiProcess_decorate([
        Prop({ type: Number, default: 100 })
    ], uiProcess.prototype, "maxPercent", void 0);
    _uiProcess_decorate([
        Prop({ type: Boolean })
    ], uiProcess.prototype, "control", void 0);
    _uiProcess_decorate([
        Prop({ type: Boolean })
    ], uiProcess.prototype, "center", void 0);
    _uiProcess_decorate([
        Prop({ type: Boolean })
    ], uiProcess.prototype, "right", void 0);
    _uiProcess_decorate([
        Prop({ type: Boolean })
    ], uiProcess.prototype, "clickChange", void 0);
    _uiProcess_decorate([
        Prop({ type: Boolean })
    ], uiProcess.prototype, "hiddenContent", void 0);
    _uiProcess_decorate([
        Watch('value')
    ], uiProcess.prototype, "onValueChange", null);
    uiProcess = _uiProcess_decorate([
        vue_class_component_esm
    ], uiProcess);
    return uiProcess;
}(color));
/* harmony default export */ const _uiProcess = (uiProcess);

;// CONCATENATED MODULE: ./src/components/uiProcess/base/index.ts


_uiProcess.install = function (vue) {
    vue.component('ui-process', _uiProcess);
};
/* harmony default export */ const uiProcess_base = (_uiProcess);

;// CONCATENATED MODULE: ./src/components/uiProcess/circle/_uiProcessCircle.ts
var _uiProcessCircle_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiProcessCircle_assign = (undefined && undefined.__assign) || function () {
    _uiProcessCircle_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiProcessCircle_assign.apply(this, arguments);
};
var _uiProcessCircle_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiProcessCircle = /** @class */ (function (_super) {
    _uiProcessCircle_extends(uiProcessCircle, _super);
    function uiProcessCircle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFocus = false;
        return _this;
    }
    Object.defineProperty(uiProcessCircle.prototype, "isValidValue", {
        // Check Value is Valid
        get: function () {
            return (!!isPercent(this.value) && !!isPercent(this.maxPercent));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiProcessCircle.prototype, "svgCircleProp", {
        // Set SGV
        get: function () {
            var radius = this.size / 2;
            var circumference = (this.size - this.line) * Math.PI;
            return {
                'stroke-width': this.line,
                'cx': radius,
                'cy': radius,
                'r': radius - (this.line / 2),
                'stroke-dasharray': circumference + " " + circumference
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiProcessCircle.prototype, "svgProgress", {
        get: function () {
            var circumference = (this.size - this.line) * Math.PI;
            return circumference - ((this.progress / 100) * (circumference));
        },
        enumerable: false,
        configurable: true
    });
    // Control Focus
    uiProcessCircle.prototype.focus = function () {
        this.isFocus = true;
        this.$emit('focus');
        this.$emit('start');
        // Create Event
        window.addEventListener("mousemove", this.mouseMove);
        window.addEventListener("mouseup", this.blur);
        // Support Mobile / Tablet
        if ('ontouchstart' in document.documentElement) {
            window.addEventListener("touchmove", this.mouseMove, {
                passive: false
            });
            window.addEventListener("touchend", this.blur, {
                passive: false
            });
        }
        // Set Style Body
        document.body.style.overflow = 'hidden';
        document.body.style.cursor = 'grabbing';
    };
    // Control Blur
    uiProcessCircle.prototype.blur = function () {
        this.isFocus = false;
        this.$emit('blur');
        this.$emit('end');
        window.removeEventListener("mousemove", this.mouseMove);
        window.removeEventListener("mouseup", this.blur);
        // Support Mobile / Tablet
        if ('ontouchstart' in document.documentElement) {
            window.removeEventListener("touchmove", this.mouseMove);
            window.removeEventListener("touchend", this.blur);
        }
        // Set Style Body
        document.body.style.overflow = '';
        document.body.style.cursor = '';
    };
    // Mouse Move
    uiProcessCircle.prototype.mouseMove = function (event) {
        if (!this.isValidValue)
            return;
        var processCircle = this.$el;
        var processCirclePos = processCircle.getBoundingClientRect();
        var radius = this.size / 2;
        var posMouseX;
        var posMouseY;
        var angle;
        var rotate;
        var percent;
        // Set Pos
        if (event.type == "touchmove") {
            posMouseX = event.targetTouches[0].clientX - processCirclePos.left;
            posMouseY = event.targetTouches[0].clientY - processCirclePos.top;
        }
        else {
            posMouseX = event.clientX - processCirclePos.left;
            posMouseY = event.clientY - processCirclePos.top;
        }
        // Set Angle
        angle = Math.atan2(radius - posMouseX, radius - posMouseY) * (180 / Math.PI);
        // Set Rotate
        if (angle < 0) {
            rotate = 0 - angle;
        }
        else {
            rotate = 180 + (180 - angle);
        }
        // Set Percent
        percent = Math.round((rotate / 360) * 100);
        // Check Max Percent
        if (percent >= this.maxPercent) {
            percent = this.maxPercent;
        }
        // Update
        this.$emit('model', percent);
        this.$emit('change', percent);
    };
    Object.defineProperty(uiProcessCircle.prototype, "progress", {
        // Get Progress
        get: function () {
            if (!this.isValidValue)
                return 0;
            if (!this.value)
                return 0;
            if (this.value >= this.maxPercent) {
                return this.maxPercent;
            }
            else {
                return this.value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiProcessCircle.prototype, "controlRotate", {
        // Get Control Rotate
        get: function () {
            return this.progress * 360 / 100;
        },
        enumerable: false,
        configurable: true
    });
    // Process CLick
    uiProcessCircle.prototype.onClick = function (event) {
        this.$emit('click', event);
        if (!this.clickChange)
            return;
        var isControl = event.target.classList.contains('ui-process-circle-control__button');
        var isContent = event.target.classList.contains('ui-process-circle-content');
        if (!!isControl || !!isContent)
            return;
        this.mouseMove(event);
    };
    uiProcessCircle.prototype.render = function (h) {
        // Circle Process
        var circle = h('circle', {
            attrs: this.svgCircleProp,
            style: {
                'stroke-dashoffset': this.svgProgress
            }
        });
        // Circle Background
        var circleBG = h('circle', {
            attrs: this.svgCircleProp
        });
        // SVG
        var svg = h('svg', {
            staticClass: 'ui-process-circle-svg',
            attrs: {
                width: '100%',
                height: '100%',
                fill: 'transparent'
            }
        }, [
            circleBG,
            circle
        ]);
        // Control Button
        var controlButton = h('button', {
            staticClass: 'ui-process-circle-control__button',
            on: {
                touchstart: this.focus,
                mousedown: this.focus
            }
        }, [
            !!this.isLoading && h(public_loading)
        ]);
        // Control
        var control = h('div', {
            staticClass: 'ui-process-circle-control',
            style: {
                '--ui-process-circle-rotate': this.controlRotate + "deg"
            }
        }, [
            controlButton
        ]);
        // Content
        var content = h('div', {
            staticClass: 'ui-process-circle-content'
        }, [
            !!this.$slots.default ? this.$slots.default : (!!this.isValidValue ? this.progress : 0) + '%'
        ]);
        return h('div', {
            staticClass: 'ui-process-circle',
            class: [
                'ui-component--flex',
                {
                    'ui-process-circle--pointer': !!this.clickChange,
                    'ui-process-circle--focus': !!this.isFocus
                },
                this.classStatus,
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-process-circle-size': returnPX(this.size),
                    '--ui-process-circle-line': returnPX(this.line)
                }
            ],
            attrs: _uiProcessCircle_assign({}, this.$attrs),
            on: _uiProcessCircle_assign(_uiProcessCircle_assign({}, this.$listeners), { click: this.onClick })
        }, [
            svg,
            !!this.control && control,
            !this.hiddenContent && content
        ]);
    };
    _uiProcessCircle_decorate([
        Model('model', { type: Number })
    ], uiProcessCircle.prototype, "value", void 0);
    _uiProcessCircle_decorate([
        Prop({ type: Number, default: 100 })
    ], uiProcessCircle.prototype, "size", void 0);
    _uiProcessCircle_decorate([
        Prop({ type: Number, default: 7 })
    ], uiProcessCircle.prototype, "line", void 0);
    _uiProcessCircle_decorate([
        Prop({ type: Number, default: 100 })
    ], uiProcessCircle.prototype, "maxPercent", void 0);
    _uiProcessCircle_decorate([
        Prop({ type: Boolean })
    ], uiProcessCircle.prototype, "control", void 0);
    _uiProcessCircle_decorate([
        Prop({ type: Boolean })
    ], uiProcessCircle.prototype, "clickChange", void 0);
    _uiProcessCircle_decorate([
        Prop({ type: Boolean })
    ], uiProcessCircle.prototype, "hiddenContent", void 0);
    uiProcessCircle = _uiProcessCircle_decorate([
        vue_class_component_esm
    ], uiProcessCircle);
    return uiProcessCircle;
}(color));
/* harmony default export */ const _uiProcessCircle = (uiProcessCircle);

;// CONCATENATED MODULE: ./src/components/uiProcess/circle/index.ts


_uiProcessCircle.install = function (vue) {
    vue.component('ui-process-circle', _uiProcessCircle);
};
/* harmony default export */ const circle = (_uiProcessCircle);

;// CONCATENATED MODULE: ./src/components/uiRange/base/_uiRange.ts
var _uiRange_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiRange_assign = (undefined && undefined.__assign) || function () {
    _uiRange_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiRange_assign.apply(this, arguments);
};
var _uiRange_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiRange = /** @class */ (function (_super) {
    _uiRange_extends(uiRange, _super);
    function uiRange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiRange.prototype, "isValid", {
        get: function () {
            if (!!isUndefined(this.value))
                return false;
            if (this.max < this.min)
                return false;
            return true;
        },
        enumerable: false,
        configurable: true
    });
    uiRange.prototype.getValueByPercent = function (percent) {
        if (!this.isValid)
            return;
        var lengthStep = 100 / (this.max - this.min);
        var steps = Math.round(percent / lengthStep);
        var valueRange = steps * lengthStep * (this.max - this.min) * 0.01 + this.min;
        // Check
        if (valueRange > this.max) {
            valueRange = this.max;
        }
        else {
            valueRange = Math.round(valueRange);
        }
        // Update
        this.$emit('model', valueRange);
        this.$emit('change', valueRange);
    };
    Object.defineProperty(uiRange.prototype, "percent", {
        get: function () {
            if (!this.isValid)
                return 0;
            if (!this.value)
                return 0; // If value = null || value = 0
            var lengthStep = 100 / (this.max - this.min);
            var percentNow = (this.value - this.min) * lengthStep;
            if (Math.sign(percentNow) == -1) {
                return 0;
            }
            else if (percentNow > 100) {
                return 100;
            }
            else {
                return percentNow;
            }
        },
        enumerable: false,
        configurable: true
    });
    uiRange.prototype.render = function (h) {
        return h(_uiProcess, {
            props: _uiRange_assign(_uiRange_assign({}, this.$props), { value: this.percent, maxPercent: 100, clickChange: true, control: !this.hideControl }),
            on: {
                change: this.getValueByPercent.bind(this)
            }
        }, [
            this.value
        ]);
    };
    _uiRange_decorate([
        Model('model', { type: Number })
    ], uiRange.prototype, "value", void 0);
    _uiRange_decorate([
        Prop({ type: Number, default: 0 })
    ], uiRange.prototype, "min", void 0);
    _uiRange_decorate([
        Prop({ type: Number, default: 10 })
    ], uiRange.prototype, "max", void 0);
    _uiRange_decorate([
        Prop({ default: null })
    ], uiRange.prototype, "width", void 0);
    _uiRange_decorate([
        Prop({ default: null })
    ], uiRange.prototype, "size", void 0);
    _uiRange_decorate([
        Prop({ type: Boolean })
    ], uiRange.prototype, "center", void 0);
    _uiRange_decorate([
        Prop({ type: Boolean })
    ], uiRange.prototype, "right", void 0);
    _uiRange_decorate([
        Prop({ type: Boolean })
    ], uiRange.prototype, "hiddenContent", void 0);
    _uiRange_decorate([
        Prop({ type: Boolean })
    ], uiRange.prototype, "hideControl", void 0);
    uiRange = _uiRange_decorate([
        vue_class_component_esm
    ], uiRange);
    return uiRange;
}(color));
/* harmony default export */ const _uiRange = (uiRange);

;// CONCATENATED MODULE: ./src/components/uiRange/base/index.ts

_uiRange.install = function (vue) {
    vue.component('ui-range', _uiRange);
};
/* harmony default export */ const uiRange_base = (_uiRange);

;// CONCATENATED MODULE: ./src/components/uiRange/circle/_uiRangeCircle.ts
var _uiRangeCircle_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiRangeCircle_assign = (undefined && undefined.__assign) || function () {
    _uiRangeCircle_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiRangeCircle_assign.apply(this, arguments);
};
var _uiRangeCircle_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiRangeCircle = /** @class */ (function (_super) {
    _uiRangeCircle_extends(uiRangeCircle, _super);
    function uiRangeCircle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiRangeCircle.prototype, "isValid", {
        get: function () {
            if (!!isUndefined(this.value))
                return false;
            if (this.max < this.min)
                return false;
            return true;
        },
        enumerable: false,
        configurable: true
    });
    uiRangeCircle.prototype.getValueByPercent = function (percent) {
        if (!this.isValid)
            return;
        var lengthStep = 100 / (this.max - this.min);
        var steps = Math.round(percent / lengthStep);
        var valueRange = steps * lengthStep * (this.max - this.min) * 0.01 + this.min;
        // Check
        if (valueRange > this.max) {
            valueRange = this.max;
        }
        else {
            valueRange = Math.round(valueRange);
        }
        // Update
        this.$emit('model', valueRange);
        this.$emit('change', valueRange);
    };
    Object.defineProperty(uiRangeCircle.prototype, "percent", {
        get: function () {
            if (!this.isValid)
                return 0;
            if (!this.value)
                return 0; // If value = null || value = 0
            var lengthStep = 100 / (this.max - this.min);
            var percentNow = (this.value - this.min) * lengthStep;
            if (Math.sign(percentNow) == -1) {
                return 0;
            }
            else if (percentNow > 100) {
                return 100;
            }
            else {
                return percentNow;
            }
        },
        enumerable: false,
        configurable: true
    });
    uiRangeCircle.prototype.render = function (h) {
        return h(_uiProcessCircle, {
            props: _uiRangeCircle_assign(_uiRangeCircle_assign({}, this.$props), { value: this.percent, maxPercent: 100, clickChange: true, control: !this.hideControl }),
            on: {
                change: this.getValueByPercent.bind(this)
            }
        }, [
            this.value
        ]);
    };
    _uiRangeCircle_decorate([
        Model('model', { type: Number })
    ], uiRangeCircle.prototype, "value", void 0);
    _uiRangeCircle_decorate([
        Prop({ type: Number, default: 0 })
    ], uiRangeCircle.prototype, "min", void 0);
    _uiRangeCircle_decorate([
        Prop({ type: Number, default: 10 })
    ], uiRangeCircle.prototype, "max", void 0);
    _uiRangeCircle_decorate([
        Prop({ type: Number, default: 100 })
    ], uiRangeCircle.prototype, "size", void 0);
    _uiRangeCircle_decorate([
        Prop({ type: Number, default: 7 })
    ], uiRangeCircle.prototype, "line", void 0);
    _uiRangeCircle_decorate([
        Prop({ type: Boolean })
    ], uiRangeCircle.prototype, "hideControl", void 0);
    _uiRangeCircle_decorate([
        Prop({ type: Boolean })
    ], uiRangeCircle.prototype, "hiddenContent", void 0);
    uiRangeCircle = _uiRangeCircle_decorate([
        vue_class_component_esm
    ], uiRangeCircle);
    return uiRangeCircle;
}(color));
/* harmony default export */ const _uiRangeCircle = (uiRangeCircle);

;// CONCATENATED MODULE: ./src/components/uiRange/circle/index.ts

_uiRangeCircle.install = function (vue) {
    vue.component('ui-range-circle', _uiRangeCircle);
};
/* harmony default export */ const uiRange_circle = (_uiRangeCircle);

;// CONCATENATED MODULE: ./src/components/uiList/base/_uiList.ts
var _uiList_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiList_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiList = /** @class */ (function (_super) {
    _uiList_extends(uiList, _super);
    function uiList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiList.prototype.render = function (h) {
        return h('div', {
            staticClass: 'ui-list',
            class: [
                'ui-component--flex',
                {
                    'ui-list--space': !!this.space,
                    'ui-list--dense': !!this.space && !!this.dense
                }
            ]
        }, [
            this.$slots.default
        ]);
    };
    _uiList_decorate([
        Prop({ type: Boolean })
    ], uiList.prototype, "space", void 0);
    _uiList_decorate([
        Prop({ type: Boolean })
    ], uiList.prototype, "dense", void 0);
    uiList = _uiList_decorate([
        vue_class_component_esm
    ], uiList);
    return uiList;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiList = (uiList);

;// CONCATENATED MODULE: ./src/components/uiList/base/index.ts


_uiList.install = function (vue) {
    vue.component('ui-list', _uiList);
};
/* harmony default export */ const uiList_base = (_uiList);

;// CONCATENATED MODULE: ./src/components/uiList/group/_uiListGroup.ts
var _uiListGroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiListGroup_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiListItem = /** @class */ (function (_super) {
    _uiListGroup_extends(uiListItem, _super);
    function uiListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiListItem.prototype.render = function (h) {
        var title = h('div', {
            staticClass: 'ui-list-group__title',
        }, [
            !!this.$slots.title ? this.$slots.title : 'Group'
        ]);
        var content = h('div', {
            staticClass: 'ui-list-group__content',
        }, [
            this.$slots.default
        ]);
        return h('div', {
            staticClass: 'ui-list-group',
            class: [
                'ui-component--flex',
            ]
        }, [
            title,
            content
        ]);
    };
    uiListItem = _uiListGroup_decorate([
        vue_class_component_esm
    ], uiListItem);
    return uiListItem;
}(color));
/* harmony default export */ const _uiListGroup = (uiListItem);

;// CONCATENATED MODULE: ./src/components/uiList/group/index.ts


_uiListGroup.install = function (vue) {
    vue.component('ui-list-group', _uiListGroup);
};
/* harmony default export */ const group = (_uiListGroup);

;// CONCATENATED MODULE: ./src/components/uiList/item/_uiListItem.ts
var _uiListItem_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiListItem_assign = (undefined && undefined.__assign) || function () {
    _uiListItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiListItem_assign.apply(this, arguments);
};
var _uiListItem_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var _uiListItem_uiListItem = /** @class */ (function (_super) {
    _uiListItem_extends(uiListItem, _super);
    function uiListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiListItem.prototype.onClick = function (event) {
        if (!this.isPointer)
            return;
        this.startRipple(event, this.$el);
        this.onLink();
        this.$emit('click', event);
    };
    uiListItem.prototype.render = function (h) {
        var left = h('div', {
            staticClass: 'ui-list-item__left',
        }, [
            this.$slots.left
        ]);
        var title = h('div', {
            staticClass: 'ui-list-item__center__title',
        }, [
            this.$slots.title
        ]);
        var body = h('div', {
            staticClass: 'ui-list-item__center__body',
        }, [
            this.$slots.default
        ]);
        var center = h('div', {
            staticClass: 'ui-list-item__center',
        }, [
            this.$slots.title && title,
            body
        ]);
        var right = h('div', {
            staticClass: 'ui-list-item__right',
        }, [
            this.$slots.right
        ]);
        return h('div', {
            staticClass: 'ui-list-item',
            class: [
                'ui-component',
                'ui-component--flex',
                {
                    'ui-list-item--center': !!this.center
                },
                this.classStatus,
                this.classFashion,
                this.classColor
            ],
            style: [
                this.styleColor
            ],
            attrs: _uiListItem_assign({}, this.$attrs),
            on: _uiListItem_assign(_uiListItem_assign({}, this.$listeners), { click: this.onClick })
        }, [
            !!this.isLoading && h(public_loading),
            !!this.$slots.left && left,
            center,
            !!this.$slots.right && right,
        ]);
    };
    _uiListItem_decorate([
        Prop({ type: String, default: 'transparent' })
    ], uiListItem.prototype, "fashion", void 0);
    _uiListItem_decorate([
        Prop({ type: String, default: 'full' })
    ], uiListItem.prototype, "fashionActive", void 0);
    _uiListItem_decorate([
        Prop({ type: Boolean })
    ], uiListItem.prototype, "center", void 0);
    uiListItem = _uiListItem_decorate([
        vue_class_component_esm
    ], uiListItem);
    return uiListItem;
}(color));
/* harmony default export */ const _uiListItem = (_uiListItem_uiListItem);

;// CONCATENATED MODULE: ./src/components/uiList/item/index.ts


_uiListItem.install = function (vue) {
    vue.component('ui-list-item', _uiListItem);
};
/* harmony default export */ const uiList_item = (_uiListItem);

;// CONCATENATED MODULE: ./src/components/index.ts
//Avatar

//Alert

//Badge

//BottomSheet

//Button

//Card

//Checkbox


//Carousel


//Chip

//Dialog

//Input

//Flex

//Loader

//Menu

//Select


//Process


//Range


//List




;// CONCATENATED MODULE: ./src/layouts/uiApp/_uiApp.ts
var _uiApp_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiApp_assign = (undefined && undefined.__assign) || function () {
    _uiApp_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiApp_assign.apply(this, arguments);
};
var _uiApp_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiApp = /** @class */ (function (_super) {
    _uiApp_extends(uiApp, _super);
    function uiApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiApp.prototype, "themeService", {
        get: function () {
            return this.$onlis.theme;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiApp.prototype, "colors", {
        //get breakpointService () {
        //  return this.$onlis.breakpoint
        //}
        get: function () {
            return !!this.themeService.dark ? this.themeService.colors['dark'] : this.themeService.colors['light'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiApp.prototype, "styleVars", {
        get: function () {
            return {
                '--ui-radius': this.themeService.radius,
                //'--ui-threshold-xs': returnPX(this.breakpointService.thresholds.xs),
                //'--ui-threshold-sm': returnPX(this.breakpointService.thresholds.sm),
                //'--ui-threshold-md': returnPX(this.breakpointService.thresholds.md),
                //'--ui-threshold-lg': returnPX(this.breakpointService.thresholds.lg)
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiApp.prototype, "styleColors", {
        get: function () {
            return {
                '--ui-primary': this.colors['primary'],
                '--ui-danger': this.colors['danger'],
                '--ui-warn': this.colors['warn'],
                '--ui-success': this.colors['success'],
                '--ui-dark': this.colors['dark'],
                '--ui-light': this.colors['light'],
                '--ui-background': this.colors['background'],
                '--ui-content': this.colors['content'],
                '--ui-child': this.colors['child'],
                '--ui-text': this.colors['text'],
                '--ui-gray': this.colors['gray'],
                '--ui-disabled': this.colors['disabled'],
            };
        },
        enumerable: false,
        configurable: true
    });
    uiApp.prototype.render = function (h) {
        return h('div', {
            staticClass: 'ui-app',
            domProps: {
                id: '_app_'
            },
            attrs: _uiApp_assign(_uiApp_assign({}, this.$attrs), { dark: this.themeService.dark }),
            style: [
                this.styleVars,
                this.styleColors
            ]
        }, [
            this.$slots.default
        ]);
    };
    uiApp = _uiApp_decorate([
        vue_class_component_esm
    ], uiApp);
    return uiApp;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiApp = (uiApp);

;// CONCATENATED MODULE: ./src/layouts/uiApp/index.ts


_uiApp.install = function (vue) {
    vue.component('ui-app', _uiApp);
};
/* harmony default export */ const layouts_uiApp = (_uiApp);

;// CONCATENATED MODULE: ./src/layouts/uiMain/_uiMain.ts
var _uiMain_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiMain_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var _uiMain_uiMain = /** @class */ (function (_super) {
    _uiMain_extends(uiMain, _super);
    function uiMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiMain.prototype, "layoutService", {
        get: function () {
            return this.$onlis.layout;
        },
        enumerable: false,
        configurable: true
    });
    uiMain.prototype.render = function (h) {
        var content = h('div', {
            staticClass: 'ui-main-content',
        }, [
            this.$slots.default
        ]);
        return h('div', {
            staticClass: 'ui-main',
            style: {
                'padding-top': this.layoutService.top,
                'padding-bottom': this.layoutService.bottom,
                'padding-left': this.layoutService.left,
                'padding-right': this.layoutService.right
            }
        }, [
            content
        ]);
    };
    uiMain = _uiMain_decorate([
        vue_class_component_esm
    ], uiMain);
    return uiMain;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiMain = (_uiMain_uiMain);

;// CONCATENATED MODULE: ./src/layouts/uiMain/index.ts


_uiMain.install = function (vue) {
    vue.component('ui-main', _uiMain);
};
/* harmony default export */ const layouts_uiMain = (_uiMain);

;// CONCATENATED MODULE: ./src/layouts/uiGrid/_uiCol.ts
var _uiCol_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiCol_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiCol = /** @class */ (function (_super) {
    _uiCol_extends(uiCol, _super);
    function uiCol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    uiCol.prototype.render = function (h) {
        return h('div', {
            staticClass: 'ui-col',
            class: [
                "ui-col--w-" + this.w,
                "ui-col--offset-" + this.offset,
                "ui-col--xl-" + this.xl,
                "ui-col--lg-" + this.lg,
                "ui-col--md-" + this.md,
                "ui-col--sm-" + this.sm,
                "ui-col--xs-" + this.xs,
                "order-" + this.order
            ]
        }, [
            this.$slots.default
        ]);
    };
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '12' })
    ], uiCol.prototype, "w", void 0);
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '0' })
    ], uiCol.prototype, "offset", void 0);
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '0' })
    ], uiCol.prototype, "order", void 0);
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '0' })
    ], uiCol.prototype, "xl", void 0);
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '0' })
    ], uiCol.prototype, "lg", void 0);
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '0' })
    ], uiCol.prototype, "md", void 0);
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '0' })
    ], uiCol.prototype, "sm", void 0);
    _uiCol_decorate([
        Prop({ type: [String, Number], default: '0' })
    ], uiCol.prototype, "xs", void 0);
    uiCol = _uiCol_decorate([
        vue_class_component_esm
    ], uiCol);
    return uiCol;
}((external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default())));
/* harmony default export */ const _uiCol = (uiCol);

;// CONCATENATED MODULE: ./src/layouts/uiGrid/_uiRow.ts
var _uiRow_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiRow_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiRow = /** @class */ (function (_super) {
    _uiRow_extends(uiRow, _super);
    function uiRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _uiRow_decorate([
        Prop({ type: String, default: 'start' })
    ], uiRow.prototype, "jus", void 0);
    _uiRow_decorate([
        Prop({ type: String, default: 'start' })
    ], uiRow.prototype, "align", void 0);
    _uiRow_decorate([
        Prop({ type: Boolean, default: true })
    ], uiRow.prototype, "wrap", void 0);
    _uiRow_decorate([
        Prop({ type: String, default: 'start' })
    ], uiRow.prototype, "content", void 0);
    uiRow = _uiRow_decorate([
        vue_class_component_esm
    ], uiRow);
    return uiRow;
}(_uiFlex));
/* harmony default export */ const _uiRow = (uiRow);

;// CONCATENATED MODULE: ./src/layouts/uiGrid/index.ts



_uiCol.install = function (vue) {
    vue.component('ui-col', _uiCol);
};
_uiRow.install = function (vue) {
    vue.component('ui-row', _uiRow);
};


;// CONCATENATED MODULE: ./src/layouts/uiSidebar/base/_uiSidebar.ts
var _uiSidebar_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiSidebar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var uiSidebar = /** @class */ (function (_super) {
    _uiSidebar_extends(uiSidebar, _super);
    function uiSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'sidebar';
        return _this;
    }
    Object.defineProperty(uiSidebar.prototype, "isDesktop", {
        // Is Desktop
        get: function () {
            return !!this.$onlis.breakpoint.isDesktop;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebar.prototype, "isLayout", {
        // Is Layout
        get: function () {
            return !!this.layout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebar.prototype, "layoutService", {
        // Layout Service
        get: function () {
            return this.$onlis.layout;
        },
        enumerable: false,
        configurable: true
    });
    // Set Layout
    uiSidebar.prototype.setLayout = function () {
        if (!this.isLayout)
            return;
        if (!this.isDesktop)
            return;
        var position = !!this.right ? 'right' : 'left';
        this.layoutService.set(position, this.width);
    };
    // Remove Layout
    uiSidebar.prototype.removeLayout = function () {
        if (!this.isLayout)
            return;
        var position = !!this.right ? 'right' : 'left';
        this.layoutService.remove(position);
    };
    // Auto Open when is Desktop
    uiSidebar.prototype.autoShow = function () {
        if (!this.isLayout)
            return;
        if (!this.isDesktop)
            return;
        if (!this.open) {
            this.$emit('update:open', true);
        }
        else {
            this.setLayout();
        }
    };
    // Auto Hide when is Mobile or Tablet
    uiSidebar.prototype.autoHide = function () {
        if (!this.isLayout)
            return;
        if (!!this.open) {
            this.$emit('update:open', false);
        }
        else {
            this.removeLayout();
        }
    };
    // Set Layout when Create
    uiSidebar.prototype.created = function () {
        this.autoShow();
    };
    // Watch Desktop
    uiSidebar.prototype.onDesktopChange = function (val) {
        if (!!val) {
            this.autoShow();
        }
        else {
            this.autoHide();
        }
    };
    // Click OutSide
    uiSidebar.prototype.clickOutSide = function (event) {
        if (!this.open)
            return;
        if (!!this.preventClose)
            return;
        // Disabled When is Layout and Desktop Size
        if (!!this.isLayout && !!this.isDesktop)
            return;
        this.$emit('update:open', false);
    };
    // Insert
    uiSidebar.prototype.insertSidebar = function () {
        var _this = this;
        if (!!this.absolute)
            return;
        this.$nextTick(function () {
            insertBody(_this.$el);
        });
    };
    // Remove
    uiSidebar.prototype.beforeDestroy = function () {
        if (!!this.absolute)
            return;
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
    };
    // Show
    uiSidebar.prototype.show = function () {
        var _this = this;
        this.insertSidebar();
        this.setLayout();
        this.$nextTick(function () { return _this.$emit('open'); });
    };
    // Hide 
    uiSidebar.prototype.hide = function () {
        this.removeLayout();
        this.$emit('close');
    };
    // Check Value
    uiSidebar.prototype.onValueChange = function (val) {
        if (!!val)
            return this.show();
        this.hide();
    };
    // Render
    uiSidebar.prototype.render = function (h) {
        var logo = h('div', {
            staticClass: 'ui-sidebar__logo'
        }, [
            this.$slots.logo
        ]);
        var body = h('div', {
            staticClass: 'ui-scroll',
            ref: 'body',
            class: {
                'ui-scroll--right': !!this.right
            }
        }, [
            h('div', {
                staticClass: 'ui-sidebar__body',
                class: [
                    'ui-scroll__content'
                ]
            }, [
                this.$slots.default
            ])
        ]);
        var footer = h('div', {
            staticClass: 'ui-sidebar__footer'
        }, [
            this.$slots.footer
        ]);
        var sidebar = h('div', {
            staticClass: 'ui-sidebar',
            class: [
                'ui-component',
                'ui-component--flex',
                {
                    'ui-component-fashion--basic': !this.fashion || this.fashion !== 'full',
                    'ui-component-fashion--full': this.fashion === 'full',
                },
                {
                    'ui-sidebar--left': !this.right,
                    'ui-sidebar--right': !!this.right,
                },
                this.classColor
            ],
            style: [
                this.styleColor,
                {
                    '--ui-sidebar-width': returnPX(this.width)
                }
            ],
            directives: [
                {
                    name: 'show',
                    value: this.open
                },
                {
                    name: 'onlis-click-outside',
                    value: this.clickOutSide
                }
            ]
        }, [
            !!this.$slots.logo && logo,
            body,
            !!this.$slots.footer && footer,
        ]);
        return h('transition', {
            props: {
                name: "ui-" + (!!this.right ? 'left' : 'right')
            }
        }, [
            sidebar
        ]);
    };
    _uiSidebar_decorate([
        Model('model', { type: [String, Number] })
    ], uiSidebar.prototype, "value", void 0);
    _uiSidebar_decorate([
        Prop({ type: Boolean })
    ], uiSidebar.prototype, "layout", void 0);
    _uiSidebar_decorate([
        Prop({ type: Boolean })
    ], uiSidebar.prototype, "open", void 0);
    _uiSidebar_decorate([
        Prop({ type: Boolean })
    ], uiSidebar.prototype, "absolute", void 0);
    _uiSidebar_decorate([
        Prop({ type: Boolean })
    ], uiSidebar.prototype, "right", void 0);
    _uiSidebar_decorate([
        Prop({ type: Number, default: 250 })
    ], uiSidebar.prototype, "width", void 0);
    _uiSidebar_decorate([
        Prop({ type: Boolean })
    ], uiSidebar.prototype, "preventClose", void 0);
    _uiSidebar_decorate([
        Prop({ type: Boolean })
    ], uiSidebar.prototype, "closeOnItem", void 0);
    _uiSidebar_decorate([
        Prop({ type: Boolean })
    ], uiSidebar.prototype, "autoScroll", void 0);
    _uiSidebar_decorate([
        Watch('isDesktop')
    ], uiSidebar.prototype, "onDesktopChange", null);
    _uiSidebar_decorate([
        Watch('open')
    ], uiSidebar.prototype, "onValueChange", null);
    uiSidebar = _uiSidebar_decorate([
        vue_class_component_esm
    ], uiSidebar);
    return uiSidebar;
}(color));
/* harmony default export */ const _uiSidebar = (uiSidebar);

;// CONCATENATED MODULE: ./src/layouts/uiSidebar/base/index.ts


_uiSidebar.install = function (vue) {
    vue.component('ui-sidebar', _uiSidebar);
};
/* harmony default export */ const uiSidebar_base = (_uiSidebar);

;// CONCATENATED MODULE: ./src/layouts/uiSidebar/group/_uiSidebarGroup.ts
var _uiSidebarGroup_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiSidebarGroup_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var uiSidebarGroup = /** @class */ (function (_super) {
    _uiSidebarGroup_extends(uiSidebarGroup, _super);
    function uiSidebarGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.componentName = 'sidebar-group';
        _this.isOpen = _this.open;
        return _this;
    }
    Object.defineProperty(uiSidebarGroup.prototype, "id", {
        // ID
        get: function () {
            return "sidebar-group-" + this._uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarGroup.prototype, "parentRoot", {
        // Get Parent Sidebar
        get: function () {
            var parent = this.$parent;
            if (!parent)
                return null;
            if (parent.componentName === 'sidebar') {
                return parent;
            }
            else if (parent.componentName === 'sidebar-group') {
                return !!(parent.parentRoot) ? (parent.parentRoot) : null;
            }
            else
                return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarGroup.prototype, "parentGroup", {
        // Get Parent Group
        get: function () {
            var parent = this.$parent;
            if (!parent)
                return null;
            return parent.componentName === 'sidebar-group' ? parent : null;
        },
        enumerable: false,
        configurable: true
    });
    // Target Click
    uiSidebarGroup.prototype.onTargetClick = function () {
        this.isOpen = !this.isOpen;
    };
    // Render
    uiSidebarGroup.prototype.render = function (h) {
        var target = h('div', {
            staticClass: 'ui-sidebar-group__target',
            on: {
                click: this.onTargetClick
            }
        }, [
            this.$slots.target
        ]);
        var child = h('div', {
            staticClass: 'ui-sidebar-group__child',
            directives: [
                {
                    name: 'show',
                    value: this.isOpen
                }
            ]
        }, [
            this.$slots.child
        ]);
        var childTransition = h('transition', {
            props: {
                name: !!this.parentRoot ? "ui-" + (!!this.parentRoot.right ? 'left' : 'right') : 'ui-show'
            }
        }, [
            child
        ]);
        return h('div', {
            staticClass: 'ui-sidebar-group',
            domProps: {
                id: this.id
            },
            class: {
                'ui-component--disabled': !!this.isDisabled
            }
        }, [
            !!this.$slots.target && target,
            !!this.$slots.child && childTransition
        ]);
    };
    _uiSidebarGroup_decorate([
        Prop({ type: Boolean })
    ], uiSidebarGroup.prototype, "open", void 0);
    uiSidebarGroup = _uiSidebarGroup_decorate([
        vue_class_component_esm
    ], uiSidebarGroup);
    return uiSidebarGroup;
}(base));
/* harmony default export */ const _uiSidebarGroup = (uiSidebarGroup);

;// CONCATENATED MODULE: ./src/layouts/uiSidebar/group/index.ts


_uiSidebarGroup.install = function (vue) {
    vue.component('ui-sidebar-group', _uiSidebarGroup);
};
/* harmony default export */ const uiSidebar_group = (_uiSidebarGroup);

;// CONCATENATED MODULE: ./src/layouts/uiSidebar/item/_uiSidebarItem.ts
var _uiSidebarItem_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _uiSidebarItem_assign = (undefined && undefined.__assign) || function () {
    _uiSidebarItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _uiSidebarItem_assign.apply(this, arguments);
};
var _uiSidebarItem_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var uiSidebarItem = /** @class */ (function (_super) {
    _uiSidebarItem_extends(uiSidebarItem, _super);
    function uiSidebarItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(uiSidebarItem.prototype, "newClassColor", {
        // Color
        get: function () {
            if (!this.parentRoot)
                return this.classColor;
            else
                return !!this.isColor ? this.classColor : this.parentRoot.classColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarItem.prototype, "newStyleColor", {
        get: function () {
            if (!this.parentRoot)
                return this.styleColor;
            else
                return !!this.isColor ? this.styleColor : this.parentRoot.styleColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarItem.prototype, "id", {
        // ID
        get: function () {
            return "sidebar-item-" + this._uid;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarItem.prototype, "parentRoot", {
        // Get Parent Sidebar
        get: function () {
            var parent = this.$parent;
            if (!parent)
                return null;
            if (parent.componentName === 'sidebar') {
                return parent;
            }
            else if (parent.componentName === 'sidebar-group') {
                return !!(parent.parentRoot) ? (parent.parentRoot) : null;
            }
            else
                return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarItem.prototype, "parentGroup", {
        // Get Parent Group
        get: function () {
            var parent = this.$parent;
            if (!parent)
                return null;
            return parent.componentName === 'sidebar-group' ? parent : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarItem.prototype, "isGroupOpen", {
        // Is Group Open
        get: function () {
            return !!this.parentGroup ? this.parentGroup.isOpen : false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarItem.prototype, "isActive", {
        // Is Active
        get: function () {
            if (!this.parentRoot)
                return false;
            if (!!this.target)
                return false;
            else if (!!this.active)
                return true;
            else if (!!this.to && !!this.$route) {
                var pathRoute = this.$route.path;
                var fullPathRoute = this.$route.fullPath;
                return (pathRoute == this.to) || (fullPathRoute == this.to) ? true : false;
            }
            else if (!!this.parentRoot.value)
                return this.parentRoot.value === this.value;
            else
                return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(uiSidebarItem.prototype, "isPointer", {
        // Is Pointer
        get: function () {
            return !!this.$listeners.click || !!this.to || !!this.href || (!!this.parentRoot && !isUndefined(this.parentRoot.value));
        },
        enumerable: false,
        configurable: true
    });
    // On Item Click
    uiSidebarItem.prototype.onClick = function (event) {
        if (!this.parentRoot)
            return;
        this.startRipple(event, this.$el);
        if (!!this.target) {
            this.$emit('click', event);
        }
        else {
            if (!!this.to || !!this.href) {
                this.onLink();
            }
            else if (!isUndefined(this.parentRoot.value) && !!this.value) {
                this.parentRoot.$emit('model', this.value);
            }
            this.onCloseWhenCLick();
            this.$emit('click', event);
        }
    };
    // Close Sidebar when item Click
    uiSidebarItem.prototype.onCloseWhenCLick = function () {
        var _this = this;
        if (!this.parentRoot)
            return;
        if (!this.parentRoot.closeOnItem)
            return;
        setTimeout(function () {
            _this.parentRoot.$emit('update:open', false);
        }, 200);
    };
    // Auto Scroll
    uiSidebarItem.prototype.scrollTo = function () {
        if (!this.isActive)
            return;
        if (!this.parentRoot)
            return;
        if (!this.parentRoot.autoScroll)
            return;
        this.$el.scrollIntoView();
    };
    // Open Group
    uiSidebarItem.prototype.autoOpenGroup = function () {
        if (!this.parentRoot)
            return;
        if (!this.isActive)
            return;
        if (!!this.parentGroup) {
            this.parentGroup.isOpen = true;
            if (!!this.parentGroup.parentGroup) {
                this.parentGroup.parentGroup.isOpen = true;
            }
        }
    };
    uiSidebarItem.prototype.onActiveChange = function () {
        this.scrollTo();
    };
    uiSidebarItem.prototype.onOpenChange = function (val) {
        var _this = this;
        if (!!val && !!this.isActive) {
            setTimeout(function () {
                _this.$el.scrollIntoView();
            }, 50);
        }
    };
    uiSidebarItem.prototype.mounted = function () {
        this.autoOpenGroup();
    };
    // Render
    uiSidebarItem.prototype.render = function (h) {
        var icon = h('div', {
            staticClass: 'ui-sidebar-item__icon'
        }, [
            this.$slots.icon
        ]);
        var content = h('div', {
            staticClass: 'ui-sidebar-item__content',
            class: {
                'ui-sidebar-item__content--notIcon': !this.$slots.icon
            }
        }, [
            this.$slots.default
        ]);
        var right = h('div', {
            staticClass: 'ui-sidebar-item__right'
        }, [
            !!this.$slots.right ? this.$slots.right : h(arrow, {
                props: {
                    top: !!this.isGroupOpen
                }
            })
        ]);
        return h('div', {
            staticClass: 'ui-sidebar-item',
            domProps: {
                id: this.id
            },
            class: [
                'ui-component',
                'ui-component--flex',
                this.classStatus,
                this.newClassColor,
                this.classFashion
            ],
            style: [
                this.newStyleColor
            ],
            on: _uiSidebarItem_assign(_uiSidebarItem_assign({}, this.$listeners), { click: this.onClick })
        }, [
            !!this.$slots.icon && icon,
            content,
            !!this.$slots.right || !!this.target && right
        ]);
    };
    _uiSidebarItem_decorate([
        Prop({ type: [String, Number] })
    ], uiSidebarItem.prototype, "value", void 0);
    _uiSidebarItem_decorate([
        Prop({ type: String, default: 'transparent' })
    ], uiSidebarItem.prototype, "fashion", void 0);
    _uiSidebarItem_decorate([
        Prop({ type: String, default: 'full' })
    ], uiSidebarItem.prototype, "fashionActive", void 0);
    _uiSidebarItem_decorate([
        Prop({ type: String, default: null })
    ], uiSidebarItem.prototype, "color", void 0);
    _uiSidebarItem_decorate([
        Prop({ type: Boolean })
    ], uiSidebarItem.prototype, "target", void 0);
    _uiSidebarItem_decorate([
        Watch('isActive')
    ], uiSidebarItem.prototype, "onActiveChange", null);
    _uiSidebarItem_decorate([
        Watch('parentRoot.open')
    ], uiSidebarItem.prototype, "onOpenChange", null);
    uiSidebarItem = _uiSidebarItem_decorate([
        vue_class_component_esm
    ], uiSidebarItem);
    return uiSidebarItem;
}(color));
/* harmony default export */ const _uiSidebarItem = (uiSidebarItem);

;// CONCATENATED MODULE: ./src/layouts/uiSidebar/item/index.ts


_uiSidebarItem.install = function (vue) {
    vue.component('ui-sidebar-item', _uiSidebarItem);
};
/* harmony default export */ const uiSidebar_item = (_uiSidebarItem);

;// CONCATENATED MODULE: ./src/layouts/index.ts
//App

//Main

//Grid

// Sidebar




;// CONCATENATED MODULE: ./src/services/layout/index.ts

var Layout = /** @class */ (function () {
    function Layout() {
        this.top = 0; // Navbar
        this.bottom = 0; // Footer
        this.left = 0; // Sidebar Left
        this.right = 0; // Sidebar Right
    }
    Layout.prototype.set = function (location, value) {
        if (!isNumber(value))
            return;
        this[location] = returnPX(value);
    };
    Layout.prototype.remove = function (location) {
        this[location] = 0;
    };
    return Layout;
}());
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./src/services/breakpoint/index.ts
var Breakpoint = /** @class */ (function () {
    function Breakpoint() {
        this.resizeTimeout = 0;
        this.isMobile = true; // SSR = true
        this.isTablet = false;
        this.isDesktop = false;
        this.xs = true; // Mobile - SSR = true
        this.sm = false; // Tablet
        this.md = false; // Laptop
        this.lg = false; // Desktop
        this.xl = false; // 2K...
        this.thresholds = {
            xs: 600,
            sm: 960,
            md: 1264,
            lg: 1904
        };
        if (typeof window === 'undefined')
            return; // SSR
        this.update();
        window.addEventListener('resize', this.onResize.bind(this), { passive: true });
    }
    Breakpoint.prototype.onResize = function () {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(this.update.bind(this), 50);
    };
    Breakpoint.prototype.update = function () {
        var width = this.getClientWidth();
        this.xs = width < this.thresholds.xs;
        this.sm = width < this.thresholds.sm && !this.xs;
        this.md = width < this.thresholds.md && !(this.sm || this.xs);
        this.lg = width < this.thresholds.lg && !(this.md || this.sm || this.xs);
        this.xl = width >= this.thresholds.lg;
        this.isMobile = this.xs;
        this.isTablet = this.sm;
        this.isDesktop = width >= this.thresholds.sm;
    };
    Breakpoint.prototype.getClientWidth = function () {
        if (typeof window === 'undefined')
            return 0; // SSR
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    };
    return Breakpoint;
}());
/* harmony default export */ const breakpoint = (Breakpoint);

;// CONCATENATED MODULE: ./src/services/device/index.ts
var R_MOBILE_1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
var R_MOBILE_2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
var R_MOBILE_OR_TABLET_1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
var R_MOBILE_OR_TABLET_2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
var R_CRAWLER = /Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|seznambot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest.com.bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|pingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb.iss.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot.AraTurka.com|bot-pge.chlooe.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|Seekport Crawler|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider.com|GroupHigh\/|theoldreader.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|Curebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge/;
var Device = /** @class */ (function () {
    function Device(configs) {
        this.userAgent = null;
        this.resizeTimeout = 0;
        this.defaultUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
        this.ctx = null;
        this.isMobile = true;
        this.isTablet = false;
        this.isMobileOrTablet = false;
        this.isDesktop = false;
        this.isAndroid = false;
        this.isIOS = false;
        this.isWindow = false;
        this.isMacOS = false;
        this.isSamsung = false;
        this.isEdge = false;
        this.isFirefox = false;
        this.isChrome = false;
        this.isSafari = false;
        this.isCrawler = false;
        this.ctx = configs.ctx;
        this.update();
        if (typeof window === 'undefined')
            return; // SSR
        window.addEventListener('resize', this.onResize.bind(this), { passive: true });
    }
    Device.prototype.onResize = function () {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = window.setTimeout(this.update.bind(this), 50);
    };
    Device.prototype.update = function () {
        if (!!this.ctx && typeof this.ctx.req !== 'undefined') {
            this.userAgent = this.ctx.req.headers['user-agent'];
        }
        else if (typeof navigator !== 'undefined') {
            this.userAgent = navigator.userAgent;
        }
        else {
            this.userAgent = this.defaultUserAgent;
        }
        this.makeFlags();
    };
    Device.prototype.makeFlags = function () {
        this.isMobile = R_MOBILE_1.test(this.userAgent) || R_MOBILE_2.test(this.userAgent.substr(0, 4));
        this.isMobileOrTablet = R_MOBILE_OR_TABLET_1.test(this.userAgent) || R_MOBILE_OR_TABLET_2.test(this.userAgent.substr(0, 4));
        this.isTablet = !this.isMobile && !!this.isMobileOrTablet;
        this.isDesktop = !this.isMobileOrTablet;
        this.isIOS = /iPad|iPhone|iPod/.test(this.userAgent);
        this.isAndroid = /android/i.test(this.userAgent);
        this.isWindow = /Windows/.test(this.userAgent);
        this.isMacOS = /Mac OS X/.test(this.userAgent);
        this.isSamsung = /SamsungBrowser/i.test(this.userAgent);
        this.isEdge = /edg([ea]|ios|)\//i.test(this.userAgent);
        this.isFirefox = /firefox|iceweasel|fxios/i.test(this.userAgent);
        this.isChrome = /chrome|crios|crmo/i.test(this.userAgent);
        this.isSafari = /safari|applewebkit/i.test(this.userAgent);
        this.isCrawler = R_CRAWLER.test(this.userAgent);
    };
    return Device;
}());
/* harmony default export */ const device = (Device);

;// CONCATENATED MODULE: ./src/services/theme/index.ts

var Theme = /** @class */ (function () {
    function Theme(configs) {
        this.dark = false;
        this.radius = null;
        this.colors = {
            dark: {},
            light: {}
        };
        this.initTheme(configs.theme);
    }
    // Dark
    Theme.prototype.setDark = function (dark) {
        if (!isBoolean(dark))
            return;
        this.dark = dark;
    };
    Theme.prototype.toggleDark = function () {
        this.dark = !this.dark;
    };
    // Set Radius
    Theme.prototype.setRadius = function (radius) {
        if (!isString(radius) && !isNumber(radius))
            return;
        this.radius = returnPX(radius);
    };
    Theme.prototype.resetRadius = function () {
        this.radius = null;
    };
    // Set Primary
    Theme.prototype.setPrimary = function (color, mode) {
        this.setColor('primary', color, mode);
    };
    Theme.prototype.resetPrimary = function (mode) {
        this.resetColor('primary', mode);
    };
    // Set Color
    Theme.prototype.setColor = function (prop, color, mode) {
        if (!prop || !color || !isString(color))
            return;
        var newColor = getColor(color);
        if (!mode) {
            this.colors['light'][prop] = newColor;
            this.colors['dark'][prop] = newColor;
        }
        else if (mode === 'dark' || mode === 'light') {
            this.colors[mode][prop] = newColor;
        }
    };
    Theme.prototype.resetColor = function (prop, mode) {
        if (!prop)
            return;
        if (!mode) {
            this.colors['light'][prop] = null;
            this.colors['dark'][prop] = null;
        }
        else if (mode === 'dark' || mode === 'light') {
            this.colors[mode][prop] = null;
        }
    };
    // Save and Load LocalStorage
    Theme.prototype.save = function () {
        if (typeof window === 'undefined')
            return; // SSR
        if (typeof localStorage === 'undefined')
            return;
        localStorage.setItem('onlis-theme', JSON.stringify({
            dark: this.dark,
            radius: this.radius,
            colors: this.colors
        }));
    };
    Theme.prototype.load = function () {
        if (typeof window === 'undefined')
            return;
        if (typeof localStorage === 'undefined')
            return;
        var themeStore = localStorage.getItem('onlis-theme');
        if (!themeStore)
            return;
        themeStore = JSON.parse(themeStore);
        this.initTheme(themeStore);
    };
    // Init
    Theme.prototype.initColorsMode = function (modeColors, mode) {
        if (!modeColors || !isObject(modeColors))
            return;
        for (var _i = 0, _a = Object.entries(modeColors); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            this.setColor(key, value, mode);
        }
    };
    Theme.prototype.initColors = function (colors) {
        if (!colors || !isObject(colors))
            return;
        this.initColorsMode(colors.light, 'light');
        this.initColorsMode(colors.dark, 'dark');
    };
    Theme.prototype.initTheme = function (theme) {
        var themeObject = getObject(theme);
        if (!!themeObject) {
            this.setDark(themeObject.dark);
            this.setRadius(themeObject.radius);
            this.initColors(themeObject.colors);
        }
    };
    return Theme;
}());
/* harmony default export */ const theme = (Theme);

;// CONCATENATED MODULE: ./src/services/index.ts





;// CONCATENATED MODULE: ./src/directives/clickOutside/index.ts

function checkEvent(e, el, binding) {
    if (!e)
        return false;
    var root = attachedRoot(el);
    if (root instanceof ShadowRoot && root.host === e.target)
        return false;
    var elements = [];
    elements.push(el);
    return !elements.some(function (el) { return el.contains(e.target); });
}
function handleShadow(el, callback) {
    var root = attachedRoot(el);
    callback(document);
    if (root instanceof ShadowRoot) {
        callback(root);
    }
}
var uiClickOutside = {
    inserted: function (el, binding) {
        var onClick = function (e) {
            var handler = binding.value;
            if (typeof handler === 'function') {
                checkEvent(e, el, binding) && handler(e);
            }
        };
        handleShadow(el, function (_window) {
            _window.addEventListener('click', onClick, true);
        });
        el._clickOutside = onClick;
    },
    unbind: function (el) {
        if (!el._clickOutside)
            return;
        handleShadow(el, function (_window) {
            if (!_window || !el._clickOutside)
                return;
            _window.removeEventListener('click', el._clickOutside, true);
        });
        delete el._clickOutside;
    }
};
/* harmony default export */ const clickOutside = (uiClickOutside);

;// CONCATENATED MODULE: ./src/directives/obServe/index.ts
var unbind = function (el) {
    if (!el._observe)
        return;
    el._observe.unobserve(el);
    delete el._observe;
};
var uiObserve = {
    inserted: function (el, binding) {
        if (typeof window === 'undefined' || !('IntersectionObserver' in window))
            return;
        var value = binding.value;
        var _a = typeof value === 'object' ? value : { handler: value, options: {} }, handler = _a.handler, options = _a.options;
        var observer = new IntersectionObserver(function (entries, observer) {
            if (entries === void 0) { entries = []; }
            if (!el._observe)
                return;
            var isIntersecting = entries.some(function (entry) { return entry.isIntersecting; });
            if (!!handler) {
                handler(entries, observer, isIntersecting);
            }
            if (isIntersecting) {
                unbind(el);
            }
        }, options);
        el._observe = observer;
        observer.observe(el);
    },
    unbind: unbind
};
/* harmony default export */ const obServe = (uiObserve);

;// CONCATENATED MODULE: ./src/directives/index.ts



;// CONCATENATED MODULE: ./src/framework.ts
var framework_assign = (undefined && undefined.__assign) || function () {
    framework_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return framework_assign.apply(this, arguments);
};




var Onlis = /** @class */ (function () {
    function Onlis() {
    }
    var _a;
    _a = Onlis;
    Onlis.install = function (Vue, options) {
        if (options === void 0) { options = {}; }
        _a.initDirectives(Vue);
        _a.initComponents(Vue);
        Vue.prototype.$onlis = _a.initServices(Vue, options);
        _a.updateHydration(Vue);
    };
    Onlis.installNuxt = function (ctx, inject, Vue, options) {
        if (options === void 0) { options = {}; }
        var services = _a.initServices(Vue, options, ctx);
        inject('onlis', services);
    };
    Onlis.initComponents = function (Vue) {
        Object.values(components_namespaceObject).forEach(function (component) {
            Vue.use(component);
        });
        Object.values(layouts_namespaceObject).forEach(function (component) {
            Vue.use(component);
        });
    };
    Onlis.initDirectives = function (Vue) {
        Vue.directive('onlisClickOutside', clickOutside);
        Vue.directive('onlisObserve', obServe);
    };
    Onlis.initServices = function (Vue, options, ctx) {
        var configs = framework_assign({}, options);
        if (!!ctx) {
            configs.ctx = ctx;
        }
        var services = {
            layout: Vue.observable(new layout()),
            breakpoint: Vue.observable(new breakpoint()),
            theme: Vue.observable(new theme(configs)),
            device: Vue.observable(new device(configs)),
            isHydrationRender: true
        };
        return services;
    };
    Onlis.updateHydration = function (Vue) {
        Vue.mixin({
            mounted: function () {
                if (!!this.$onlis && !!this.$onlis.isHydrationRender) {
                    this.$onlis.isHydrationRender = false;
                    this.$onlis.breakpoint.update();
                }
            }
        });
    };
    return Onlis;
}());
/* harmony default export */ const framework = (Onlis);

;// CONCATENATED MODULE: ./src/index.ts


/* harmony default export */ const src = (framework);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});