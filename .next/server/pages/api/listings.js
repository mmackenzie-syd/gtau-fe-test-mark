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
eval("__webpack_require__.r(__webpack_exports__);\nvar shuffle = __webpack_require__(/*! shuffle-array */ \"shuffle-array\");\n\nconst data = [{\n  title: \"2005 Ferrari F430 Convertible\",\n  description: \"We are proud to offer one of the rarest modern-day Ferrari's in existence today.There are only approximately 130 RIGHT HAND DRIVE 6 SPEED GATED MANUAL F430 SPIDERS IN THE WORLD\",\n  imgUrl: \"/img/ferrari01.webp\",\n  price: 299999,\n  location: \"Sydney, NSW\"\n}, {\n  title: \"2006 Ferrari F430 Spider Black 6 Speed Formula One Convertible\",\n  description: \"Traralgon Car City is located in Victoria, 1.5 hrs from Melbourne down the South Eastern freeway. We are the largest non-franchise dealership in the Gippsland Region, locally owned and operated for over 30 years. Our team have the knowledge and the expertise to help you find the right car to perfectly suit your needs.\",\n  imgUrl: \"/img/ferrari02.webp\",\n  price: 249990,\n  location: \"Taralgon, VIC\"\n}, {\n  title: \"2000 Ferrari 360 Modena F1 Blue 6 Speed Seq Manual Auto-Clutch Coupe\",\n  description: \"This Magnificent car is one for the collector, becoming harder to find in this condition this is definitely a rare car. It has always been serviced and maintained by Ferrari by its single owner and has undoubtedly been loved. It has its genuine\",\n  imgUrl: \"/img/ferrari03.webp\",\n  price: 148888,\n  location: \"Perth, WA\"\n}, {\n  title: \"1979 Ferrari 308 GTB Red 5 Speed Manual Coupe\",\n  description: \"1979 Australian Delivered Ferrari 308 GTB in the World Famous Rosso Corsa Red with Black Leather Trim - Matching Numbers 2.9L V8 Engine - Classic 5 Speed Manual Gated Transmission - Very low 40,817KMs\",\n  imgUrl: \"/img/ferrari04.webp\",\n  price: 179990,\n  location: \"Hobart, TAS\"\n}, {\n  title: \"1997 Ferrari F355 GTS Manual Coupe\",\n  description: \"For sales this beautiful rare F355 GTS 6 speed manual gearbox is in outstanding and perfect original condition, full Ferrari service history, only 1000km, done since last service, fully documented service history.\",\n  imgUrl: \"/img/ferrari05.webp\",\n  price: 200000,\n  location: \"Sydney, NSW\"\n}, {\n  title: \"Ferrari spare parts\",\n  description: \"Wanted to buy: spare parts for my Ferrari. Will travel to inspect\",\n  price: \"Wanted\",\n  location: \"Adelaide, SA\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const remove = 6; //Math.floor(Math.random() * Math.floor(6));\n\n  const response = shuffle(data, {\n    copy: true\n  }).splice(0, remove);\n  res.statusCode = 200;\n  res.json(response);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbGlzdGluZ3MuanM/MTg2ZSJdLCJuYW1lcyI6WyJzaHVmZmxlIiwicmVxdWlyZSIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1nVXJsIiwicHJpY2UiLCJsb2NhdGlvbiIsInJlcSIsInJlcyIsInJlbW92ZSIsInJlc3BvbnNlIiwiY29weSIsInNwbGljZSIsInN0YXR1c0NvZGUiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQUlBLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxvQ0FBRCxDQUFyQjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsQ0FDVDtBQUNJQyxPQUFLLEVBQUUsK0JBRFg7QUFFSUMsYUFBVyxFQUNQLGtMQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQURTLEVBU1Q7QUFDSUosT0FBSyxFQUFFLGdFQURYO0FBRUlDLGFBQVcsRUFDUCxpVUFIUjtBQUlJQyxRQUFNLEVBQUUscUJBSlo7QUFLSUMsT0FBSyxFQUFFLE1BTFg7QUFNSUMsVUFBUSxFQUFFO0FBTmQsQ0FUUyxFQWlCVDtBQUNJSixPQUFLLEVBQ0Qsc0VBRlI7QUFHSUMsYUFBVyxFQUNQLHNQQUpSO0FBS0lDLFFBQU0sRUFBRSxxQkFMWjtBQU1JQyxPQUFLLEVBQUUsTUFOWDtBQU9JQyxVQUFRLEVBQUU7QUFQZCxDQWpCUyxFQTBCVDtBQUNJSixPQUFLLEVBQUUsK0NBRFg7QUFFSUMsYUFBVyxFQUNQLDBNQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQTFCUyxFQWtDVDtBQUNJSixPQUFLLEVBQUUsb0NBRFg7QUFFSUMsYUFBVyxFQUNQLHVOQUhSO0FBSUlDLFFBQU0sRUFBRSxxQkFKWjtBQUtJQyxPQUFLLEVBQUUsTUFMWDtBQU1JQyxVQUFRLEVBQUU7QUFOZCxDQWxDUyxFQTBDVDtBQUNJSixPQUFLLEVBQUUscUJBRFg7QUFFSUMsYUFBVyxFQUNQLG1FQUhSO0FBSUlFLE9BQUssRUFBRSxRQUpYO0FBS0lDLFVBQVEsRUFBRTtBQUxkLENBMUNTLENBQWI7QUFtRGUsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQ3pCLFFBQU1DLE1BQU0sR0FBRyxDQUFmLENBRHlCLENBQ1A7O0FBQ2xCLFFBQU1DLFFBQVEsR0FBR1gsT0FBTyxDQUFDRSxJQUFELEVBQU87QUFBRVUsUUFBSSxFQUFFO0FBQVIsR0FBUCxDQUFQLENBQThCQyxNQUE5QixDQUFxQyxDQUFyQyxFQUF3Q0gsTUFBeEMsQ0FBakI7QUFFQUQsS0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FMLEtBQUcsQ0FBQ00sSUFBSixDQUFTSixRQUFUO0FBQ0gsQ0FORCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9saXN0aW5ncy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzaHVmZmxlID0gcmVxdWlyZShcInNodWZmbGUtYXJyYXlcIik7XG5cbmNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCIyMDA1IEZlcnJhcmkgRjQzMCBDb252ZXJ0aWJsZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiV2UgYXJlIHByb3VkIHRvIG9mZmVyIG9uZSBvZiB0aGUgcmFyZXN0IG1vZGVybi1kYXkgRmVycmFyaSdzIGluIGV4aXN0ZW5jZSB0b2RheS5UaGVyZSBhcmUgb25seSBhcHByb3hpbWF0ZWx5IDEzMCBSSUdIVCBIQU5EIERSSVZFIDYgU1BFRUQgR0FURUQgTUFOVUFMIEY0MzAgU1BJREVSUyBJTiBUSEUgV09STERcIixcbiAgICAgICAgaW1nVXJsOiBcIi9pbWcvZmVycmFyaTAxLndlYnBcIixcbiAgICAgICAgcHJpY2U6IDI5OTk5OSxcbiAgICAgICAgbG9jYXRpb246IFwiU3lkbmV5LCBOU1dcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMjAwNiBGZXJyYXJpIEY0MzAgU3BpZGVyIEJsYWNrIDYgU3BlZWQgRm9ybXVsYSBPbmUgQ29udmVydGlibGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlRyYXJhbGdvbiBDYXIgQ2l0eSBpcyBsb2NhdGVkIGluIFZpY3RvcmlhLCAxLjUgaHJzIGZyb20gTWVsYm91cm5lIGRvd24gdGhlIFNvdXRoIEVhc3Rlcm4gZnJlZXdheS4gV2UgYXJlIHRoZSBsYXJnZXN0IG5vbi1mcmFuY2hpc2UgZGVhbGVyc2hpcCBpbiB0aGUgR2lwcHNsYW5kIFJlZ2lvbiwgbG9jYWxseSBvd25lZCBhbmQgb3BlcmF0ZWQgZm9yIG92ZXIgMzAgeWVhcnMuIE91ciB0ZWFtIGhhdmUgdGhlIGtub3dsZWRnZSBhbmQgdGhlIGV4cGVydGlzZSB0byBoZWxwIHlvdSBmaW5kIHRoZSByaWdodCBjYXIgdG8gcGVyZmVjdGx5IHN1aXQgeW91ciBuZWVkcy5cIixcbiAgICAgICAgaW1nVXJsOiBcIi9pbWcvZmVycmFyaTAyLndlYnBcIixcbiAgICAgICAgcHJpY2U6IDI0OTk5MCxcbiAgICAgICAgbG9jYXRpb246IFwiVGFyYWxnb24sIFZJQ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAgIFwiMjAwMCBGZXJyYXJpIDM2MCBNb2RlbmEgRjEgQmx1ZSA2IFNwZWVkIFNlcSBNYW51YWwgQXV0by1DbHV0Y2ggQ291cGVcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlRoaXMgTWFnbmlmaWNlbnQgY2FyIGlzIG9uZSBmb3IgdGhlIGNvbGxlY3RvciwgYmVjb21pbmcgaGFyZGVyIHRvIGZpbmQgaW4gdGhpcyBjb25kaXRpb24gdGhpcyBpcyBkZWZpbml0ZWx5IGEgcmFyZSBjYXIuIEl0IGhhcyBhbHdheXMgYmVlbiBzZXJ2aWNlZCBhbmQgbWFpbnRhaW5lZCBieSBGZXJyYXJpIGJ5IGl0cyBzaW5nbGUgb3duZXIgYW5kIGhhcyB1bmRvdWJ0ZWRseSBiZWVuIGxvdmVkLiBJdCBoYXMgaXRzIGdlbnVpbmVcIixcbiAgICAgICAgaW1nVXJsOiBcIi9pbWcvZmVycmFyaTAzLndlYnBcIixcbiAgICAgICAgcHJpY2U6IDE0ODg4OCxcbiAgICAgICAgbG9jYXRpb246IFwiUGVydGgsIFdBXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIjE5NzkgRmVycmFyaSAzMDggR1RCIFJlZCA1IFNwZWVkIE1hbnVhbCBDb3VwZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiMTk3OSBBdXN0cmFsaWFuIERlbGl2ZXJlZCBGZXJyYXJpIDMwOCBHVEIgaW4gdGhlIFdvcmxkIEZhbW91cyBSb3NzbyBDb3JzYSBSZWQgd2l0aCBCbGFjayBMZWF0aGVyIFRyaW0gLSBNYXRjaGluZyBOdW1iZXJzIDIuOUwgVjggRW5naW5lIC0gQ2xhc3NpYyA1IFNwZWVkIE1hbnVhbCBHYXRlZCBUcmFuc21pc3Npb24gLSBWZXJ5IGxvdyA0MCw4MTdLTXNcIixcbiAgICAgICAgaW1nVXJsOiBcIi9pbWcvZmVycmFyaTA0LndlYnBcIixcbiAgICAgICAgcHJpY2U6IDE3OTk5MCxcbiAgICAgICAgbG9jYXRpb246IFwiSG9iYXJ0LCBUQVNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiMTk5NyBGZXJyYXJpIEYzNTUgR1RTIE1hbnVhbCBDb3VwZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiRm9yIHNhbGVzIHRoaXMgYmVhdXRpZnVsIHJhcmUgRjM1NSBHVFMgNiBzcGVlZCBtYW51YWwgZ2VhcmJveCBpcyBpbiBvdXRzdGFuZGluZyBhbmQgcGVyZmVjdCBvcmlnaW5hbCBjb25kaXRpb24sIGZ1bGwgRmVycmFyaSBzZXJ2aWNlIGhpc3RvcnksIG9ubHkgMTAwMGttLCBkb25lIHNpbmNlIGxhc3Qgc2VydmljZSwgZnVsbHkgZG9jdW1lbnRlZCBzZXJ2aWNlIGhpc3RvcnkuXCIsXG4gICAgICAgIGltZ1VybDogXCIvaW1nL2ZlcnJhcmkwNS53ZWJwXCIsXG4gICAgICAgIHByaWNlOiAyMDAwMDAsXG4gICAgICAgIGxvY2F0aW9uOiBcIlN5ZG5leSwgTlNXXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkZlcnJhcmkgc3BhcmUgcGFydHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIldhbnRlZCB0byBidXk6IHNwYXJlIHBhcnRzIGZvciBteSBGZXJyYXJpLiBXaWxsIHRyYXZlbCB0byBpbnNwZWN0XCIsXG4gICAgICAgIHByaWNlOiBcIldhbnRlZFwiLFxuICAgICAgICBsb2NhdGlvbjogXCJBZGVsYWlkZSwgU0FcIixcbiAgICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcmVtb3ZlID0gNjsgLy9NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDYpKTtcbiAgICBjb25zdCByZXNwb25zZSA9IHNodWZmbGUoZGF0YSwgeyBjb3B5OiB0cnVlIH0pLnNwbGljZSgwLCByZW1vdmUpO1xuXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XG4gICAgcmVzLmpzb24ocmVzcG9uc2UpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/listings.js\n");

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