/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      debugger;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-text"
      }, "Search Text", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _images_logo_png__WEBPACK_IMPORTED_MODULE_3__["default"]
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null), document.getElementById('root'));

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var printWarning = function () {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(7);

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (true) {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
module.exports = ReactPropTypesSecret;

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(11);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.18.0
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    var enableSchedulerDebugging = false;
    var enableIsInputPending = false;
    var enableProfiling = true;
    var requestHostCallback;
    var requestHostTimeout;
    var cancelHostTimeout;
    var shouldYieldToHost;
    var requestPaint;

    if ( // If Scheduler runs in a non-DOM environment, it falls back to a naive
    // implementation using setTimeout.
    typeof window === 'undefined' || // Check if MessageChannel is supported, too.
    typeof MessageChannel !== 'function') {
      // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
      // fallback to a naive implementation.
      var _callback = null;
      var _timeoutID = null;

      var _flushCallback = function () {
        if (_callback !== null) {
          try {
            var currentTime = exports.unstable_now();
            var hasRemainingTime = true;

            _callback(hasRemainingTime, currentTime);

            _callback = null;
          } catch (e) {
            setTimeout(_flushCallback, 0);
            throw e;
          }
        }
      };

      var initialTime = Date.now();

      exports.unstable_now = function () {
        return Date.now() - initialTime;
      };

      requestHostCallback = function (cb) {
        if (_callback !== null) {
          // Protect against re-entrancy.
          setTimeout(requestHostCallback, 0, cb);
        } else {
          _callback = cb;
          setTimeout(_flushCallback, 0);
        }
      };

      requestHostTimeout = function (cb, ms) {
        _timeoutID = setTimeout(cb, ms);
      };

      cancelHostTimeout = function () {
        clearTimeout(_timeoutID);
      };

      shouldYieldToHost = function () {
        return false;
      };

      requestPaint = exports.unstable_forceFrameRate = function () {};
    } else {
      // Capture local references to native APIs, in case a polyfill overrides them.
      var performance = window.performance;
      var _Date = window.Date;
      var _setTimeout = window.setTimeout;
      var _clearTimeout = window.clearTimeout;

      if (typeof console !== 'undefined') {
        // TODO: Scheduler no longer requires these methods to be polyfilled. But
        // maybe we want to continue warning if they don't exist, to preserve the
        // option to rely on it in the future?
        var requestAnimationFrame = window.requestAnimationFrame;
        var cancelAnimationFrame = window.cancelAnimationFrame; // TODO: Remove fb.me link

        if (typeof requestAnimationFrame !== 'function') {
          console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }

        if (typeof cancelAnimationFrame !== 'function') {
          console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
        }
      }

      if (typeof performance === 'object' && typeof performance.now === 'function') {
        exports.unstable_now = function () {
          return performance.now();
        };
      } else {
        var _initialTime = _Date.now();

        exports.unstable_now = function () {
          return _Date.now() - _initialTime;
        };
      }

      var isMessageLoopRunning = false;
      var scheduledHostCallback = null;
      var taskTimeoutID = -1; // Scheduler periodically yields in case there is other work on the main
      // thread, like user events. By default, it yields multiple times per frame.
      // It does not attempt to align with frame boundaries, since most tasks don't
      // need to be frame aligned; for those that do, use requestAnimationFrame.

      var yieldInterval = 5;
      var deadline = 0; // TODO: Make this configurable
      // TODO: Adjust this based on priority?

      var maxYieldInterval = 300;
      var needsPaint = false;

      if (enableIsInputPending && navigator !== undefined && navigator.scheduling !== undefined && navigator.scheduling.isInputPending !== undefined) {
        var scheduling = navigator.scheduling;

        shouldYieldToHost = function () {
          var currentTime = exports.unstable_now();

          if (currentTime >= deadline) {
            // There's no time left. We may want to yield control of the main
            // thread, so the browser can perform high priority tasks. The main ones
            // are painting and user input. If there's a pending paint or a pending
            // input, then we should yield. But if there's neither, then we can
            // yield less often while remaining responsive. We'll eventually yield
            // regardless, since there could be a pending paint that wasn't
            // accompanied by a call to `requestPaint`, or other main thread tasks
            // like network events.
            if (needsPaint || scheduling.isInputPending()) {
              // There is either a pending paint or a pending input.
              return true;
            } // There's no pending input. Only yield if we've reached the max
            // yield interval.


            return currentTime >= maxYieldInterval;
          } else {
            // There's still time left in the frame.
            return false;
          }
        };

        requestPaint = function () {
          needsPaint = true;
        };
      } else {
        // `isInputPending` is not available. Since we have no way of knowing if
        // there's pending input, always yield at the end of the frame.
        shouldYieldToHost = function () {
          return exports.unstable_now() >= deadline;
        }; // Since we yield every frame regardless, `requestPaint` has no effect.


        requestPaint = function () {};
      }

      exports.unstable_forceFrameRate = function (fps) {
        if (fps < 0 || fps > 125) {
          console.error('forceFrameRate takes a positive int between 0 and 125, ' + 'forcing framerates higher than 125 fps is not unsupported');
          return;
        }

        if (fps > 0) {
          yieldInterval = Math.floor(1000 / fps);
        } else {
          // reset the framerate
          yieldInterval = 5;
        }
      };

      var performWorkUntilDeadline = function () {
        if (scheduledHostCallback !== null) {
          var currentTime = exports.unstable_now(); // Yield after `yieldInterval` ms, regardless of where we are in the vsync
          // cycle. This means there's always time remaining at the beginning of
          // the message event.

          deadline = currentTime + yieldInterval;
          var hasTimeRemaining = true;

          try {
            var hasMoreWork = scheduledHostCallback(hasTimeRemaining, currentTime);

            if (!hasMoreWork) {
              isMessageLoopRunning = false;
              scheduledHostCallback = null;
            } else {
              // If there's more work, schedule the next message event at the end
              // of the preceding one.
              port.postMessage(null);
            }
          } catch (error) {
            // If a scheduler task throws, exit the current browser task so the
            // error can be observed.
            port.postMessage(null);
            throw error;
          }
        } else {
          isMessageLoopRunning = false;
        } // Yielding to the browser will give it a chance to paint, so we can
        // reset this.


        needsPaint = false;
      };

      var channel = new MessageChannel();
      var port = channel.port2;
      channel.port1.onmessage = performWorkUntilDeadline;

      requestHostCallback = function (callback) {
        scheduledHostCallback = callback;

        if (!isMessageLoopRunning) {
          isMessageLoopRunning = true;
          port.postMessage(null);
        }
      };

      requestHostTimeout = function (callback, ms) {
        taskTimeoutID = _setTimeout(function () {
          callback(exports.unstable_now());
        }, ms);
      };

      cancelHostTimeout = function () {
        _clearTimeout(taskTimeoutID);

        taskTimeoutID = -1;
      };
    }

    function push(heap, node) {
      var index = heap.length;
      heap.push(node);
      siftUp(heap, node, index);
    }

    function peek(heap) {
      var first = heap[0];
      return first === undefined ? null : first;
    }

    function pop(heap) {
      var first = heap[0];

      if (first !== undefined) {
        var last = heap.pop();

        if (last !== first) {
          heap[0] = last;
          siftDown(heap, last, 0);
        }

        return first;
      } else {
        return null;
      }
    }

    function siftUp(heap, node, i) {
      var index = i;

      while (true) {
        var parentIndex = Math.floor((index - 1) / 2);
        var parent = heap[parentIndex];

        if (parent !== undefined && compare(parent, node) > 0) {
          // The parent is larger. Swap positions.
          heap[parentIndex] = node;
          heap[index] = parent;
          index = parentIndex;
        } else {
          // The parent is smaller. Exit.
          return;
        }
      }
    }

    function siftDown(heap, node, i) {
      var index = i;
      var length = heap.length;

      while (index < length) {
        var leftIndex = (index + 1) * 2 - 1;
        var left = heap[leftIndex];
        var rightIndex = leftIndex + 1;
        var right = heap[rightIndex]; // If the left or right node is smaller, swap with the smaller of those.

        if (left !== undefined && compare(left, node) < 0) {
          if (right !== undefined && compare(right, left) < 0) {
            heap[index] = right;
            heap[rightIndex] = node;
            index = rightIndex;
          } else {
            heap[index] = left;
            heap[leftIndex] = node;
            index = leftIndex;
          }
        } else if (right !== undefined && compare(right, node) < 0) {
          heap[index] = right;
          heap[rightIndex] = node;
          index = rightIndex;
        } else {
          // Neither child is smaller. Exit.
          return;
        }
      }
    }

    function compare(a, b) {
      // Compare sort index first, then task id.
      var diff = a.sortIndex - b.sortIndex;
      return diff !== 0 ? diff : a.id - b.id;
    } // TODO: Use symbols?


    var NoPriority = 0;
    var ImmediatePriority = 1;
    var UserBlockingPriority = 2;
    var NormalPriority = 3;
    var LowPriority = 4;
    var IdlePriority = 5;
    var runIdCounter = 0;
    var mainThreadIdCounter = 0;
    var profilingStateSize = 4;
    var sharedProfilingBuffer = enableProfiling ? // $FlowFixMe Flow doesn't know about SharedArrayBuffer
    typeof SharedArrayBuffer === 'function' ? new SharedArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : // $FlowFixMe Flow doesn't know about ArrayBuffer
    typeof ArrayBuffer === 'function' ? new ArrayBuffer(profilingStateSize * Int32Array.BYTES_PER_ELEMENT) : null // Don't crash the init path on IE9
    : null;
    var profilingState = enableProfiling && sharedProfilingBuffer !== null ? new Int32Array(sharedProfilingBuffer) : []; // We can't read this but it helps save bytes for null checks

    var PRIORITY = 0;
    var CURRENT_TASK_ID = 1;
    var CURRENT_RUN_ID = 2;
    var QUEUE_SIZE = 3;

    if (enableProfiling) {
      profilingState[PRIORITY] = NoPriority; // This is maintained with a counter, because the size of the priority queue
      // array might include canceled tasks.

      profilingState[QUEUE_SIZE] = 0;
      profilingState[CURRENT_TASK_ID] = 0;
    } // Bytes per element is 4


    var INITIAL_EVENT_LOG_SIZE = 131072;
    var MAX_EVENT_LOG_SIZE = 524288; // Equivalent to 2 megabytes

    var eventLogSize = 0;
    var eventLogBuffer = null;
    var eventLog = null;
    var eventLogIndex = 0;
    var TaskStartEvent = 1;
    var TaskCompleteEvent = 2;
    var TaskErrorEvent = 3;
    var TaskCancelEvent = 4;
    var TaskRunEvent = 5;
    var TaskYieldEvent = 6;
    var SchedulerSuspendEvent = 7;
    var SchedulerResumeEvent = 8;

    function logEvent(entries) {
      if (eventLog !== null) {
        var offset = eventLogIndex;
        eventLogIndex += entries.length;

        if (eventLogIndex + 1 > eventLogSize) {
          eventLogSize *= 2;

          if (eventLogSize > MAX_EVENT_LOG_SIZE) {
            console.error("Scheduler Profiling: Event log exceeded maximum size. Don't " + 'forget to call `stopLoggingProfilingEvents()`.');
            stopLoggingProfilingEvents();
            return;
          }

          var newEventLog = new Int32Array(eventLogSize * 4);
          newEventLog.set(eventLog);
          eventLogBuffer = newEventLog.buffer;
          eventLog = newEventLog;
        }

        eventLog.set(entries, offset);
      }
    }

    function startLoggingProfilingEvents() {
      eventLogSize = INITIAL_EVENT_LOG_SIZE;
      eventLogBuffer = new ArrayBuffer(eventLogSize * 4);
      eventLog = new Int32Array(eventLogBuffer);
      eventLogIndex = 0;
    }

    function stopLoggingProfilingEvents() {
      var buffer = eventLogBuffer;
      eventLogSize = 0;
      eventLogBuffer = null;
      eventLog = null;
      eventLogIndex = 0;
      return buffer;
    }

    function markTaskStart(task, ms) {
      if (enableProfiling) {
        profilingState[QUEUE_SIZE]++;

        if (eventLog !== null) {
          // performance.now returns a float, representing milliseconds. When the
          // event is logged, it's coerced to an int. Convert to microseconds to
          // maintain extra degrees of precision.
          logEvent([TaskStartEvent, ms * 1000, task.id, task.priorityLevel]);
        }
      }
    }

    function markTaskCompleted(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCompleteEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskCanceled(task, ms) {
      if (enableProfiling) {
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskCancelEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskErrored(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[QUEUE_SIZE]--;

        if (eventLog !== null) {
          logEvent([TaskErrorEvent, ms * 1000, task.id]);
        }
      }
    }

    function markTaskRun(task, ms) {
      if (enableProfiling) {
        runIdCounter++;
        profilingState[PRIORITY] = task.priorityLevel;
        profilingState[CURRENT_TASK_ID] = task.id;
        profilingState[CURRENT_RUN_ID] = runIdCounter;

        if (eventLog !== null) {
          logEvent([TaskRunEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markTaskYield(task, ms) {
      if (enableProfiling) {
        profilingState[PRIORITY] = NoPriority;
        profilingState[CURRENT_TASK_ID] = 0;
        profilingState[CURRENT_RUN_ID] = 0;

        if (eventLog !== null) {
          logEvent([TaskYieldEvent, ms * 1000, task.id, runIdCounter]);
        }
      }
    }

    function markSchedulerSuspended(ms) {
      if (enableProfiling) {
        mainThreadIdCounter++;

        if (eventLog !== null) {
          logEvent([SchedulerSuspendEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }

    function markSchedulerUnsuspended(ms) {
      if (enableProfiling) {
        if (eventLog !== null) {
          logEvent([SchedulerResumeEvent, ms * 1000, mainThreadIdCounter]);
        }
      }
    }
    /* eslint-disable no-var */
    // Math.pow(2, 30) - 1
    // 0b111111111111111111111111111111


    var maxSigned31BitInt = 1073741823; // Times out immediately

    var IMMEDIATE_PRIORITY_TIMEOUT = -1; // Eventually times out

    var USER_BLOCKING_PRIORITY = 250;
    var NORMAL_PRIORITY_TIMEOUT = 5000;
    var LOW_PRIORITY_TIMEOUT = 10000; // Never times out

    var IDLE_PRIORITY = maxSigned31BitInt; // Tasks are stored on a min heap

    var taskQueue = [];
    var timerQueue = []; // Incrementing id counter. Used to maintain insertion order.

    var taskIdCounter = 1; // Pausing the scheduler is useful for debugging.

    var isSchedulerPaused = false;
    var currentTask = null;
    var currentPriorityLevel = NormalPriority; // This is set while performing work, to prevent re-entrancy.

    var isPerformingWork = false;
    var isHostCallbackScheduled = false;
    var isHostTimeoutScheduled = false;

    function advanceTimers(currentTime) {
      // Check for tasks that are no longer delayed and add them to the queue.
      var timer = peek(timerQueue);

      while (timer !== null) {
        if (timer.callback === null) {
          // Timer was cancelled.
          pop(timerQueue);
        } else if (timer.startTime <= currentTime) {
          // Timer fired. Transfer to the task queue.
          pop(timerQueue);
          timer.sortIndex = timer.expirationTime;
          push(taskQueue, timer);

          if (enableProfiling) {
            markTaskStart(timer, currentTime);
            timer.isQueued = true;
          }
        } else {
          // Remaining timers are pending.
          return;
        }

        timer = peek(timerQueue);
      }
    }

    function handleTimeout(currentTime) {
      isHostTimeoutScheduled = false;
      advanceTimers(currentTime);

      if (!isHostCallbackScheduled) {
        if (peek(taskQueue) !== null) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        } else {
          var firstTimer = peek(timerQueue);

          if (firstTimer !== null) {
            requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
          }
        }
      }
    }

    function flushWork(hasTimeRemaining, initialTime) {
      if (enableProfiling) {
        markSchedulerUnsuspended(initialTime);
      } // We'll need a host callback the next time work is scheduled.


      isHostCallbackScheduled = false;

      if (isHostTimeoutScheduled) {
        // We scheduled a timeout but it's no longer needed. Cancel it.
        isHostTimeoutScheduled = false;
        cancelHostTimeout();
      }

      isPerformingWork = true;
      var previousPriorityLevel = currentPriorityLevel;

      try {
        if (enableProfiling) {
          try {
            return workLoop(hasTimeRemaining, initialTime);
          } catch (error) {
            if (currentTask !== null) {
              var currentTime = exports.unstable_now();
              markTaskErrored(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            throw error;
          }
        } else {
          // No catch in prod codepath.
          return workLoop(hasTimeRemaining, initialTime);
        }
      } finally {
        currentTask = null;
        currentPriorityLevel = previousPriorityLevel;
        isPerformingWork = false;

        if (enableProfiling) {
          var _currentTime = exports.unstable_now();

          markSchedulerSuspended(_currentTime);
        }
      }
    }

    function workLoop(hasTimeRemaining, initialTime) {
      var currentTime = initialTime;
      advanceTimers(currentTime);
      currentTask = peek(taskQueue);

      while (currentTask !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
        if (currentTask.expirationTime > currentTime && (!hasTimeRemaining || shouldYieldToHost())) {
          // This currentTask hasn't expired, and we've reached the deadline.
          break;
        }

        var callback = currentTask.callback;

        if (callback !== null) {
          currentTask.callback = null;
          currentPriorityLevel = currentTask.priorityLevel;
          var didUserCallbackTimeout = currentTask.expirationTime <= currentTime;
          markTaskRun(currentTask, currentTime);
          var continuationCallback = callback(didUserCallbackTimeout);
          currentTime = exports.unstable_now();

          if (typeof continuationCallback === 'function') {
            currentTask.callback = continuationCallback;
            markTaskYield(currentTask, currentTime);
          } else {
            if (enableProfiling) {
              markTaskCompleted(currentTask, currentTime);
              currentTask.isQueued = false;
            }

            if (currentTask === peek(taskQueue)) {
              pop(taskQueue);
            }
          }

          advanceTimers(currentTime);
        } else {
          pop(taskQueue);
        }

        currentTask = peek(taskQueue);
      } // Return whether there's additional work


      if (currentTask !== null) {
        return true;
      } else {
        var firstTimer = peek(timerQueue);

        if (firstTimer !== null) {
          requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }

        return false;
      }
    }

    function unstable_runWithPriority(priorityLevel, eventHandler) {
      switch (priorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
        case LowPriority:
        case IdlePriority:
          break;

        default:
          priorityLevel = NormalPriority;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_next(eventHandler) {
      var priorityLevel;

      switch (currentPriorityLevel) {
        case ImmediatePriority:
        case UserBlockingPriority:
        case NormalPriority:
          // Shift down to normal priority
          priorityLevel = NormalPriority;
          break;

        default:
          // Anything lower than normal priority should remain at the current level.
          priorityLevel = currentPriorityLevel;
          break;
      }

      var previousPriorityLevel = currentPriorityLevel;
      currentPriorityLevel = priorityLevel;

      try {
        return eventHandler();
      } finally {
        currentPriorityLevel = previousPriorityLevel;
      }
    }

    function unstable_wrapCallback(callback) {
      var parentPriorityLevel = currentPriorityLevel;
      return function () {
        // This is a fork of runWithPriority, inlined for performance.
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = parentPriorityLevel;

        try {
          return callback.apply(this, arguments);
        } finally {
          currentPriorityLevel = previousPriorityLevel;
        }
      };
    }

    function timeoutForPriorityLevel(priorityLevel) {
      switch (priorityLevel) {
        case ImmediatePriority:
          return IMMEDIATE_PRIORITY_TIMEOUT;

        case UserBlockingPriority:
          return USER_BLOCKING_PRIORITY;

        case IdlePriority:
          return IDLE_PRIORITY;

        case LowPriority:
          return LOW_PRIORITY_TIMEOUT;

        case NormalPriority:
        default:
          return NORMAL_PRIORITY_TIMEOUT;
      }
    }

    function unstable_scheduleCallback(priorityLevel, callback, options) {
      var currentTime = exports.unstable_now();
      var startTime;
      var timeout;

      if (typeof options === 'object' && options !== null) {
        var delay = options.delay;

        if (typeof delay === 'number' && delay > 0) {
          startTime = currentTime + delay;
        } else {
          startTime = currentTime;
        }

        timeout = typeof options.timeout === 'number' ? options.timeout : timeoutForPriorityLevel(priorityLevel);
      } else {
        timeout = timeoutForPriorityLevel(priorityLevel);
        startTime = currentTime;
      }

      var expirationTime = startTime + timeout;
      var newTask = {
        id: taskIdCounter++,
        callback: callback,
        priorityLevel: priorityLevel,
        startTime: startTime,
        expirationTime: expirationTime,
        sortIndex: -1
      };

      if (enableProfiling) {
        newTask.isQueued = false;
      }

      if (startTime > currentTime) {
        // This is a delayed task.
        newTask.sortIndex = startTime;
        push(timerQueue, newTask);

        if (peek(taskQueue) === null && newTask === peek(timerQueue)) {
          // All tasks are delayed, and this is the task with the earliest delay.
          if (isHostTimeoutScheduled) {
            // Cancel an existing timeout.
            cancelHostTimeout();
          } else {
            isHostTimeoutScheduled = true;
          } // Schedule a timeout.


          requestHostTimeout(handleTimeout, startTime - currentTime);
        }
      } else {
        newTask.sortIndex = expirationTime;
        push(taskQueue, newTask);

        if (enableProfiling) {
          markTaskStart(newTask, currentTime);
          newTask.isQueued = true;
        } // Schedule a host callback, if needed. If we're already performing work,
        // wait until the next time we yield.


        if (!isHostCallbackScheduled && !isPerformingWork) {
          isHostCallbackScheduled = true;
          requestHostCallback(flushWork);
        }
      }

      return newTask;
    }

    function unstable_pauseExecution() {
      isSchedulerPaused = true;
    }

    function unstable_continueExecution() {
      isSchedulerPaused = false;

      if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;
        requestHostCallback(flushWork);
      }
    }

    function unstable_getFirstCallbackNode() {
      return peek(taskQueue);
    }

    function unstable_cancelCallback(task) {
      if (enableProfiling) {
        if (task.isQueued) {
          var currentTime = exports.unstable_now();
          markTaskCanceled(task, currentTime);
          task.isQueued = false;
        }
      } // Null out the callback to indicate the task has been canceled. (Can't
      // remove from the queue because you can't remove arbitrary nodes from an
      // array based heap, only the first one.)


      task.callback = null;
    }

    function unstable_getCurrentPriorityLevel() {
      return currentPriorityLevel;
    }

    function unstable_shouldYield() {
      var currentTime = exports.unstable_now();
      advanceTimers(currentTime);
      var firstTask = peek(taskQueue);
      return firstTask !== currentTask && currentTask !== null && firstTask !== null && firstTask.callback !== null && firstTask.startTime <= currentTime && firstTask.expirationTime < currentTask.expirationTime || shouldYieldToHost();
    }

    var unstable_requestPaint = requestPaint;
    var unstable_Profiling = enableProfiling ? {
      startLoggingProfilingEvents: startLoggingProfilingEvents,
      stopLoggingProfilingEvents: stopLoggingProfilingEvents,
      sharedProfilingBuffer: sharedProfilingBuffer
    } : null;
    exports.unstable_ImmediatePriority = ImmediatePriority;
    exports.unstable_UserBlockingPriority = UserBlockingPriority;
    exports.unstable_NormalPriority = NormalPriority;
    exports.unstable_IdlePriority = IdlePriority;
    exports.unstable_LowPriority = LowPriority;
    exports.unstable_runWithPriority = unstable_runWithPriority;
    exports.unstable_next = unstable_next;
    exports.unstable_scheduleCallback = unstable_scheduleCallback;
    exports.unstable_cancelCallback = unstable_cancelCallback;
    exports.unstable_wrapCallback = unstable_wrapCallback;
    exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
    exports.unstable_shouldYield = unstable_shouldYield;
    exports.unstable_requestPaint = unstable_requestPaint;
    exports.unstable_continueExecution = unstable_continueExecution;
    exports.unstable_pauseExecution = unstable_pauseExecution;
    exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
    exports.unstable_Profiling = unstable_Profiling;
  })();
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(13);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.18.0
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // Helps identify side effects in render-phase lifecycle hooks and setState
    // reducers by double invoking them in Strict Mode.
    // To preserve the "Pause on caught exceptions" behavior of the debugger, we
    // replay the begin phase of a failed component inside invokeGuardedCallback.
    // Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:
    // Gather advanced timing metrics for Profiler subtrees.
    // Trace which interactions trigger each commit.

    var enableSchedulerTracing = true; // SSR experiments
    // Only used in www builds.
    // Only used in www builds.
    // Disable javascript: URL strings in href for XSS protection.
    // React Fire: prevent the value and checked attributes from syncing
    // with their related DOM properties
    // These APIs will no longer be "unstable" in the upcoming 16.7 release,
    // Control this behavior with a flag to support 16.6 minor releases in the meanwhile.
    // Experimental React Flare event system and event components support.
    // Experimental Host Component support.
    // Experimental Scope support.
    // New API for JSX transforms to target - https://github.com/reactjs/rfcs/pull/107
    // We will enforce mocking scheduler with scheduler/unstable_mock at some point. (v17?)
    // Till then, we warn about the missing mock, but still fallback to a legacy mode compatible version
    // For tests, we flush suspense fallbacks in an act scope;
    // *except* in some of our own tests, where we test incremental loading states.
    // Add a callback property to suspense to notify which promises are currently
    // in the update queue. This allows reporting and tracing of what is causing
    // the user to see a loading state.
    // Also allows hydration callbacks to fire when a dehydrated boundary gets
    // hydrated or deleted.
    // Part of the simplification of React.createElement so we can eventually move
    // from React.createElement to React.jsx
    // https://github.com/reactjs/rfcs/blob/createlement-rfc/text/0000-create-element-changes.md
    // Flag to turn event.target and event.currentTarget in ReactNative from a reactTag to a component instance

    var DEFAULT_THREAD_ID = 0; // Counters used to generate unique IDs.

    var interactionIDCounter = 0;
    var threadIDCounter = 0; // Set of currently traced interactions.
    // Interactions "stack"–
    // Meaning that newly traced interactions are appended to the previously active set.
    // When an interaction goes out of scope, the previous set (if any) is restored.

    exports.__interactionsRef = null; // Listener(s) to notify when interactions begin and end.

    exports.__subscriberRef = null;

    if (enableSchedulerTracing) {
      exports.__interactionsRef = {
        current: new Set()
      };
      exports.__subscriberRef = {
        current: null
      };
    }

    function unstable_clear(callback) {
      if (!enableSchedulerTracing) {
        return callback();
      }

      var prevInteractions = exports.__interactionsRef.current;
      exports.__interactionsRef.current = new Set();

      try {
        return callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;
      }
    }

    function unstable_getCurrent() {
      if (!enableSchedulerTracing) {
        return null;
      } else {
        return exports.__interactionsRef.current;
      }
    }

    function unstable_getThreadID() {
      return ++threadIDCounter;
    }

    function unstable_trace(name, timestamp, callback) {
      var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback();
      }

      var interaction = {
        __count: 1,
        id: interactionIDCounter++,
        name: name,
        timestamp: timestamp
      };
      var prevInteractions = exports.__interactionsRef.current; // Traced interactions should stack/accumulate.
      // To do that, clone the current interactions.
      // The previous set will be restored upon completion.

      var interactions = new Set(prevInteractions);
      interactions.add(interaction);
      exports.__interactionsRef.current = interactions;
      var subscriber = exports.__subscriberRef.current;
      var returnValue;

      try {
        if (subscriber !== null) {
          subscriber.onInteractionTraced(interaction);
        }
      } finally {
        try {
          if (subscriber !== null) {
            subscriber.onWorkStarted(interactions, threadID);
          }
        } finally {
          try {
            returnValue = callback();
          } finally {
            exports.__interactionsRef.current = prevInteractions;

            try {
              if (subscriber !== null) {
                subscriber.onWorkStopped(interactions, threadID);
              }
            } finally {
              interaction.__count--; // If no async work was scheduled for this interaction,
              // Notify subscribers that it's completed.

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            }
          }
        }
      }

      return returnValue;
    }

    function unstable_wrap(callback) {
      var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

      if (!enableSchedulerTracing) {
        return callback;
      }

      var wrappedInteractions = exports.__interactionsRef.current;
      var subscriber = exports.__subscriberRef.current;

      if (subscriber !== null) {
        subscriber.onWorkScheduled(wrappedInteractions, threadID);
      } // Update the pending async work count for the current interactions.
      // Update after calling subscribers in case of error.


      wrappedInteractions.forEach(function (interaction) {
        interaction.__count++;
      });
      var hasRun = false;

      function wrapped() {
        var prevInteractions = exports.__interactionsRef.current;
        exports.__interactionsRef.current = wrappedInteractions;
        subscriber = exports.__subscriberRef.current;

        try {
          var returnValue;

          try {
            if (subscriber !== null) {
              subscriber.onWorkStarted(wrappedInteractions, threadID);
            }
          } finally {
            try {
              returnValue = callback.apply(undefined, arguments);
            } finally {
              exports.__interactionsRef.current = prevInteractions;

              if (subscriber !== null) {
                subscriber.onWorkStopped(wrappedInteractions, threadID);
              }
            }
          }

          return returnValue;
        } finally {
          if (!hasRun) {
            // We only expect a wrapped function to be executed once,
            // But in the event that it's executed more than once–
            // Only decrement the outstanding interaction counts once.
            hasRun = true; // Update pending async counts for all wrapped interactions.
            // If this was the last scheduled async work for any of them,
            // Mark them as completed.

            wrappedInteractions.forEach(function (interaction) {
              interaction.__count--;

              if (subscriber !== null && interaction.__count === 0) {
                subscriber.onInteractionScheduledWorkCompleted(interaction);
              }
            });
          }
        }
      }

      wrapped.cancel = function cancel() {
        subscriber = exports.__subscriberRef.current;

        try {
          if (subscriber !== null) {
            subscriber.onWorkCanceled(wrappedInteractions, threadID);
          }
        } finally {
          // Update pending async counts for all wrapped interactions.
          // If this was the last scheduled async work for any of them,
          // Mark them as completed.
          wrappedInteractions.forEach(function (interaction) {
            interaction.__count--;

            if (subscriber && interaction.__count === 0) {
              subscriber.onInteractionScheduledWorkCompleted(interaction);
            }
          });
        }
      };

      return wrapped;
    }

    var subscribers = null;

    if (enableSchedulerTracing) {
      subscribers = new Set();
    }

    function unstable_subscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.add(subscriber);

        if (subscribers.size === 1) {
          exports.__subscriberRef.current = {
            onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
            onInteractionTraced: onInteractionTraced,
            onWorkCanceled: onWorkCanceled,
            onWorkScheduled: onWorkScheduled,
            onWorkStarted: onWorkStarted,
            onWorkStopped: onWorkStopped
          };
        }
      }
    }

    function unstable_unsubscribe(subscriber) {
      if (enableSchedulerTracing) {
        subscribers.delete(subscriber);

        if (subscribers.size === 0) {
          exports.__subscriberRef.current = null;
        }
      }
    }

    function onInteractionTraced(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionTraced(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onInteractionScheduledWorkCompleted(interaction) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkScheduled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkScheduled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStarted(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStarted(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkStopped(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkStopped(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    function onWorkCanceled(interactions, threadID) {
      var didCatchError = false;
      var caughtError = null;
      subscribers.forEach(function (subscriber) {
        try {
          subscriber.onWorkCanceled(interactions, threadID);
        } catch (error) {
          if (!didCatchError) {
            didCatchError = true;
            caughtError = error;
          }
        }
      });

      if (didCatchError) {
        throw caughtError;
      }
    }

    exports.unstable_clear = unstable_clear;
    exports.unstable_getCurrent = unstable_getCurrent;
    exports.unstable_getThreadID = unstable_getThreadID;
    exports.unstable_trace = unstable_trace;
    exports.unstable_wrap = unstable_wrap;
    exports.unstable_subscribe = unstable_subscribe;
    exports.unstable_unsubscribe = unstable_unsubscribe;
  })();
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "80fa4bcab0351fdccb69c66fb55dcd00.png");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci90cmFjaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci10cmFjaW5nLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWFyY2gvaW5kZXgubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2xvZ28ucG5nIl0sIm5hbWVzIjpbIlNlYXJjaCIsImxvZ28iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImkiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJtYXAiLCJuIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwicyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImtleSIsImNhbGwiLCJwcmludFdhcm5pbmciLCJwcm9jZXNzIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJyZXF1aXJlIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwiaGFzIiwiRnVuY3Rpb24iLCJiaW5kIiwidGV4dCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsIngiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiY29tcG9uZW50TmFtZSIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwibmFtZSIsImV4Iiwic3RhY2siLCJyZXNldFdhcm5pbmdDYWNoZSIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmciLCJlbmFibGVJc0lucHV0UGVuZGluZyIsImVuYWJsZVByb2ZpbGluZyIsInJlcXVlc3RIb3N0Q2FsbGJhY2siLCJyZXF1ZXN0SG9zdFRpbWVvdXQiLCJjYW5jZWxIb3N0VGltZW91dCIsInNob3VsZFlpZWxkVG9Ib3N0IiwicmVxdWVzdFBhaW50Iiwid2luZG93IiwiTWVzc2FnZUNoYW5uZWwiLCJfY2FsbGJhY2siLCJfdGltZW91dElEIiwiX2ZsdXNoQ2FsbGJhY2siLCJjdXJyZW50VGltZSIsInVuc3RhYmxlX25vdyIsImhhc1JlbWFpbmluZ1RpbWUiLCJlIiwic2V0VGltZW91dCIsImluaXRpYWxUaW1lIiwiRGF0ZSIsIm5vdyIsImNiIiwibXMiLCJjbGVhclRpbWVvdXQiLCJ1bnN0YWJsZV9mb3JjZUZyYW1lUmF0ZSIsInBlcmZvcm1hbmNlIiwiX0RhdGUiLCJfc2V0VGltZW91dCIsIl9jbGVhclRpbWVvdXQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIl9pbml0aWFsVGltZSIsImlzTWVzc2FnZUxvb3BSdW5uaW5nIiwic2NoZWR1bGVkSG9zdENhbGxiYWNrIiwidGFza1RpbWVvdXRJRCIsInlpZWxkSW50ZXJ2YWwiLCJkZWFkbGluZSIsIm1heFlpZWxkSW50ZXJ2YWwiLCJuZWVkc1BhaW50IiwibmF2aWdhdG9yIiwic2NoZWR1bGluZyIsImlzSW5wdXRQZW5kaW5nIiwiZnBzIiwiTWF0aCIsImZsb29yIiwicGVyZm9ybVdvcmtVbnRpbERlYWRsaW5lIiwiaGFzVGltZVJlbWFpbmluZyIsImhhc01vcmVXb3JrIiwicG9ydCIsInBvc3RNZXNzYWdlIiwiY2hhbm5lbCIsInBvcnQyIiwicG9ydDEiLCJvbm1lc3NhZ2UiLCJjYWxsYmFjayIsInB1c2giLCJoZWFwIiwibm9kZSIsImluZGV4Iiwic2lmdFVwIiwicGVlayIsImZpcnN0IiwicG9wIiwibGFzdCIsInNpZnREb3duIiwicGFyZW50SW5kZXgiLCJwYXJlbnQiLCJjb21wYXJlIiwibGVmdEluZGV4IiwibGVmdCIsInJpZ2h0SW5kZXgiLCJyaWdodCIsImEiLCJiIiwiZGlmZiIsInNvcnRJbmRleCIsImlkIiwiTm9Qcmlvcml0eSIsIkltbWVkaWF0ZVByaW9yaXR5IiwiVXNlckJsb2NraW5nUHJpb3JpdHkiLCJOb3JtYWxQcmlvcml0eSIsIkxvd1ByaW9yaXR5IiwiSWRsZVByaW9yaXR5IiwicnVuSWRDb3VudGVyIiwibWFpblRocmVhZElkQ291bnRlciIsInByb2ZpbGluZ1N0YXRlU2l6ZSIsInNoYXJlZFByb2ZpbGluZ0J1ZmZlciIsIlNoYXJlZEFycmF5QnVmZmVyIiwiSW50MzJBcnJheSIsIkJZVEVTX1BFUl9FTEVNRU5UIiwiQXJyYXlCdWZmZXIiLCJwcm9maWxpbmdTdGF0ZSIsIlBSSU9SSVRZIiwiQ1VSUkVOVF9UQVNLX0lEIiwiQ1VSUkVOVF9SVU5fSUQiLCJRVUVVRV9TSVpFIiwiSU5JVElBTF9FVkVOVF9MT0dfU0laRSIsIk1BWF9FVkVOVF9MT0dfU0laRSIsImV2ZW50TG9nU2l6ZSIsImV2ZW50TG9nQnVmZmVyIiwiZXZlbnRMb2ciLCJldmVudExvZ0luZGV4IiwiVGFza1N0YXJ0RXZlbnQiLCJUYXNrQ29tcGxldGVFdmVudCIsIlRhc2tFcnJvckV2ZW50IiwiVGFza0NhbmNlbEV2ZW50IiwiVGFza1J1bkV2ZW50IiwiVGFza1lpZWxkRXZlbnQiLCJTY2hlZHVsZXJTdXNwZW5kRXZlbnQiLCJTY2hlZHVsZXJSZXN1bWVFdmVudCIsImxvZ0V2ZW50IiwiZW50cmllcyIsIm9mZnNldCIsInN0b3BMb2dnaW5nUHJvZmlsaW5nRXZlbnRzIiwibmV3RXZlbnRMb2ciLCJzZXQiLCJidWZmZXIiLCJzdGFydExvZ2dpbmdQcm9maWxpbmdFdmVudHMiLCJtYXJrVGFza1N0YXJ0IiwidGFzayIsInByaW9yaXR5TGV2ZWwiLCJtYXJrVGFza0NvbXBsZXRlZCIsIm1hcmtUYXNrQ2FuY2VsZWQiLCJtYXJrVGFza0Vycm9yZWQiLCJtYXJrVGFza1J1biIsIm1hcmtUYXNrWWllbGQiLCJtYXJrU2NoZWR1bGVyU3VzcGVuZGVkIiwibWFya1NjaGVkdWxlclVuc3VzcGVuZGVkIiwibWF4U2lnbmVkMzFCaXRJbnQiLCJJTU1FRElBVEVfUFJJT1JJVFlfVElNRU9VVCIsIlVTRVJfQkxPQ0tJTkdfUFJJT1JJVFkiLCJOT1JNQUxfUFJJT1JJVFlfVElNRU9VVCIsIkxPV19QUklPUklUWV9USU1FT1VUIiwiSURMRV9QUklPUklUWSIsInRhc2tRdWV1ZSIsInRpbWVyUXVldWUiLCJ0YXNrSWRDb3VudGVyIiwiaXNTY2hlZHVsZXJQYXVzZWQiLCJjdXJyZW50VGFzayIsImN1cnJlbnRQcmlvcml0eUxldmVsIiwiaXNQZXJmb3JtaW5nV29yayIsImlzSG9zdENhbGxiYWNrU2NoZWR1bGVkIiwiaXNIb3N0VGltZW91dFNjaGVkdWxlZCIsImFkdmFuY2VUaW1lcnMiLCJ0aW1lciIsInN0YXJ0VGltZSIsImV4cGlyYXRpb25UaW1lIiwiaXNRdWV1ZWQiLCJoYW5kbGVUaW1lb3V0IiwiZmx1c2hXb3JrIiwiZmlyc3RUaW1lciIsInByZXZpb3VzUHJpb3JpdHlMZXZlbCIsIndvcmtMb29wIiwiX2N1cnJlbnRUaW1lIiwiZGlkVXNlckNhbGxiYWNrVGltZW91dCIsImNvbnRpbnVhdGlvbkNhbGxiYWNrIiwidW5zdGFibGVfcnVuV2l0aFByaW9yaXR5IiwiZXZlbnRIYW5kbGVyIiwidW5zdGFibGVfbmV4dCIsInVuc3RhYmxlX3dyYXBDYWxsYmFjayIsInBhcmVudFByaW9yaXR5TGV2ZWwiLCJhcHBseSIsInRpbWVvdXRGb3JQcmlvcml0eUxldmVsIiwidW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayIsIm9wdGlvbnMiLCJ0aW1lb3V0IiwiZGVsYXkiLCJuZXdUYXNrIiwidW5zdGFibGVfcGF1c2VFeGVjdXRpb24iLCJ1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbiIsInVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlIiwidW5zdGFibGVfY2FuY2VsQ2FsbGJhY2siLCJ1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCIsInVuc3RhYmxlX3Nob3VsZFlpZWxkIiwiZmlyc3RUYXNrIiwidW5zdGFibGVfcmVxdWVzdFBhaW50IiwidW5zdGFibGVfUHJvZmlsaW5nIiwidW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHkiLCJ1bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSIsInVuc3RhYmxlX05vcm1hbFByaW9yaXR5IiwidW5zdGFibGVfSWRsZVByaW9yaXR5IiwidW5zdGFibGVfTG93UHJpb3JpdHkiLCJlbmFibGVTY2hlZHVsZXJUcmFjaW5nIiwiREVGQVVMVF9USFJFQURfSUQiLCJpbnRlcmFjdGlvbklEQ291bnRlciIsInRocmVhZElEQ291bnRlciIsIl9faW50ZXJhY3Rpb25zUmVmIiwiX19zdWJzY3JpYmVyUmVmIiwiY3VycmVudCIsIlNldCIsInVuc3RhYmxlX2NsZWFyIiwicHJldkludGVyYWN0aW9ucyIsInVuc3RhYmxlX2dldEN1cnJlbnQiLCJ1bnN0YWJsZV9nZXRUaHJlYWRJRCIsInVuc3RhYmxlX3RyYWNlIiwidGltZXN0YW1wIiwidGhyZWFkSUQiLCJpbnRlcmFjdGlvbiIsIl9fY291bnQiLCJpbnRlcmFjdGlvbnMiLCJhZGQiLCJzdWJzY3JpYmVyIiwicmV0dXJuVmFsdWUiLCJvbkludGVyYWN0aW9uVHJhY2VkIiwib25Xb3JrU3RhcnRlZCIsIm9uV29ya1N0b3BwZWQiLCJvbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZCIsInVuc3RhYmxlX3dyYXAiLCJ3cmFwcGVkSW50ZXJhY3Rpb25zIiwib25Xb3JrU2NoZWR1bGVkIiwiaGFzUnVuIiwid3JhcHBlZCIsImNhbmNlbCIsIm9uV29ya0NhbmNlbGVkIiwic3Vic2NyaWJlcnMiLCJ1bnN0YWJsZV9zdWJzY3JpYmUiLCJzaXplIiwidW5zdGFibGVfdW5zdWJzY3JpYmUiLCJkZWxldGUiLCJkaWRDYXRjaEVycm9yIiwiY2F1Z2h0RXJyb3IiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtR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QXZaRDtBQXdaRCxDOzs7Ozs7QUN0YUQsdUM7Ozs7Ozs7QUNBQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRSIsImZpbGUiOiJzZWFyY2hfMWRhYjUxYzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDE6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFsyLDJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9pbWFnZXMvbG9nby5wbmcnXG5cbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGRlYnVnZ2VyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXRleHRcIj5cbiAgICAgIFNlYXJjaCBUZXh0PGltZyBzcmM9e2xvZ299IC8+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8U2VhcmNoIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTguMFxuICogc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgPSBmYWxzZTtcbnZhciBlbmFibGVJc0lucHV0UGVuZGluZyA9IGZhbHNlO1xudmFyIGVuYWJsZVByb2ZpbGluZyA9IHRydWU7XG5cbnZhciByZXF1ZXN0SG9zdENhbGxiYWNrO1xuXG52YXIgcmVxdWVzdEhvc3RUaW1lb3V0O1xudmFyIGNhbmNlbEhvc3RUaW1lb3V0O1xudmFyIHNob3VsZFlpZWxkVG9Ib3N0O1xudmFyIHJlcXVlc3RQYWludDtcblxuXG5cbmlmICggLy8gSWYgU2NoZWR1bGVyIHJ1bnMgaW4gYSBub24tRE9NIGVudmlyb25tZW50LCBpdCBmYWxscyBiYWNrIHRvIGEgbmFpdmVcbi8vIGltcGxlbWVudGF0aW9uIHVzaW5nIHNldFRpbWVvdXQuXG50eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAvLyBDaGVjayBpZiBNZXNzYWdlQ2hhbm5lbCBpcyBzdXBwb3J0ZWQsIHRvby5cbnR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAvLyBJZiB0aGlzIGFjY2lkZW50YWxseSBnZXRzIGltcG9ydGVkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQsIGUuZy4gSmF2YVNjcmlwdENvcmUsXG4gIC8vIGZhbGxiYWNrIHRvIGEgbmFpdmUgaW1wbGVtZW50YXRpb24uXG4gIHZhciBfY2FsbGJhY2sgPSBudWxsO1xuICB2YXIgX3RpbWVvdXRJRCA9IG51bGw7XG5cbiAgdmFyIF9mbHVzaENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG4gICAgICAgIHZhciBoYXNSZW1haW5pbmdUaW1lID0gdHJ1ZTtcblxuICAgICAgICBfY2FsbGJhY2soaGFzUmVtYWluaW5nVGltZSwgY3VycmVudFRpbWUpO1xuXG4gICAgICAgIF9jYWxsYmFjayA9IG51bGw7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoX2ZsdXNoQ2FsbGJhY2ssIDApO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgaW5pdGlhbFRpbWUgPSBEYXRlLm5vdygpO1xuXG4gIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpIC0gaW5pdGlhbFRpbWU7XG4gIH07XG5cbiAgcmVxdWVzdEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYikge1xuICAgIGlmIChfY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIC8vIFByb3RlY3QgYWdhaW5zdCByZS1lbnRyYW5jeS5cbiAgICAgIHNldFRpbWVvdXQocmVxdWVzdEhvc3RDYWxsYmFjaywgMCwgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FsbGJhY2sgPSBjYjtcbiAgICAgIHNldFRpbWVvdXQoX2ZsdXNoQ2FsbGJhY2ssIDApO1xuICAgIH1cbiAgfTtcblxuICByZXF1ZXN0SG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoY2IsIG1zKSB7XG4gICAgX3RpbWVvdXRJRCA9IHNldFRpbWVvdXQoY2IsIG1zKTtcbiAgfTtcblxuICBjYW5jZWxIb3N0VGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQoX3RpbWVvdXRJRCk7XG4gIH07XG5cbiAgc2hvdWxkWWllbGRUb0hvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJlcXVlc3RQYWludCA9IGV4cG9ydHMudW5zdGFibGVfZm9yY2VGcmFtZVJhdGUgPSBmdW5jdGlvbiAoKSB7fTtcbn0gZWxzZSB7XG4gIC8vIENhcHR1cmUgbG9jYWwgcmVmZXJlbmNlcyB0byBuYXRpdmUgQVBJcywgaW4gY2FzZSBhIHBvbHlmaWxsIG92ZXJyaWRlcyB0aGVtLlxuICB2YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIHZhciBfRGF0ZSA9IHdpbmRvdy5EYXRlO1xuICB2YXIgX3NldFRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dDtcbiAgdmFyIF9jbGVhclRpbWVvdXQgPSB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBUT0RPOiBTY2hlZHVsZXIgbm8gbG9uZ2VyIHJlcXVpcmVzIHRoZXNlIG1ldGhvZHMgdG8gYmUgcG9seWZpbGxlZC4gQnV0XG4gICAgLy8gbWF5YmUgd2Ugd2FudCB0byBjb250aW51ZSB3YXJuaW5nIGlmIHRoZXkgZG9uJ3QgZXhpc3QsIHRvIHByZXNlcnZlIHRoZVxuICAgIC8vIG9wdGlvbiB0byByZWx5IG9uIGl0IGluIHRoZSBmdXR1cmU/XG4gICAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgdmFyIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lOyAvLyBUT0RPOiBSZW1vdmUgZmIubWUgbGlua1xuXG4gICAgaWYgKHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gXCIgKyAnTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSAnICsgJ3BvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxscycpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBcIiArICdNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhICcgKyAncG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vZmIubWUvcmVhY3QtcG9seWZpbGxzJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9pbml0aWFsVGltZSA9IF9EYXRlLm5vdygpO1xuXG4gICAgZXhwb3J0cy51bnN0YWJsZV9ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX0RhdGUubm93KCkgLSBfaW5pdGlhbFRpbWU7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICB2YXIgc2NoZWR1bGVkSG9zdENhbGxiYWNrID0gbnVsbDtcbiAgdmFyIHRhc2tUaW1lb3V0SUQgPSAtMTsgLy8gU2NoZWR1bGVyIHBlcmlvZGljYWxseSB5aWVsZHMgaW4gY2FzZSB0aGVyZSBpcyBvdGhlciB3b3JrIG9uIHRoZSBtYWluXG4gIC8vIHRocmVhZCwgbGlrZSB1c2VyIGV2ZW50cy4gQnkgZGVmYXVsdCwgaXQgeWllbGRzIG11bHRpcGxlIHRpbWVzIHBlciBmcmFtZS5cbiAgLy8gSXQgZG9lcyBub3QgYXR0ZW1wdCB0byBhbGlnbiB3aXRoIGZyYW1lIGJvdW5kYXJpZXMsIHNpbmNlIG1vc3QgdGFza3MgZG9uJ3RcbiAgLy8gbmVlZCB0byBiZSBmcmFtZSBhbGlnbmVkOyBmb3IgdGhvc2UgdGhhdCBkbywgdXNlIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cblxuICB2YXIgeWllbGRJbnRlcnZhbCA9IDU7XG4gIHZhciBkZWFkbGluZSA9IDA7IC8vIFRPRE86IE1ha2UgdGhpcyBjb25maWd1cmFibGVcbiAgLy8gVE9ETzogQWRqdXN0IHRoaXMgYmFzZWQgb24gcHJpb3JpdHk/XG5cbiAgdmFyIG1heFlpZWxkSW50ZXJ2YWwgPSAzMDA7XG4gIHZhciBuZWVkc1BhaW50ID0gZmFsc2U7XG5cbiAgaWYgKGVuYWJsZUlzSW5wdXRQZW5kaW5nICYmIG5hdmlnYXRvciAhPT0gdW5kZWZpbmVkICYmIG5hdmlnYXRvci5zY2hlZHVsaW5nICE9PSB1bmRlZmluZWQgJiYgbmF2aWdhdG9yLnNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBzY2hlZHVsaW5nID0gbmF2aWdhdG9yLnNjaGVkdWxpbmc7XG5cbiAgICBzaG91bGRZaWVsZFRvSG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIGlmIChjdXJyZW50VGltZSA+PSBkZWFkbGluZSkge1xuICAgICAgICAvLyBUaGVyZSdzIG5vIHRpbWUgbGVmdC4gV2UgbWF5IHdhbnQgdG8geWllbGQgY29udHJvbCBvZiB0aGUgbWFpblxuICAgICAgICAvLyB0aHJlYWQsIHNvIHRoZSBicm93c2VyIGNhbiBwZXJmb3JtIGhpZ2ggcHJpb3JpdHkgdGFza3MuIFRoZSBtYWluIG9uZXNcbiAgICAgICAgLy8gYXJlIHBhaW50aW5nIGFuZCB1c2VyIGlucHV0LiBJZiB0aGVyZSdzIGEgcGVuZGluZyBwYWludCBvciBhIHBlbmRpbmdcbiAgICAgICAgLy8gaW5wdXQsIHRoZW4gd2Ugc2hvdWxkIHlpZWxkLiBCdXQgaWYgdGhlcmUncyBuZWl0aGVyLCB0aGVuIHdlIGNhblxuICAgICAgICAvLyB5aWVsZCBsZXNzIG9mdGVuIHdoaWxlIHJlbWFpbmluZyByZXNwb25zaXZlLiBXZSdsbCBldmVudHVhbGx5IHlpZWxkXG4gICAgICAgIC8vIHJlZ2FyZGxlc3MsIHNpbmNlIHRoZXJlIGNvdWxkIGJlIGEgcGVuZGluZyBwYWludCB0aGF0IHdhc24ndFxuICAgICAgICAvLyBhY2NvbXBhbmllZCBieSBhIGNhbGwgdG8gYHJlcXVlc3RQYWludGAsIG9yIG90aGVyIG1haW4gdGhyZWFkIHRhc2tzXG4gICAgICAgIC8vIGxpa2UgbmV0d29yayBldmVudHMuXG4gICAgICAgIGlmIChuZWVkc1BhaW50IHx8IHNjaGVkdWxpbmcuaXNJbnB1dFBlbmRpbmcoKSkge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIGVpdGhlciBhIHBlbmRpbmcgcGFpbnQgb3IgYSBwZW5kaW5nIGlucHV0LlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vIFRoZXJlJ3Mgbm8gcGVuZGluZyBpbnB1dC4gT25seSB5aWVsZCBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBtYXhcbiAgICAgICAgLy8geWllbGQgaW50ZXJ2YWwuXG5cblxuICAgICAgICByZXR1cm4gY3VycmVudFRpbWUgPj0gbWF4WWllbGRJbnRlcnZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZXJlJ3Mgc3RpbGwgdGltZSBsZWZ0IGluIHRoZSBmcmFtZS5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0UGFpbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBuZWVkc1BhaW50ID0gdHJ1ZTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIGBpc0lucHV0UGVuZGluZ2AgaXMgbm90IGF2YWlsYWJsZS4gU2luY2Ugd2UgaGF2ZSBubyB3YXkgb2Yga25vd2luZyBpZlxuICAgIC8vIHRoZXJlJ3MgcGVuZGluZyBpbnB1dCwgYWx3YXlzIHlpZWxkIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lLlxuICAgIHNob3VsZFlpZWxkVG9Ib3N0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGV4cG9ydHMudW5zdGFibGVfbm93KCkgPj0gZGVhZGxpbmU7XG4gICAgfTsgLy8gU2luY2Ugd2UgeWllbGQgZXZlcnkgZnJhbWUgcmVnYXJkbGVzcywgYHJlcXVlc3RQYWludGAgaGFzIG5vIGVmZmVjdC5cblxuXG4gICAgcmVxdWVzdFBhaW50ID0gZnVuY3Rpb24gKCkge307XG4gIH1cblxuICBleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlID0gZnVuY3Rpb24gKGZwcykge1xuICAgIGlmIChmcHMgPCAwIHx8IGZwcyA+IDEyNSkge1xuICAgICAgY29uc29sZS5lcnJvcignZm9yY2VGcmFtZVJhdGUgdGFrZXMgYSBwb3NpdGl2ZSBpbnQgYmV0d2VlbiAwIGFuZCAxMjUsICcgKyAnZm9yY2luZyBmcmFtZXJhdGVzIGhpZ2hlciB0aGFuIDEyNSBmcHMgaXMgbm90IHVuc3VwcG9ydGVkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZwcyA+IDApIHtcbiAgICAgIHlpZWxkSW50ZXJ2YWwgPSBNYXRoLmZsb29yKDEwMDAgLyBmcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXNldCB0aGUgZnJhbWVyYXRlXG4gICAgICB5aWVsZEludGVydmFsID0gNTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBlcmZvcm1Xb3JrVW50aWxEZWFkbGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2NoZWR1bGVkSG9zdENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpOyAvLyBZaWVsZCBhZnRlciBgeWllbGRJbnRlcnZhbGAgbXMsIHJlZ2FyZGxlc3Mgb2Ygd2hlcmUgd2UgYXJlIGluIHRoZSB2c3luY1xuICAgICAgLy8gY3ljbGUuIFRoaXMgbWVhbnMgdGhlcmUncyBhbHdheXMgdGltZSByZW1haW5pbmcgYXQgdGhlIGJlZ2lubmluZyBvZlxuICAgICAgLy8gdGhlIG1lc3NhZ2UgZXZlbnQuXG5cbiAgICAgIGRlYWRsaW5lID0gY3VycmVudFRpbWUgKyB5aWVsZEludGVydmFsO1xuICAgICAgdmFyIGhhc1RpbWVSZW1haW5pbmcgPSB0cnVlO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgaGFzTW9yZVdvcmsgPSBzY2hlZHVsZWRIb3N0Q2FsbGJhY2soaGFzVGltZVJlbWFpbmluZywgY3VycmVudFRpbWUpO1xuXG4gICAgICAgIGlmICghaGFzTW9yZVdvcmspIHtcbiAgICAgICAgICBpc01lc3NhZ2VMb29wUnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUncyBtb3JlIHdvcmssIHNjaGVkdWxlIHRoZSBuZXh0IG1lc3NhZ2UgZXZlbnQgYXQgdGhlIGVuZFxuICAgICAgICAgIC8vIG9mIHRoZSBwcmVjZWRpbmcgb25lLlxuICAgICAgICAgIHBvcnQucG9zdE1lc3NhZ2UobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIGEgc2NoZWR1bGVyIHRhc2sgdGhyb3dzLCBleGl0IHRoZSBjdXJyZW50IGJyb3dzZXIgdGFzayBzbyB0aGVcbiAgICAgICAgLy8gZXJyb3IgY2FuIGJlIG9ic2VydmVkLlxuICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKG51bGwpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9IC8vIFlpZWxkaW5nIHRvIHRoZSBicm93c2VyIHdpbGwgZ2l2ZSBpdCBhIGNoYW5jZSB0byBwYWludCwgc28gd2UgY2FuXG4gICAgLy8gcmVzZXQgdGhpcy5cblxuXG4gICAgbmVlZHNQYWludCA9IGZhbHNlO1xuICB9O1xuXG4gIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gIHZhciBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBwZXJmb3JtV29ya1VudGlsRGVhZGxpbmU7XG5cbiAgcmVxdWVzdEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IGNhbGxiYWNrO1xuXG4gICAgaWYgKCFpc01lc3NhZ2VMb29wUnVubmluZykge1xuICAgICAgaXNNZXNzYWdlTG9vcFJ1bm5pbmcgPSB0cnVlO1xuICAgICAgcG9ydC5wb3N0TWVzc2FnZShudWxsKTtcbiAgICB9XG4gIH07XG5cbiAgcmVxdWVzdEhvc3RUaW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcykge1xuICAgIHRhc2tUaW1lb3V0SUQgPSBfc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsYmFjayhleHBvcnRzLnVuc3RhYmxlX25vdygpKTtcbiAgICB9LCBtcyk7XG4gIH07XG5cbiAgY2FuY2VsSG9zdFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgX2NsZWFyVGltZW91dCh0YXNrVGltZW91dElEKTtcblxuICAgIHRhc2tUaW1lb3V0SUQgPSAtMTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcHVzaChoZWFwLCBub2RlKSB7XG4gIHZhciBpbmRleCA9IGhlYXAubGVuZ3RoO1xuICBoZWFwLnB1c2gobm9kZSk7XG4gIHNpZnRVcChoZWFwLCBub2RlLCBpbmRleCk7XG59XG5mdW5jdGlvbiBwZWVrKGhlYXApIHtcbiAgdmFyIGZpcnN0ID0gaGVhcFswXTtcbiAgcmV0dXJuIGZpcnN0ID09PSB1bmRlZmluZWQgPyBudWxsIDogZmlyc3Q7XG59XG5mdW5jdGlvbiBwb3AoaGVhcCkge1xuICB2YXIgZmlyc3QgPSBoZWFwWzBdO1xuXG4gIGlmIChmaXJzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGxhc3QgPSBoZWFwLnBvcCgpO1xuXG4gICAgaWYgKGxhc3QgIT09IGZpcnN0KSB7XG4gICAgICBoZWFwWzBdID0gbGFzdDtcbiAgICAgIHNpZnREb3duKGhlYXAsIGxhc3QsIDApO1xuICAgIH1cblxuICAgIHJldHVybiBmaXJzdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaWZ0VXAoaGVhcCwgbm9kZSwgaSkge1xuICB2YXIgaW5kZXggPSBpO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIHBhcmVudEluZGV4ID0gTWF0aC5mbG9vcigoaW5kZXggLSAxKSAvIDIpO1xuICAgIHZhciBwYXJlbnQgPSBoZWFwW3BhcmVudEluZGV4XTtcblxuICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKHBhcmVudCwgbm9kZSkgPiAwKSB7XG4gICAgICAvLyBUaGUgcGFyZW50IGlzIGxhcmdlci4gU3dhcCBwb3NpdGlvbnMuXG4gICAgICBoZWFwW3BhcmVudEluZGV4XSA9IG5vZGU7XG4gICAgICBoZWFwW2luZGV4XSA9IHBhcmVudDtcbiAgICAgIGluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBwYXJlbnQgaXMgc21hbGxlci4gRXhpdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2lmdERvd24oaGVhcCwgbm9kZSwgaSkge1xuICB2YXIgaW5kZXggPSBpO1xuICB2YXIgbGVuZ3RoID0gaGVhcC5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGxlZnRJbmRleCA9IChpbmRleCArIDEpICogMiAtIDE7XG4gICAgdmFyIGxlZnQgPSBoZWFwW2xlZnRJbmRleF07XG4gICAgdmFyIHJpZ2h0SW5kZXggPSBsZWZ0SW5kZXggKyAxO1xuICAgIHZhciByaWdodCA9IGhlYXBbcmlnaHRJbmRleF07IC8vIElmIHRoZSBsZWZ0IG9yIHJpZ2h0IG5vZGUgaXMgc21hbGxlciwgc3dhcCB3aXRoIHRoZSBzbWFsbGVyIG9mIHRob3NlLlxuXG4gICAgaWYgKGxlZnQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKGxlZnQsIG5vZGUpIDwgMCkge1xuICAgICAgaWYgKHJpZ2h0ICE9PSB1bmRlZmluZWQgJiYgY29tcGFyZShyaWdodCwgbGVmdCkgPCAwKSB7XG4gICAgICAgIGhlYXBbaW5kZXhdID0gcmlnaHQ7XG4gICAgICAgIGhlYXBbcmlnaHRJbmRleF0gPSBub2RlO1xuICAgICAgICBpbmRleCA9IHJpZ2h0SW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFwW2luZGV4XSA9IGxlZnQ7XG4gICAgICAgIGhlYXBbbGVmdEluZGV4XSA9IG5vZGU7XG4gICAgICAgIGluZGV4ID0gbGVmdEluZGV4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmlnaHQgIT09IHVuZGVmaW5lZCAmJiBjb21wYXJlKHJpZ2h0LCBub2RlKSA8IDApIHtcbiAgICAgIGhlYXBbaW5kZXhdID0gcmlnaHQ7XG4gICAgICBoZWFwW3JpZ2h0SW5kZXhdID0gbm9kZTtcbiAgICAgIGluZGV4ID0gcmlnaHRJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTmVpdGhlciBjaGlsZCBpcyBzbWFsbGVyLiBFeGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgLy8gQ29tcGFyZSBzb3J0IGluZGV4IGZpcnN0LCB0aGVuIHRhc2sgaWQuXG4gIHZhciBkaWZmID0gYS5zb3J0SW5kZXggLSBiLnNvcnRJbmRleDtcbiAgcmV0dXJuIGRpZmYgIT09IDAgPyBkaWZmIDogYS5pZCAtIGIuaWQ7XG59XG5cbi8vIFRPRE86IFVzZSBzeW1ib2xzP1xudmFyIE5vUHJpb3JpdHkgPSAwO1xudmFyIEltbWVkaWF0ZVByaW9yaXR5ID0gMTtcbnZhciBVc2VyQmxvY2tpbmdQcmlvcml0eSA9IDI7XG52YXIgTm9ybWFsUHJpb3JpdHkgPSAzO1xudmFyIExvd1ByaW9yaXR5ID0gNDtcbnZhciBJZGxlUHJpb3JpdHkgPSA1O1xuXG52YXIgcnVuSWRDb3VudGVyID0gMDtcbnZhciBtYWluVGhyZWFkSWRDb3VudGVyID0gMDtcbnZhciBwcm9maWxpbmdTdGF0ZVNpemUgPSA0O1xudmFyIHNoYXJlZFByb2ZpbGluZ0J1ZmZlciA9IGVuYWJsZVByb2ZpbGluZyA/IC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgU2hhcmVkQXJyYXlCdWZmZXJcbnR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBTaGFyZWRBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IC8vICRGbG93Rml4TWUgRmxvdyBkb2Vzbid0IGtub3cgYWJvdXQgQXJyYXlCdWZmZXJcbnR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyA/IG5ldyBBcnJheUJ1ZmZlcihwcm9maWxpbmdTdGF0ZVNpemUgKiBJbnQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKSA6IG51bGwgLy8gRG9uJ3QgY3Jhc2ggdGhlIGluaXQgcGF0aCBvbiBJRTlcbjogbnVsbDtcbnZhciBwcm9maWxpbmdTdGF0ZSA9IGVuYWJsZVByb2ZpbGluZyAmJiBzaGFyZWRQcm9maWxpbmdCdWZmZXIgIT09IG51bGwgPyBuZXcgSW50MzJBcnJheShzaGFyZWRQcm9maWxpbmdCdWZmZXIpIDogW107IC8vIFdlIGNhbid0IHJlYWQgdGhpcyBidXQgaXQgaGVscHMgc2F2ZSBieXRlcyBmb3IgbnVsbCBjaGVja3NcblxudmFyIFBSSU9SSVRZID0gMDtcbnZhciBDVVJSRU5UX1RBU0tfSUQgPSAxO1xudmFyIENVUlJFTlRfUlVOX0lEID0gMjtcbnZhciBRVUVVRV9TSVpFID0gMztcblxuaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5OyAvLyBUaGlzIGlzIG1haW50YWluZWQgd2l0aCBhIGNvdW50ZXIsIGJlY2F1c2UgdGhlIHNpemUgb2YgdGhlIHByaW9yaXR5IHF1ZXVlXG4gIC8vIGFycmF5IG1pZ2h0IGluY2x1ZGUgY2FuY2VsZWQgdGFza3MuXG5cbiAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0gPSAwO1xuICBwcm9maWxpbmdTdGF0ZVtDVVJSRU5UX1RBU0tfSURdID0gMDtcbn0gLy8gQnl0ZXMgcGVyIGVsZW1lbnQgaXMgNFxuXG5cbnZhciBJTklUSUFMX0VWRU5UX0xPR19TSVpFID0gMTMxMDcyO1xudmFyIE1BWF9FVkVOVF9MT0dfU0laRSA9IDUyNDI4ODsgLy8gRXF1aXZhbGVudCB0byAyIG1lZ2FieXRlc1xuXG52YXIgZXZlbnRMb2dTaXplID0gMDtcbnZhciBldmVudExvZ0J1ZmZlciA9IG51bGw7XG52YXIgZXZlbnRMb2cgPSBudWxsO1xudmFyIGV2ZW50TG9nSW5kZXggPSAwO1xudmFyIFRhc2tTdGFydEV2ZW50ID0gMTtcbnZhciBUYXNrQ29tcGxldGVFdmVudCA9IDI7XG52YXIgVGFza0Vycm9yRXZlbnQgPSAzO1xudmFyIFRhc2tDYW5jZWxFdmVudCA9IDQ7XG52YXIgVGFza1J1bkV2ZW50ID0gNTtcbnZhciBUYXNrWWllbGRFdmVudCA9IDY7XG52YXIgU2NoZWR1bGVyU3VzcGVuZEV2ZW50ID0gNztcbnZhciBTY2hlZHVsZXJSZXN1bWVFdmVudCA9IDg7XG5cbmZ1bmN0aW9uIGxvZ0V2ZW50KGVudHJpZXMpIHtcbiAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgdmFyIG9mZnNldCA9IGV2ZW50TG9nSW5kZXg7XG4gICAgZXZlbnRMb2dJbmRleCArPSBlbnRyaWVzLmxlbmd0aDtcblxuICAgIGlmIChldmVudExvZ0luZGV4ICsgMSA+IGV2ZW50TG9nU2l6ZSkge1xuICAgICAgZXZlbnRMb2dTaXplICo9IDI7XG5cbiAgICAgIGlmIChldmVudExvZ1NpemUgPiBNQVhfRVZFTlRfTE9HX1NJWkUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNjaGVkdWxlciBQcm9maWxpbmc6IEV2ZW50IGxvZyBleGNlZWRlZCBtYXhpbXVtIHNpemUuIERvbid0IFwiICsgJ2ZvcmdldCB0byBjYWxsIGBzdG9wTG9nZ2luZ1Byb2ZpbGluZ0V2ZW50cygpYC4nKTtcbiAgICAgICAgc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3RXZlbnRMb2cgPSBuZXcgSW50MzJBcnJheShldmVudExvZ1NpemUgKiA0KTtcbiAgICAgIG5ld0V2ZW50TG9nLnNldChldmVudExvZyk7XG4gICAgICBldmVudExvZ0J1ZmZlciA9IG5ld0V2ZW50TG9nLmJ1ZmZlcjtcbiAgICAgIGV2ZW50TG9nID0gbmV3RXZlbnRMb2c7XG4gICAgfVxuXG4gICAgZXZlbnRMb2cuc2V0KGVudHJpZXMsIG9mZnNldCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRMb2dnaW5nUHJvZmlsaW5nRXZlbnRzKCkge1xuICBldmVudExvZ1NpemUgPSBJTklUSUFMX0VWRU5UX0xPR19TSVpFO1xuICBldmVudExvZ0J1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihldmVudExvZ1NpemUgKiA0KTtcbiAgZXZlbnRMb2cgPSBuZXcgSW50MzJBcnJheShldmVudExvZ0J1ZmZlcik7XG4gIGV2ZW50TG9nSW5kZXggPSAwO1xufVxuZnVuY3Rpb24gc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMoKSB7XG4gIHZhciBidWZmZXIgPSBldmVudExvZ0J1ZmZlcjtcbiAgZXZlbnRMb2dTaXplID0gMDtcbiAgZXZlbnRMb2dCdWZmZXIgPSBudWxsO1xuICBldmVudExvZyA9IG51bGw7XG4gIGV2ZW50TG9nSW5kZXggPSAwO1xuICByZXR1cm4gYnVmZmVyO1xufVxuZnVuY3Rpb24gbWFya1Rhc2tTdGFydCh0YXNrLCBtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0rKztcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgLy8gcGVyZm9ybWFuY2Uubm93IHJldHVybnMgYSBmbG9hdCwgcmVwcmVzZW50aW5nIG1pbGxpc2Vjb25kcy4gV2hlbiB0aGVcbiAgICAgIC8vIGV2ZW50IGlzIGxvZ2dlZCwgaXQncyBjb2VyY2VkIHRvIGFuIGludC4gQ29udmVydCB0byBtaWNyb3NlY29uZHMgdG9cbiAgICAgIC8vIG1haW50YWluIGV4dHJhIGRlZ3JlZXMgb2YgcHJlY2lzaW9uLlxuICAgICAgbG9nRXZlbnQoW1Rhc2tTdGFydEV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWQsIHRhc2sucHJpb3JpdHlMZXZlbF0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1Rhc2tDb21wbGV0ZWQodGFzaywgbXMpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIHByb2ZpbGluZ1N0YXRlW1BSSU9SSVRZXSA9IE5vUHJpb3JpdHk7XG4gICAgcHJvZmlsaW5nU3RhdGVbQ1VSUkVOVF9UQVNLX0lEXSA9IDA7XG4gICAgcHJvZmlsaW5nU3RhdGVbUVVFVUVfU0laRV0tLTtcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1Rhc2tDb21wbGV0ZUV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWRdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrQ2FuY2VsZWQodGFzaywgbXMpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdLS07XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrQ2FuY2VsRXZlbnQsIG1zICogMTAwMCwgdGFzay5pZF0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1Rhc2tFcnJvcmVkKHRhc2ssIG1zKSB7XG4gIGlmIChlbmFibGVQcm9maWxpbmcpIHtcbiAgICBwcm9maWxpbmdTdGF0ZVtQUklPUklUWV0gPSBOb1ByaW9yaXR5O1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSAwO1xuICAgIHByb2ZpbGluZ1N0YXRlW1FVRVVFX1NJWkVdLS07XG5cbiAgICBpZiAoZXZlbnRMb2cgIT09IG51bGwpIHtcbiAgICAgIGxvZ0V2ZW50KFtUYXNrRXJyb3JFdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkXSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBtYXJrVGFza1J1bih0YXNrLCBtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgcnVuSWRDb3VudGVyKys7XG4gICAgcHJvZmlsaW5nU3RhdGVbUFJJT1JJVFldID0gdGFzay5wcmlvcml0eUxldmVsO1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfVEFTS19JRF0gPSB0YXNrLmlkO1xuICAgIHByb2ZpbGluZ1N0YXRlW0NVUlJFTlRfUlVOX0lEXSA9IHJ1bklkQ291bnRlcjtcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1Rhc2tSdW5FdmVudCwgbXMgKiAxMDAwLCB0YXNrLmlkLCBydW5JZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtUYXNrWWllbGQodGFzaywgbXMpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIHByb2ZpbGluZ1N0YXRlW1BSSU9SSVRZXSA9IE5vUHJpb3JpdHk7XG4gICAgcHJvZmlsaW5nU3RhdGVbQ1VSUkVOVF9UQVNLX0lEXSA9IDA7XG4gICAgcHJvZmlsaW5nU3RhdGVbQ1VSUkVOVF9SVU5fSURdID0gMDtcblxuICAgIGlmIChldmVudExvZyAhPT0gbnVsbCkge1xuICAgICAgbG9nRXZlbnQoW1Rhc2tZaWVsZEV2ZW50LCBtcyAqIDEwMDAsIHRhc2suaWQsIHJ1bklkQ291bnRlcl0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gbWFya1NjaGVkdWxlclN1c3BlbmRlZChtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgbWFpblRocmVhZElkQ291bnRlcisrO1xuXG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbU2NoZWR1bGVyU3VzcGVuZEV2ZW50LCBtcyAqIDEwMDAsIG1haW5UaHJlYWRJZENvdW50ZXJdKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtTY2hlZHVsZXJVbnN1c3BlbmRlZChtcykge1xuICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgaWYgKGV2ZW50TG9nICE9PSBudWxsKSB7XG4gICAgICBsb2dFdmVudChbU2NoZWR1bGVyUmVzdW1lRXZlbnQsIG1zICogMTAwMCwgbWFpblRocmVhZElkQ291bnRlcl0pO1xuICAgIH1cbiAgfVxufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbi8vIE1hdGgucG93KDIsIDMwKSAtIDFcbi8vIDBiMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXG5cbnZhciBtYXhTaWduZWQzMUJpdEludCA9IDEwNzM3NDE4MjM7IC8vIFRpbWVzIG91dCBpbW1lZGlhdGVseVxuXG52YXIgSU1NRURJQVRFX1BSSU9SSVRZX1RJTUVPVVQgPSAtMTsgLy8gRXZlbnR1YWxseSB0aW1lcyBvdXRcblxudmFyIFVTRVJfQkxPQ0tJTkdfUFJJT1JJVFkgPSAyNTA7XG52YXIgTk9STUFMX1BSSU9SSVRZX1RJTUVPVVQgPSA1MDAwO1xudmFyIExPV19QUklPUklUWV9USU1FT1VUID0gMTAwMDA7IC8vIE5ldmVyIHRpbWVzIG91dFxuXG52YXIgSURMRV9QUklPUklUWSA9IG1heFNpZ25lZDMxQml0SW50OyAvLyBUYXNrcyBhcmUgc3RvcmVkIG9uIGEgbWluIGhlYXBcblxudmFyIHRhc2tRdWV1ZSA9IFtdO1xudmFyIHRpbWVyUXVldWUgPSBbXTsgLy8gSW5jcmVtZW50aW5nIGlkIGNvdW50ZXIuIFVzZWQgdG8gbWFpbnRhaW4gaW5zZXJ0aW9uIG9yZGVyLlxuXG52YXIgdGFza0lkQ291bnRlciA9IDE7IC8vIFBhdXNpbmcgdGhlIHNjaGVkdWxlciBpcyB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cblxudmFyIGlzU2NoZWR1bGVyUGF1c2VkID0gZmFsc2U7XG52YXIgY3VycmVudFRhc2sgPSBudWxsO1xudmFyIGN1cnJlbnRQcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7IC8vIFRoaXMgaXMgc2V0IHdoaWxlIHBlcmZvcm1pbmcgd29yaywgdG8gcHJldmVudCByZS1lbnRyYW5jeS5cblxudmFyIGlzUGVyZm9ybWluZ1dvcmsgPSBmYWxzZTtcbnZhciBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xudmFyIGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gYWR2YW5jZVRpbWVycyhjdXJyZW50VGltZSkge1xuICAvLyBDaGVjayBmb3IgdGFza3MgdGhhdCBhcmUgbm8gbG9uZ2VyIGRlbGF5ZWQgYW5kIGFkZCB0aGVtIHRvIHRoZSBxdWV1ZS5cbiAgdmFyIHRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICB3aGlsZSAodGltZXIgIT09IG51bGwpIHtcbiAgICBpZiAodGltZXIuY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIC8vIFRpbWVyIHdhcyBjYW5jZWxsZWQuXG4gICAgICBwb3AodGltZXJRdWV1ZSk7XG4gICAgfSBlbHNlIGlmICh0aW1lci5zdGFydFRpbWUgPD0gY3VycmVudFRpbWUpIHtcbiAgICAgIC8vIFRpbWVyIGZpcmVkLiBUcmFuc2ZlciB0byB0aGUgdGFzayBxdWV1ZS5cbiAgICAgIHBvcCh0aW1lclF1ZXVlKTtcbiAgICAgIHRpbWVyLnNvcnRJbmRleCA9IHRpbWVyLmV4cGlyYXRpb25UaW1lO1xuICAgICAgcHVzaCh0YXNrUXVldWUsIHRpbWVyKTtcblxuICAgICAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgICAgICBtYXJrVGFza1N0YXJ0KHRpbWVyLCBjdXJyZW50VGltZSk7XG4gICAgICAgIHRpbWVyLmlzUXVldWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtYWluaW5nIHRpbWVycyBhcmUgcGVuZGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aW1lciA9IHBlZWsodGltZXJRdWV1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlVGltZW91dChjdXJyZW50VGltZSkge1xuICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQpIHtcbiAgICBpZiAocGVlayh0YXNrUXVldWUpICE9PSBudWxsKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0VGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmVxdWVzdEhvc3RUaW1lb3V0KGhhbmRsZVRpbWVvdXQsIGZpcnN0VGltZXIuc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmbHVzaFdvcmsoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIG1hcmtTY2hlZHVsZXJVbnN1c3BlbmRlZChpbml0aWFsVGltZSk7XG4gIH0gLy8gV2UnbGwgbmVlZCBhIGhvc3QgY2FsbGJhY2sgdGhlIG5leHQgdGltZSB3b3JrIGlzIHNjaGVkdWxlZC5cblxuXG4gIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gZmFsc2U7XG5cbiAgaWYgKGlzSG9zdFRpbWVvdXRTY2hlZHVsZWQpIHtcbiAgICAvLyBXZSBzY2hlZHVsZWQgYSB0aW1lb3V0IGJ1dCBpdCdzIG5vIGxvbmdlciBuZWVkZWQuIENhbmNlbCBpdC5cbiAgICBpc0hvc3RUaW1lb3V0U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgY2FuY2VsSG9zdFRpbWVvdXQoKTtcbiAgfVxuXG4gIGlzUGVyZm9ybWluZ1dvcmsgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgdHJ5IHtcbiAgICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgICAgICAgICBtYXJrVGFza0Vycm9yZWQoY3VycmVudFRhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBjdXJyZW50VGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vIGNhdGNoIGluIHByb2QgY29kZXBhdGguXG4gICAgICByZXR1cm4gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgaXNQZXJmb3JtaW5nV29yayA9IGZhbHNlO1xuXG4gICAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgICAgdmFyIF9jdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICAgIG1hcmtTY2hlZHVsZXJTdXNwZW5kZWQoX2N1cnJlbnRUaW1lKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gd29ya0xvb3AoaGFzVGltZVJlbWFpbmluZywgaW5pdGlhbFRpbWUpIHtcbiAgdmFyIGN1cnJlbnRUaW1lID0gaW5pdGlhbFRpbWU7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuICBjdXJyZW50VGFzayA9IHBlZWsodGFza1F1ZXVlKTtcblxuICB3aGlsZSAoY3VycmVudFRhc2sgIT09IG51bGwgJiYgIShlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgJiYgaXNTY2hlZHVsZXJQYXVzZWQpKSB7XG4gICAgaWYgKGN1cnJlbnRUYXNrLmV4cGlyYXRpb25UaW1lID4gY3VycmVudFRpbWUgJiYgKCFoYXNUaW1lUmVtYWluaW5nIHx8IHNob3VsZFlpZWxkVG9Ib3N0KCkpKSB7XG4gICAgICAvLyBUaGlzIGN1cnJlbnRUYXNrIGhhc24ndCBleHBpcmVkLCBhbmQgd2UndmUgcmVhY2hlZCB0aGUgZGVhZGxpbmUuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgY2FsbGJhY2sgPSBjdXJyZW50VGFzay5jYWxsYmFjaztcblxuICAgIGlmIChjYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgY3VycmVudFRhc2suY2FsbGJhY2sgPSBudWxsO1xuICAgICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBjdXJyZW50VGFzay5wcmlvcml0eUxldmVsO1xuICAgICAgdmFyIGRpZFVzZXJDYWxsYmFja1RpbWVvdXQgPSBjdXJyZW50VGFzay5leHBpcmF0aW9uVGltZSA8PSBjdXJyZW50VGltZTtcbiAgICAgIG1hcmtUYXNrUnVuKGN1cnJlbnRUYXNrLCBjdXJyZW50VGltZSk7XG4gICAgICB2YXIgY29udGludWF0aW9uQ2FsbGJhY2sgPSBjYWxsYmFjayhkaWRVc2VyQ2FsbGJhY2tUaW1lb3V0KTtcbiAgICAgIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb250aW51YXRpb25DYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjdXJyZW50VGFzay5jYWxsYmFjayA9IGNvbnRpbnVhdGlvbkNhbGxiYWNrO1xuICAgICAgICBtYXJrVGFza1lpZWxkKGN1cnJlbnRUYXNrLCBjdXJyZW50VGltZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZW5hYmxlUHJvZmlsaW5nKSB7XG4gICAgICAgICAgbWFya1Rhc2tDb21wbGV0ZWQoY3VycmVudFRhc2ssIGN1cnJlbnRUaW1lKTtcbiAgICAgICAgICBjdXJyZW50VGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrID09PSBwZWVrKHRhc2tRdWV1ZSkpIHtcbiAgICAgICAgICBwb3AodGFza1F1ZXVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhZHZhbmNlVGltZXJzKGN1cnJlbnRUaW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wKHRhc2tRdWV1ZSk7XG4gICAgfVxuXG4gICAgY3VycmVudFRhc2sgPSBwZWVrKHRhc2tRdWV1ZSk7XG4gIH0gLy8gUmV0dXJuIHdoZXRoZXIgdGhlcmUncyBhZGRpdGlvbmFsIHdvcmtcblxuXG4gIGlmIChjdXJyZW50VGFzayAhPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaXJzdFRpbWVyID0gcGVlayh0aW1lclF1ZXVlKTtcblxuICAgIGlmIChmaXJzdFRpbWVyICE9PSBudWxsKSB7XG4gICAgICByZXF1ZXN0SG9zdFRpbWVvdXQoaGFuZGxlVGltZW91dCwgZmlyc3RUaW1lci5zdGFydFRpbWUgLSBjdXJyZW50VGltZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShwcmlvcml0eUxldmVsLCBldmVudEhhbmRsZXIpIHtcbiAgc3dpdGNoIChwcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgY2FzZSBMb3dQcmlvcml0eTpcbiAgICBjYXNlIElkbGVQcmlvcml0eTpcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBOb3JtYWxQcmlvcml0eTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmlvcml0eUxldmVsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGV2ZW50SGFuZGxlcigpO1xuICB9IGZpbmFsbHkge1xuICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX25leHQoZXZlbnRIYW5kbGVyKSB7XG4gIHZhciBwcmlvcml0eUxldmVsO1xuXG4gIHN3aXRjaCAoY3VycmVudFByaW9yaXR5TGV2ZWwpIHtcbiAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgY2FzZSBOb3JtYWxQcmlvcml0eTpcbiAgICAgIC8vIFNoaWZ0IGRvd24gdG8gbm9ybWFsIHByaW9yaXR5XG4gICAgICBwcmlvcml0eUxldmVsID0gTm9ybWFsUHJpb3JpdHk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBBbnl0aGluZyBsb3dlciB0aGFuIG5vcm1hbCBwcmlvcml0eSBzaG91bGQgcmVtYWluIGF0IHRoZSBjdXJyZW50IGxldmVsLlxuICAgICAgcHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICB2YXIgcHJldmlvdXNQcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV93cmFwQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgdmFyIHBhcmVudFByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaGlzIGlzIGEgZm9yayBvZiBydW5XaXRoUHJpb3JpdHksIGlubGluZWQgZm9yIHBlcmZvcm1hbmNlLlxuICAgIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHBhcmVudFByaW9yaXR5TGV2ZWw7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJldmlvdXNQcmlvcml0eUxldmVsO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdGltZW91dEZvclByaW9yaXR5TGV2ZWwocHJpb3JpdHlMZXZlbCkge1xuICBzd2l0Y2ggKHByaW9yaXR5TGV2ZWwpIHtcbiAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgICAgcmV0dXJuIElNTUVESUFURV9QUklPUklUWV9USU1FT1VUO1xuXG4gICAgY2FzZSBVc2VyQmxvY2tpbmdQcmlvcml0eTpcbiAgICAgIHJldHVybiBVU0VSX0JMT0NLSU5HX1BSSU9SSVRZO1xuXG4gICAgY2FzZSBJZGxlUHJpb3JpdHk6XG4gICAgICByZXR1cm4gSURMRV9QUklPUklUWTtcblxuICAgIGNhc2UgTG93UHJpb3JpdHk6XG4gICAgICByZXR1cm4gTE9XX1BSSU9SSVRZX1RJTUVPVVQ7XG5cbiAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gTk9STUFMX1BSSU9SSVRZX1RJTUVPVVQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayhwcmlvcml0eUxldmVsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICB2YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICB2YXIgc3RhcnRUaW1lO1xuICB2YXIgdGltZW91dDtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMgIT09IG51bGwpIHtcbiAgICB2YXIgZGVsYXkgPSBvcHRpb25zLmRlbGF5O1xuXG4gICAgaWYgKHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgJiYgZGVsYXkgPiAwKSB7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZSArIGRlbGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICB9XG5cbiAgICB0aW1lb3V0ID0gdHlwZW9mIG9wdGlvbnMudGltZW91dCA9PT0gJ251bWJlcicgPyBvcHRpb25zLnRpbWVvdXQgOiB0aW1lb3V0Rm9yUHJpb3JpdHlMZXZlbChwcmlvcml0eUxldmVsKTtcbiAgfSBlbHNlIHtcbiAgICB0aW1lb3V0ID0gdGltZW91dEZvclByaW9yaXR5TGV2ZWwocHJpb3JpdHlMZXZlbCk7XG4gICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gIH1cblxuICB2YXIgZXhwaXJhdGlvblRpbWUgPSBzdGFydFRpbWUgKyB0aW1lb3V0O1xuICB2YXIgbmV3VGFzayA9IHtcbiAgICBpZDogdGFza0lkQ291bnRlcisrLFxuICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICBwcmlvcml0eUxldmVsOiBwcmlvcml0eUxldmVsLFxuICAgIHN0YXJ0VGltZTogc3RhcnRUaW1lLFxuICAgIGV4cGlyYXRpb25UaW1lOiBleHBpcmF0aW9uVGltZSxcbiAgICBzb3J0SW5kZXg6IC0xXG4gIH07XG5cbiAgaWYgKGVuYWJsZVByb2ZpbGluZykge1xuICAgIG5ld1Rhc2suaXNRdWV1ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChzdGFydFRpbWUgPiBjdXJyZW50VGltZSkge1xuICAgIC8vIFRoaXMgaXMgYSBkZWxheWVkIHRhc2suXG4gICAgbmV3VGFzay5zb3J0SW5kZXggPSBzdGFydFRpbWU7XG4gICAgcHVzaCh0aW1lclF1ZXVlLCBuZXdUYXNrKTtcblxuICAgIGlmIChwZWVrKHRhc2tRdWV1ZSkgPT09IG51bGwgJiYgbmV3VGFzayA9PT0gcGVlayh0aW1lclF1ZXVlKSkge1xuICAgICAgLy8gQWxsIHRhc2tzIGFyZSBkZWxheWVkLCBhbmQgdGhpcyBpcyB0aGUgdGFzayB3aXRoIHRoZSBlYXJsaWVzdCBkZWxheS5cbiAgICAgIGlmIChpc0hvc3RUaW1lb3V0U2NoZWR1bGVkKSB7XG4gICAgICAgIC8vIENhbmNlbCBhbiBleGlzdGluZyB0aW1lb3V0LlxuICAgICAgICBjYW5jZWxIb3N0VGltZW91dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXNIb3N0VGltZW91dFNjaGVkdWxlZCA9IHRydWU7XG4gICAgICB9IC8vIFNjaGVkdWxlIGEgdGltZW91dC5cblxuXG4gICAgICByZXF1ZXN0SG9zdFRpbWVvdXQoaGFuZGxlVGltZW91dCwgc3RhcnRUaW1lIC0gY3VycmVudFRpbWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBuZXdUYXNrLnNvcnRJbmRleCA9IGV4cGlyYXRpb25UaW1lO1xuICAgIHB1c2godGFza1F1ZXVlLCBuZXdUYXNrKTtcblxuICAgIGlmIChlbmFibGVQcm9maWxpbmcpIHtcbiAgICAgIG1hcmtUYXNrU3RhcnQobmV3VGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgbmV3VGFzay5pc1F1ZXVlZCA9IHRydWU7XG4gICAgfSAvLyBTY2hlZHVsZSBhIGhvc3QgY2FsbGJhY2ssIGlmIG5lZWRlZC4gSWYgd2UncmUgYWxyZWFkeSBwZXJmb3JtaW5nIHdvcmssXG4gICAgLy8gd2FpdCB1bnRpbCB0aGUgbmV4dCB0aW1lIHdlIHlpZWxkLlxuXG5cbiAgICBpZiAoIWlzSG9zdENhbGxiYWNrU2NoZWR1bGVkICYmICFpc1BlcmZvcm1pbmdXb3JrKSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld1Rhc2s7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uKCkge1xuICBpc1NjaGVkdWxlclBhdXNlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uKCkge1xuICBpc1NjaGVkdWxlclBhdXNlZCA9IGZhbHNlO1xuXG4gIGlmICghaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgJiYgIWlzUGVyZm9ybWluZ1dvcmspIHtcbiAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IHRydWU7XG4gICAgcmVxdWVzdEhvc3RDYWxsYmFjayhmbHVzaFdvcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlKCkge1xuICByZXR1cm4gcGVlayh0YXNrUXVldWUpO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9jYW5jZWxDYWxsYmFjayh0YXNrKSB7XG4gIGlmIChlbmFibGVQcm9maWxpbmcpIHtcbiAgICBpZiAodGFzay5pc1F1ZXVlZCkge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcbiAgICAgIG1hcmtUYXNrQ2FuY2VsZWQodGFzaywgY3VycmVudFRpbWUpO1xuICAgICAgdGFzay5pc1F1ZXVlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSAvLyBOdWxsIG91dCB0aGUgY2FsbGJhY2sgdG8gaW5kaWNhdGUgdGhlIHRhc2sgaGFzIGJlZW4gY2FuY2VsZWQuIChDYW4ndFxuICAvLyByZW1vdmUgZnJvbSB0aGUgcXVldWUgYmVjYXVzZSB5b3UgY2FuJ3QgcmVtb3ZlIGFyYml0cmFyeSBub2RlcyBmcm9tIGFuXG4gIC8vIGFycmF5IGJhc2VkIGhlYXAsIG9ubHkgdGhlIGZpcnN0IG9uZS4pXG5cblxuICB0YXNrLmNhbGxiYWNrID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwoKSB7XG4gIHJldHVybiBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc2hvdWxkWWllbGQoKSB7XG4gIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG4gIGFkdmFuY2VUaW1lcnMoY3VycmVudFRpbWUpO1xuICB2YXIgZmlyc3RUYXNrID0gcGVlayh0YXNrUXVldWUpO1xuICByZXR1cm4gZmlyc3RUYXNrICE9PSBjdXJyZW50VGFzayAmJiBjdXJyZW50VGFzayAhPT0gbnVsbCAmJiBmaXJzdFRhc2sgIT09IG51bGwgJiYgZmlyc3RUYXNrLmNhbGxiYWNrICE9PSBudWxsICYmIGZpcnN0VGFzay5zdGFydFRpbWUgPD0gY3VycmVudFRpbWUgJiYgZmlyc3RUYXNrLmV4cGlyYXRpb25UaW1lIDwgY3VycmVudFRhc2suZXhwaXJhdGlvblRpbWUgfHwgc2hvdWxkWWllbGRUb0hvc3QoKTtcbn1cblxudmFyIHVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHJlcXVlc3RQYWludDtcbnZhciB1bnN0YWJsZV9Qcm9maWxpbmcgPSBlbmFibGVQcm9maWxpbmcgPyB7XG4gIHN0YXJ0TG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RhcnRMb2dnaW5nUHJvZmlsaW5nRXZlbnRzLFxuICBzdG9wTG9nZ2luZ1Byb2ZpbGluZ0V2ZW50czogc3RvcExvZ2dpbmdQcm9maWxpbmdFdmVudHMsXG4gIHNoYXJlZFByb2ZpbGluZ0J1ZmZlcjogc2hhcmVkUHJvZmlsaW5nQnVmZmVyXG59IDogbnVsbDtcblxuZXhwb3J0cy51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSA9IEltbWVkaWF0ZVByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSA9IFVzZXJCbG9ja2luZ1ByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSA9IE5vcm1hbFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9JZGxlUHJpb3JpdHkgPSBJZGxlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0xvd1ByaW9yaXR5ID0gTG93UHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSA9IHVuc3RhYmxlX3J1bldpdGhQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfbmV4dCA9IHVuc3RhYmxlX25leHQ7XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2sgPSB1bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrO1xuZXhwb3J0cy51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayA9IHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrO1xuZXhwb3J0cy51bnN0YWJsZV93cmFwQ2FsbGJhY2sgPSB1bnN0YWJsZV93cmFwQ2FsbGJhY2s7XG5leHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsID0gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw7XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkID0gdW5zdGFibGVfc2hvdWxkWWllbGQ7XG5leHBvcnRzLnVuc3RhYmxlX3JlcXVlc3RQYWludCA9IHVuc3RhYmxlX3JlcXVlc3RQYWludDtcbmV4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb24gPSB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb24gPSB1bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUgPSB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZTtcbmV4cG9ydHMudW5zdGFibGVfUHJvZmlsaW5nID0gdW5zdGFibGVfUHJvZmlsaW5nO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci10cmFjaW5nLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci10cmFjaW5nLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTguMFxuICogc2NoZWR1bGVyLXRyYWNpbmcuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuLy8gSGVscHMgaWRlbnRpZnkgc2lkZSBlZmZlY3RzIGluIHJlbmRlci1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlXG4vLyByZWR1Y2VycyBieSBkb3VibGUgaW52b2tpbmcgdGhlbSBpbiBTdHJpY3QgTW9kZS5cblxuIC8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuIC8vIFdhcm4gYWJvdXQgZGVwcmVjYXRlZCwgYXN5bmMtdW5zYWZlIGxpZmVjeWNsZXM7IHJlbGF0ZXMgdG8gUkZDICM2OlxuXG4gLy8gR2F0aGVyIGFkdmFuY2VkIHRpbWluZyBtZXRyaWNzIGZvciBQcm9maWxlciBzdWJ0cmVlcy5cblxuIC8vIFRyYWNlIHdoaWNoIGludGVyYWN0aW9ucyB0cmlnZ2VyIGVhY2ggY29tbWl0LlxuXG52YXIgZW5hYmxlU2NoZWR1bGVyVHJhY2luZyA9IHRydWU7IC8vIFNTUiBleHBlcmltZW50c1xuXG5cbiAvLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cblxuIC8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG4gLy8gRGlzYWJsZSBqYXZhc2NyaXB0OiBVUkwgc3RyaW5ncyBpbiBocmVmIGZvciBYU1MgcHJvdGVjdGlvbi5cblxuIC8vIFJlYWN0IEZpcmU6IHByZXZlbnQgdGhlIHZhbHVlIGFuZCBjaGVja2VkIGF0dHJpYnV0ZXMgZnJvbSBzeW5jaW5nXG4vLyB3aXRoIHRoZWlyIHJlbGF0ZWQgRE9NIHByb3BlcnRpZXNcblxuIC8vIFRoZXNlIEFQSXMgd2lsbCBubyBsb25nZXIgYmUgXCJ1bnN0YWJsZVwiIGluIHRoZSB1cGNvbWluZyAxNi43IHJlbGVhc2UsXG4vLyBDb250cm9sIHRoaXMgYmVoYXZpb3Igd2l0aCBhIGZsYWcgdG8gc3VwcG9ydCAxNi42IG1pbm9yIHJlbGVhc2VzIGluIHRoZSBtZWFud2hpbGUuXG5cblxuIC8vIEV4cGVyaW1lbnRhbCBSZWFjdCBGbGFyZSBldmVudCBzeXN0ZW0gYW5kIGV2ZW50IGNvbXBvbmVudHMgc3VwcG9ydC5cblxuIC8vIEV4cGVyaW1lbnRhbCBIb3N0IENvbXBvbmVudCBzdXBwb3J0LlxuXG4gLy8gRXhwZXJpbWVudGFsIFNjb3BlIHN1cHBvcnQuXG5cbiAvLyBOZXcgQVBJIGZvciBKU1ggdHJhbnNmb3JtcyB0byB0YXJnZXQgLSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG5cbiAvLyBXZSB3aWxsIGVuZm9yY2UgbW9ja2luZyBzY2hlZHVsZXIgd2l0aCBzY2hlZHVsZXIvdW5zdGFibGVfbW9jayBhdCBzb21lIHBvaW50LiAodjE3Pylcbi8vIFRpbGwgdGhlbiwgd2Ugd2FybiBhYm91dCB0aGUgbWlzc2luZyBtb2NrLCBidXQgc3RpbGwgZmFsbGJhY2sgdG8gYSBsZWdhY3kgbW9kZSBjb21wYXRpYmxlIHZlcnNpb25cblxuIC8vIEZvciB0ZXN0cywgd2UgZmx1c2ggc3VzcGVuc2UgZmFsbGJhY2tzIGluIGFuIGFjdCBzY29wZTtcbi8vICpleGNlcHQqIGluIHNvbWUgb2Ygb3VyIG93biB0ZXN0cywgd2hlcmUgd2UgdGVzdCBpbmNyZW1lbnRhbCBsb2FkaW5nIHN0YXRlcy5cblxuIC8vIEFkZCBhIGNhbGxiYWNrIHByb3BlcnR5IHRvIHN1c3BlbnNlIHRvIG5vdGlmeSB3aGljaCBwcm9taXNlcyBhcmUgY3VycmVudGx5XG4vLyBpbiB0aGUgdXBkYXRlIHF1ZXVlLiBUaGlzIGFsbG93cyByZXBvcnRpbmcgYW5kIHRyYWNpbmcgb2Ygd2hhdCBpcyBjYXVzaW5nXG4vLyB0aGUgdXNlciB0byBzZWUgYSBsb2FkaW5nIHN0YXRlLlxuLy8gQWxzbyBhbGxvd3MgaHlkcmF0aW9uIGNhbGxiYWNrcyB0byBmaXJlIHdoZW4gYSBkZWh5ZHJhdGVkIGJvdW5kYXJ5IGdldHNcbi8vIGh5ZHJhdGVkIG9yIGRlbGV0ZWQuXG5cbiAvLyBQYXJ0IG9mIHRoZSBzaW1wbGlmaWNhdGlvbiBvZiBSZWFjdC5jcmVhdGVFbGVtZW50IHNvIHdlIGNhbiBldmVudHVhbGx5IG1vdmVcbi8vIGZyb20gUmVhY3QuY3JlYXRlRWxlbWVudCB0byBSZWFjdC5qc3hcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvYmxvYi9jcmVhdGVsZW1lbnQtcmZjL3RleHQvMDAwMC1jcmVhdGUtZWxlbWVudC1jaGFuZ2VzLm1kXG5cblxuXG5cblxuIC8vIEZsYWcgdG8gdHVybiBldmVudC50YXJnZXQgYW5kIGV2ZW50LmN1cnJlbnRUYXJnZXQgaW4gUmVhY3ROYXRpdmUgZnJvbSBhIHJlYWN0VGFnIHRvIGEgY29tcG9uZW50IGluc3RhbmNlXG5cbnZhciBERUZBVUxUX1RIUkVBRF9JRCA9IDA7IC8vIENvdW50ZXJzIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcy5cblxudmFyIGludGVyYWN0aW9uSURDb3VudGVyID0gMDtcbnZhciB0aHJlYWRJRENvdW50ZXIgPSAwOyAvLyBTZXQgb2YgY3VycmVudGx5IHRyYWNlZCBpbnRlcmFjdGlvbnMuXG4vLyBJbnRlcmFjdGlvbnMgXCJzdGFja1wi4oCTXG4vLyBNZWFuaW5nIHRoYXQgbmV3bHkgdHJhY2VkIGludGVyYWN0aW9ucyBhcmUgYXBwZW5kZWQgdG8gdGhlIHByZXZpb3VzbHkgYWN0aXZlIHNldC5cbi8vIFdoZW4gYW4gaW50ZXJhY3Rpb24gZ29lcyBvdXQgb2Ygc2NvcGUsIHRoZSBwcmV2aW91cyBzZXQgKGlmIGFueSkgaXMgcmVzdG9yZWQuXG5cbmV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYgPSBudWxsOyAvLyBMaXN0ZW5lcihzKSB0byBub3RpZnkgd2hlbiBpbnRlcmFjdGlvbnMgYmVnaW4gYW5kIGVuZC5cblxuZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYgPSBudWxsO1xuXG5pZiAoZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmID0ge1xuICAgIGN1cnJlbnQ6IG5ldyBTZXQoKVxuICB9O1xuICBleHBvcnRzLl9fc3Vic2NyaWJlclJlZiA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NsZWFyKGNhbGxiYWNrKSB7XG4gIGlmICghZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbiAgdmFyIHByZXZJbnRlcmFjdGlvbnMgPSBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7XG4gIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IG5ldyBTZXQoKTtcblxuICB0cnkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9IGZpbmFsbHkge1xuICAgIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IHByZXZJbnRlcmFjdGlvbnM7XG4gIH1cbn1cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEN1cnJlbnQoKSB7XG4gIGlmICghZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7XG4gIH1cbn1cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldFRocmVhZElEKCkge1xuICByZXR1cm4gKyt0aHJlYWRJRENvdW50ZXI7XG59XG5mdW5jdGlvbiB1bnN0YWJsZV90cmFjZShuYW1lLCB0aW1lc3RhbXAsIGNhbGxiYWNrKSB7XG4gIHZhciB0aHJlYWRJRCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogREVGQVVMVF9USFJFQURfSUQ7XG5cbiAgaWYgKCFlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cblxuICB2YXIgaW50ZXJhY3Rpb24gPSB7XG4gICAgX19jb3VudDogMSxcbiAgICBpZDogaW50ZXJhY3Rpb25JRENvdW50ZXIrKyxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHRpbWVzdGFtcDogdGltZXN0YW1wXG4gIH07XG4gIHZhciBwcmV2SW50ZXJhY3Rpb25zID0gZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50OyAvLyBUcmFjZWQgaW50ZXJhY3Rpb25zIHNob3VsZCBzdGFjay9hY2N1bXVsYXRlLlxuICAvLyBUbyBkbyB0aGF0LCBjbG9uZSB0aGUgY3VycmVudCBpbnRlcmFjdGlvbnMuXG4gIC8vIFRoZSBwcmV2aW91cyBzZXQgd2lsbCBiZSByZXN0b3JlZCB1cG9uIGNvbXBsZXRpb24uXG5cbiAgdmFyIGludGVyYWN0aW9ucyA9IG5ldyBTZXQocHJldkludGVyYWN0aW9ucyk7XG4gIGludGVyYWN0aW9ucy5hZGQoaW50ZXJhY3Rpb24pO1xuICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQgPSBpbnRlcmFjdGlvbnM7XG4gIHZhciBzdWJzY3JpYmVyID0gZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudDtcbiAgdmFyIHJldHVyblZhbHVlO1xuXG4gIHRyeSB7XG4gICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblRyYWNlZChpbnRlcmFjdGlvbik7XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzY3JpYmVyLm9uV29ya1N0YXJ0ZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVyblZhbHVlID0gY2FsbGJhY2soKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IHByZXZJbnRlcmFjdGlvbnM7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbldvcmtTdG9wcGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpbnRlcmFjdGlvbi5fX2NvdW50LS07IC8vIElmIG5vIGFzeW5jIHdvcmsgd2FzIHNjaGVkdWxlZCBmb3IgdGhpcyBpbnRlcmFjdGlvbixcbiAgICAgICAgICAvLyBOb3RpZnkgc3Vic2NyaWJlcnMgdGhhdCBpdCdzIGNvbXBsZXRlZC5cblxuICAgICAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsICYmIGludGVyYWN0aW9uLl9fY291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQoaW50ZXJhY3Rpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXR1cm5WYWx1ZTtcbn1cbmZ1bmN0aW9uIHVuc3RhYmxlX3dyYXAoY2FsbGJhY2spIHtcbiAgdmFyIHRocmVhZElEID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBERUZBVUxUX1RIUkVBRF9JRDtcblxuICBpZiAoIWVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH1cblxuICB2YXIgd3JhcHBlZEludGVyYWN0aW9ucyA9IGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudDtcbiAgdmFyIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuXG4gIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgc3Vic2NyaWJlci5vbldvcmtTY2hlZHVsZWQod3JhcHBlZEludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICB9IC8vIFVwZGF0ZSB0aGUgcGVuZGluZyBhc3luYyB3b3JrIGNvdW50IGZvciB0aGUgY3VycmVudCBpbnRlcmFjdGlvbnMuXG4gIC8vIFVwZGF0ZSBhZnRlciBjYWxsaW5nIHN1YnNjcmliZXJzIGluIGNhc2Ugb2YgZXJyb3IuXG5cblxuICB3cmFwcGVkSW50ZXJhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7XG4gICAgaW50ZXJhY3Rpb24uX19jb3VudCsrO1xuICB9KTtcbiAgdmFyIGhhc1J1biA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZWQoKSB7XG4gICAgdmFyIHByZXZJbnRlcmFjdGlvbnMgPSBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7XG4gICAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50ID0gd3JhcHBlZEludGVyYWN0aW9ucztcbiAgICBzdWJzY3JpYmVyID0gZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudDtcblxuICAgIHRyeSB7XG4gICAgICB2YXIgcmV0dXJuVmFsdWU7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5vbldvcmtTdGFydGVkKHdyYXBwZWRJbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgICAgfVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQgPSBwcmV2SW50ZXJhY3Rpb25zO1xuXG4gICAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIub25Xb3JrU3RvcHBlZCh3cmFwcGVkSW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKCFoYXNSdW4pIHtcbiAgICAgICAgLy8gV2Ugb25seSBleHBlY3QgYSB3cmFwcGVkIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIG9uY2UsXG4gICAgICAgIC8vIEJ1dCBpbiB0aGUgZXZlbnQgdGhhdCBpdCdzIGV4ZWN1dGVkIG1vcmUgdGhhbiBvbmNl4oCTXG4gICAgICAgIC8vIE9ubHkgZGVjcmVtZW50IHRoZSBvdXRzdGFuZGluZyBpbnRlcmFjdGlvbiBjb3VudHMgb25jZS5cbiAgICAgICAgaGFzUnVuID0gdHJ1ZTsgLy8gVXBkYXRlIHBlbmRpbmcgYXN5bmMgY291bnRzIGZvciBhbGwgd3JhcHBlZCBpbnRlcmFjdGlvbnMuXG4gICAgICAgIC8vIElmIHRoaXMgd2FzIHRoZSBsYXN0IHNjaGVkdWxlZCBhc3luYyB3b3JrIGZvciBhbnkgb2YgdGhlbSxcbiAgICAgICAgLy8gTWFyayB0aGVtIGFzIGNvbXBsZXRlZC5cblxuICAgICAgICB3cmFwcGVkSW50ZXJhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7XG4gICAgICAgICAgaW50ZXJhY3Rpb24uX19jb3VudC0tO1xuXG4gICAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwgJiYgaW50ZXJhY3Rpb24uX19jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3cmFwcGVkLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBzdWJzY3JpYmVyID0gZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudDtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICBzdWJzY3JpYmVyLm9uV29ya0NhbmNlbGVkKHdyYXBwZWRJbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gVXBkYXRlIHBlbmRpbmcgYXN5bmMgY291bnRzIGZvciBhbGwgd3JhcHBlZCBpbnRlcmFjdGlvbnMuXG4gICAgICAvLyBJZiB0aGlzIHdhcyB0aGUgbGFzdCBzY2hlZHVsZWQgYXN5bmMgd29yayBmb3IgYW55IG9mIHRoZW0sXG4gICAgICAvLyBNYXJrIHRoZW0gYXMgY29tcGxldGVkLlxuICAgICAgd3JhcHBlZEludGVyYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnRlcmFjdGlvbikge1xuICAgICAgICBpbnRlcmFjdGlvbi5fX2NvdW50LS07XG5cbiAgICAgICAgaWYgKHN1YnNjcmliZXIgJiYgaW50ZXJhY3Rpb24uX19jb3VudCA9PT0gMCkge1xuICAgICAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQoaW50ZXJhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbnZhciBzdWJzY3JpYmVycyA9IG51bGw7XG5cbmlmIChlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gIHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9zdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICBpZiAoZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcblxuICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG4gICAgICBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICBvbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZDogb25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQsXG4gICAgICAgIG9uSW50ZXJhY3Rpb25UcmFjZWQ6IG9uSW50ZXJhY3Rpb25UcmFjZWQsXG4gICAgICAgIG9uV29ya0NhbmNlbGVkOiBvbldvcmtDYW5jZWxlZCxcbiAgICAgICAgb25Xb3JrU2NoZWR1bGVkOiBvbldvcmtTY2hlZHVsZWQsXG4gICAgICAgIG9uV29ya1N0YXJ0ZWQ6IG9uV29ya1N0YXJ0ZWQsXG4gICAgICAgIG9uV29ya1N0b3BwZWQ6IG9uV29ya1N0b3BwZWRcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB1bnN0YWJsZV91bnN1YnNjcmliZShzdWJzY3JpYmVyKSB7XG4gIGlmIChlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gICAgc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xuXG4gICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDApIHtcbiAgICAgIGV4cG9ydHMuX19zdWJzY3JpYmVyUmVmLmN1cnJlbnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvbkludGVyYWN0aW9uVHJhY2VkKGludGVyYWN0aW9uKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uVHJhY2VkKGludGVyYWN0aW9uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbikge1xuICB2YXIgZGlkQ2F0Y2hFcnJvciA9IGZhbHNlO1xuICB2YXIgY2F1Z2h0RXJyb3IgPSBudWxsO1xuICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQoaW50ZXJhY3Rpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uV29ya1NjaGVkdWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbldvcmtTY2hlZHVsZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghZGlkQ2F0Y2hFcnJvcikge1xuICAgICAgICBkaWRDYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaWRDYXRjaEVycm9yKSB7XG4gICAgdGhyb3cgY2F1Z2h0RXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Xb3JrU3RhcnRlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbldvcmtTdGFydGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uV29ya1N0b3BwZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCkge1xuICB2YXIgZGlkQ2F0Y2hFcnJvciA9IGZhbHNlO1xuICB2YXIgY2F1Z2h0RXJyb3IgPSBudWxsO1xuICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN1YnNjcmliZXIub25Xb3JrU3RvcHBlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbldvcmtDYW5jZWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG4gIHN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICB0cnkge1xuICAgICAgc3Vic2NyaWJlci5vbldvcmtDYW5jZWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5leHBvcnRzLnVuc3RhYmxlX2NsZWFyID0gdW5zdGFibGVfY2xlYXI7XG5leHBvcnRzLnVuc3RhYmxlX2dldEN1cnJlbnQgPSB1bnN0YWJsZV9nZXRDdXJyZW50O1xuZXhwb3J0cy51bnN0YWJsZV9nZXRUaHJlYWRJRCA9IHVuc3RhYmxlX2dldFRocmVhZElEO1xuZXhwb3J0cy51bnN0YWJsZV90cmFjZSA9IHVuc3RhYmxlX3RyYWNlO1xuZXhwb3J0cy51bnN0YWJsZV93cmFwID0gdW5zdGFibGVfd3JhcDtcbmV4cG9ydHMudW5zdGFibGVfc3Vic2NyaWJlID0gdW5zdGFibGVfc3Vic2NyaWJlO1xuZXhwb3J0cy51bnN0YWJsZV91bnN1YnNjcmliZSA9IHVuc3RhYmxlX3Vuc3Vic2NyaWJlO1xuICB9KSgpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjgwZmE0YmNhYjAzNTFmZGNjYjY5YzY2ZmI1NWRjZDAwLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=