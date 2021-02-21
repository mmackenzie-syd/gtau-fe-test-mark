module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/listings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/listings.js":
/*!*******************************!*\
  !*** ./pages/api/listings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar shuffle = __webpack_require__(/*! shuffle-array */ \"shuffle-array\");\n\nconst data = [{\n  title: \"2005 Ferrari F430 Convertible\",\n  description: \"We are proud to offer one of the rarest modern-day Ferrari's in existence today.There are only approximately 130 RIGHT HAND DRIVE 6 SPEED GATED MANUAL F430 SPIDERS IN THE WORLD\",\n  imgUrl: \"/img/ferrari01.webp\",\n  price: 299999,\n  location: \"Sydney, NSW\"\n}, {\n  title: \"2006 Ferrari F430 Spider Black 6 Speed Formula One Convertible\",\n  description: \"Traralgon Car City is located in Victoria, 1.5 hrs from Melbourne down the South Eastern freeway. We are the largest non-franchise dealership in the Gippsland Region, locally owned and operated for over 30 years. Our team have the knowledge and the expertise to help you find the right car to perfectly suit your needs.\",\n  imgUrl: \"/img/ferrari02.webp\",\n  price: 249990,\n  location: \"Taralgon, VIC\"\n}, {\n  title: \"2000 Ferrari 360 Modena F1 Blue 6 Speed Seq Manual Auto-Clutch Coupe\",\n  description: \"This Magnificent car is one for the collector, becoming harder to find in this condition this is definitely a rare car. It has always been serviced and maintained by Ferrari by its single owner and has undoubtedly been loved. It has its genuine\",\n  imgUrl: \"/img/ferrari03.webp\",\n  price: 148888,\n  location: \"Perth, WA\"\n}, {\n  title: \"1979 Ferrari 308 GTB Red 5 Speed Manual Coupe\",\n  description: \"1979 Australian Delivered Ferrari 308 GTB in the World Famous Rosso Corsa Red with Black Leather Trim - Matching Numbers 2.9L V8 Engine - Classic 5 Speed Manual Gated Transmission - Very low 40,817KMs\",\n  imgUrl: \"/img/ferrari04.webp\",\n  price: 179990,\n  location: \"Hobart, TAS\"\n}, {\n  title: \"1997 Ferrari F355 GTS Manual Coupe\",\n  description: \"For sales this beautiful rare F355 GTS 6 speed manual gearbox is in outstanding and perfect original condition, full Ferrari service history, only 1000km, done since last service, fully documented service history.\",\n  imgUrl: \"/img/ferrari05.webp\",\n  price: 200000,\n  location: \"Sydney, NSW\"\n}, {\n  title: \"Ferrari spare parts\",\n  description: \"Wanted to buy: spare parts for my Ferrari. Will travel to inspect\",\n  price: \"Wanted\",\n  location: \"Adelaide, SA\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const remove = Math.floor(Math.random() * Math.floor(6));\n  const response = shuffle(data, {\n    copy: true\n  }).splice(0, remove);\n  res.statusCode = 200;\n  res.json(response);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbGlzdGluZ3MuanM/MTg2ZSJdLCJuYW1lcyI6WyJzaHVmZmxlIiwicmVxdWlyZSIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwicHJpY2UiLCJsb2NhdGlvbiIsInJlcSIsInJlcyIsInJlbW92ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlc3BvbnNlIiwiY29weSIsInNwbGljZSIsInN0YXR1c0NvZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxvQ0FBRCxDQUFyQjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxPQUFLLEVBQUUsK0JBRFg7QUFFSUMsYUFBVyxFQUNQLGtMQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQURTLEVBU1Q7QUFDSUosT0FBSyxFQUFFLGdFQURYO0FBRUlDLGFBQVcsRUFDUCxpVUFIUjtBQUlJQyxRQUFNLEVBQUUscUJBSlo7QUFLSUMsT0FBSyxFQUFFLE1BTFg7QUFNSUMsVUFBUSxFQUFFO0FBTmQsQ0FUUyxFQWlCVDtBQUNJSixPQUFLLEVBQ0Qsc0VBRlI7QUFHSUMsYUFBVyxFQUNQLHNQQUpSO0FBS0lDLFFBQU0sRUFBRSxxQkFMWjtBQU1JQyxPQUFLLEVBQUUsTUFOWDtBQU9JQyxVQUFRLEVBQUU7QUFQZCxDQWpCUyxFQTBCVDtBQUNJSixPQUFLLEVBQUUsK0NBRFg7QUFFSUMsYUFBVyxFQUNQLDBNQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQTFCUyxFQWtDVDtBQUNJSixPQUFLLEVBQUUsb0NBRFg7QUFFSUMsYUFBVyxFQUNQLHVOQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQWxDUyxFQTBDVDtBQUNJSixPQUFLLEVBQUUscUJBRFg7QUFFSUMsYUFBVyxFQUNQLG1FQUhSO0FBSUlFLE9BQUssRUFBRSxRQUpYO0FBS0lDLFVBQVEsRUFBRTtBQUxkLENBMUNTLENBQWI7QUFtRGUsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBWCxDQUEzQixDQUFmO0FBQ0EsUUFBTUUsUUFBUSxHQUFHZCxPQUFPLENBQUNFLElBQUQsRUFBTztBQUFFYSxRQUFJLEVBQUU7QUFBUixHQUFQLENBQVAsQ0FBOEJDLE1BQTlCLENBQXFDLENBQXJDLEVBQXdDTixNQUF4QyxDQUFqQjtBQUVBRCxLQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQVIsS0FBRyxDQUFDUyxJQUFKLENBQVNKLFFBQVQ7QUFDSCxDQU5EIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2xpc3RpbmdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNodWZmbGUgPSByZXF1aXJlKFwic2h1ZmZsZS1hcnJheVwiKTtcblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjIwMDUgRmVycmFyaSBGNDMwIENvbnZlcnRpYmxlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJXZSBhcmUgcHJvdWQgdG8gb2ZmZXIgb25lIG9mIHRoZSByYXJlc3QgbW9kZXJuLWRheSBGZXJyYXJpJ3MgaW4gZXhpc3RlbmNlIHRvZGF5LlRoZXJlIGFyZSBvbmx5IGFwcHJveGltYXRlbHkgMTMwIFJJR0hUIEhBTkQgRFJJVkUgNiBTUEVFRCBHQVRFRCBNQU5VQUwgRjQzMCBTUElERVJTIElOIFRIRSBXT1JMRFwiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDEud2VicFwiLFxuICAgICAgICBwcmljZTogMjk5OTk5LFxuICAgICAgICBsb2NhdGlvbjogXCJTeWRuZXksIE5TV1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA2IEZlcnJhcmkgRjQzMCBTcGlkZXIgQmxhY2sgNiBTcGVlZCBGb3JtdWxhIE9uZSBDb252ZXJ0aWJsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiVHJhcmFsZ29uIENhciBDaXR5IGlzIGxvY2F0ZWQgaW4gVmljdG9yaWEsIDEuNSBocnMgZnJvbSBNZWxib3VybmUgZG93biB0aGUgU291dGggRWFzdGVybiBmcmVld2F5LiBXZSBhcmUgdGhlIGxhcmdlc3Qgbm9uLWZyYW5jaGlzZSBkZWFsZXJzaGlwIGluIHRoZSBHaXBwc2xhbmQgUmVnaW9uLCBsb2NhbGx5IG93bmVkIGFuZCBvcGVyYXRlZCBmb3Igb3ZlciAzMCB5ZWFycy4gT3VyIHRlYW0gaGF2ZSB0aGUga25vd2xlZGdlIGFuZCB0aGUgZXhwZXJ0aXNlIHRvIGhlbHAgeW91IGZpbmQgdGhlIHJpZ2h0IGNhciB0byBwZXJmZWN0bHkgc3VpdCB5b3VyIG5lZWRzLlwiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDIud2VicFwiLFxuICAgICAgICBwcmljZTogMjQ5OTkwLFxuICAgICAgICBsb2NhdGlvbjogXCJUYXJhbGdvbiwgVklDXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgICAgXCIyMDAwIEZlcnJhcmkgMzYwIE1vZGVuYSBGMSBCbHVlIDYgU3BlZWQgU2VxIE1hbnVhbCBBdXRvLUNsdXRjaCBDb3VwZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiVGhpcyBNYWduaWZpY2VudCBjYXIgaXMgb25lIGZvciB0aGUgY29sbGVjdG9yLCBiZWNvbWluZyBoYXJkZXIgdG8gZmluZCBpbiB0aGlzIGNvbmRpdGlvbiB0aGlzIGlzIGRlZmluaXRlbHkgYSByYXJlIGNhci4gSXQgaGFzIGFsd2F5cyBiZWVuIHNlcnZpY2VkIGFuZCBtYWludGFpbmVkIGJ5IEZlcnJhcmkgYnkgaXRzIHNpbmdsZSBvd25lciBhbmQgaGFzIHVuZG91YnRlZGx5IGJlZW4gbG92ZWQuIEl0IGhhcyBpdHMgZ2VudWluZVwiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDMud2VicFwiLFxuICAgICAgICBwcmljZTogMTQ4ODg4LFxuICAgICAgICBsb2NhdGlvbjogXCJQZXJ0aCwgV0FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMTk3OSBGZXJyYXJpIDMwOCBHVEIgUmVkIDUgU3BlZWQgTWFudWFsIENvdXBlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCIxOTc5IEF1c3RyYWxpYW4gRGVsaXZlcmVkIEZlcnJhcmkgMzA4IEdUQiBpbiB0aGUgV29ybGQgRmFtb3VzIFJvc3NvIENvcnNhIFJlZCB3aXRoIEJsYWNrIExlYXRoZXIgVHJpbSAtIE1hdGNoaW5nIE51bWJlcnMgMi45TCBWOCBFbmdpbmUgLSBDbGFzc2ljIDUgU3BlZWQgTWFudWFsIEdhdGVkIFRyYW5zbWlzc2lvbiAtIFZlcnkgbG93IDQwLDgxN0tNc1wiLFxuICAgICAgICBpbWdVcmw6IFwiL2ltZy9mZXJyYXJpMDQud2VicFwiLFxuICAgICAgICBwcmljZTogMTc5OTkwLFxuICAgICAgICBsb2NhdGlvbjogXCJIb2JhcnQsIFRBU1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCIxOTk3IEZlcnJhcmkgRjM1NSBHVFMgTWFudWFsIENvdXBlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJGb3Igc2FsZXMgdGhpcyBiZWF1dGlmdWwgcmFyZSBGMzU1IEdUUyA2IHNwZWVkIG1hbnVhbCBnZWFyYm94IGlzIGluIG91dHN0YW5kaW5nIGFuZCBwZXJmZWN0IG9yaWdpbmFsIGNvbmRpdGlvbiwgZnVsbCBGZXJyYXJpIHNlcnZpY2UgaGlzdG9yeSwgb25seSAxMDAwa20sIGRvbmUgc2luY2UgbGFzdCBzZXJ2aWNlLCBmdWxseSBkb2N1bWVudGVkIHNlcnZpY2UgaGlzdG9yeS5cIixcbiAgICAgICAgaW1nVXJsOiBcIi9pbWcvZmVycmFyaTA1LndlYnBcIixcbiAgICAgICAgcHJpY2U6IDIwMDAwMCxcbiAgICAgICAgbG9jYXRpb246IFwiU3lkbmV5LCBOU1dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiRmVycmFyaSBzcGFyZSBwYXJ0c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiV2FudGVkIHRvIGJ1eTogc3BhcmUgcGFydHMgZm9yIG15IEZlcnJhcmkuIFdpbGwgdHJhdmVsIHRvIGluc3BlY3RcIixcbiAgICAgICAgcHJpY2U6IFwiV2FudGVkXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIkFkZWxhaWRlLCBTQVwiLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCByZW1vdmUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDYpKTtcbiAgICBjb25zdCByZXNwb25zZSA9IHNodWZmbGUoZGF0YSwgeyBjb3B5OiB0cnVlIH0pLnNwbGljZSgwLCByZW1vdmUpO1xuXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgcmVzLmpzb24ocmVzcG9uc2UpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/listings.js\n");

/***/ }),

/***/ "shuffle-array":
/*!********************************!*\
  !*** external "shuffle-array" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shuffle-array\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaHVmZmxlLWFycmF5XCI/OWRlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzaHVmZmxlLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2h1ZmZsZS1hcnJheVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///shuffle-array\n");

/***/ })

/******/ });