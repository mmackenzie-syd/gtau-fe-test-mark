webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Listings.js":
/*!********************************!*\
  !*** ./components/Listings.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/mark/Desktop/gtau-fe-test-mark/components/Listings.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nvar ACTIONS = [\"View\", \"Reply\"];\n\nvar formatAsCurrency = function formatAsCurrency(_int) {\n  // TODO\n  if (typeof _int === 'number') {\n    var priceInThousands = Math.round(_int / 1000) * 1000;\n    return '$' + priceInThousands.toLocaleString();\n  }\n\n  return _int;\n};\n\nvar Listing = function Listing(_ref) {\n  var title = _ref.title,\n      description = _ref.description,\n      imgUrl = _ref.imgUrl,\n      location = _ref.location,\n      price = _ref.price;\n  // TODO\n  // This should be the component which renders an individual listing to the page\n  return __jsx(\"div\", {\n    className: \"listing\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(\"h3\", {\n    className: \"listing__title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }, title), __jsx(\"div\", {\n    className: \"listing__subtitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"listing__price\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 21\n    }\n  }, formatAsCurrency(price)), __jsx(\"div\", {\n    className: \"listing__location\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, location))), imgUrl && __jsx(\"div\", {\n    className: \"listing__img-wrap\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    alt: title,\n    src: imgUrl,\n    className: \"listing__img\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 21\n    }\n  })), __jsx(\"article\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }, description && __jsx(\"p\", {\n    className: \"listing__description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 34\n    }\n  }, description)), __jsx(\"footer\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, ACTIONS.map(function (action) {\n    return __jsx(\"button\", {\n      key: action,\n      onClick: function onClick() {\n        return console.log(\"\".concat(action, \" : \").concat(title));\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 25\n      }\n    }, action);\n  })));\n};\n\n_c = Listing;\n\nvar reducer = function reducer(state, action) {\n  switch (action.type) {\n    case 'SUCCESS':\n      return {\n        loading: false,\n        data: action.payload,\n        error: ''\n      };\n\n    case 'ERROR':\n      return {\n        loading: false,\n        data: [],\n        error: action.payload || 'failed to fetch data'\n      };\n\n    default:\n      return state;\n  }\n};\n\nvar Listings = function Listings(_ref2) {\n  _s();\n\n  var dataEndpoint = _ref2.dataEndpoint,\n      keyword = _ref2.keyword,\n      location = _ref2.location;\n\n  // TODO\n  // This component should make a request to the api endpoint (props.dataEndpoint)\n  // then render the result as set of listings as per the design mocks\n  // check props passed in from parent for other values that you may need to use\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(reducer, {\n    loading: true,\n    error: '',\n    data: []\n  }),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch(dataEndpoint).then(function (response) {\n      if (!response.ok) {\n        throw Error(response.statusText);\n      }\n\n      return response;\n    }).then(function (response) {\n      response.json().then(function (data) {\n        dispatch({\n          type: 'SUCCESS',\n          payload: data\n        });\n      });\n    })[\"catch\"](function (error) {\n      dispatch({\n        type: 'ERROR',\n        payload: error.toString()\n      });\n    });\n  }, []);\n  var loading = state.loading,\n      data = state.data,\n      error = state.error;\n  return __jsx(\"div\", {\n    className: \"listings\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, loading && __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 26\n    }\n  }, \"...Loading\"), !error && !loading && data.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"listings__header\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 25\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 29\n    }\n  }, \"Search Results\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 33\n    }\n  }, data.length, \" results\"), \" for \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 72\n    }\n  }, keyword), \" in \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 98\n    }\n  }, location))), __jsx(\"div\", {\n    className: \"listings__grid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 25\n    }\n  }, data.map(function (item, index) {\n    return __jsx(Listing, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      key: index\n    }, item, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 56\n      }\n    }));\n  }))) : __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 23\n    }\n  }, \"...No results found\"), error && __jsx(\"div\", {\n    className: \"error\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"error__msg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 21\n    }\n  }, error)));\n};\n\n_s(Listings, \"4pgqH9oJlIqeT1IHfFnt6sVztFs=\");\n\n_c2 = Listings;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Listings);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Listing\");\n$RefreshReg$(_c2, \"Listings\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0aW5ncy5qcz9mNTcxIl0sIm5hbWVzIjpbIkFDVElPTlMiLCJmb3JtYXRBc0N1cnJlbmN5IiwiaW50IiwicHJpY2VJblRob3VzYW5kcyIsIk1hdGgiLCJyb3VuZCIsInRvTG9jYWxlU3RyaW5nIiwiTGlzdGluZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWdVcmwiLCJsb2NhdGlvbiIsInByaWNlIiwibWFwIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInJlZHVjZXIiLCJzdGF0ZSIsInR5cGUiLCJsb2FkaW5nIiwiZGF0YSIsInBheWxvYWQiLCJlcnJvciIsIkxpc3RpbmdzIiwiZGF0YUVuZHBvaW50Iiwia2V5d29yZCIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwidG9TdHJpbmciLCJsZW5ndGgiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBUztBQUM5QjtBQUNBLE1BQUksT0FBT0EsSUFBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ3pCLFFBQUlDLGdCQUFnQixHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsSUFBRyxHQUFDLElBQWYsSUFBcUIsSUFBNUM7QUFDQSxXQUFPLE1BQU1DLGdCQUFnQixDQUFDRyxjQUFqQixFQUFiO0FBQ0g7O0FBQ0QsU0FBT0osSUFBUDtBQUNILENBUEQ7O0FBU0EsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBcUQ7QUFBQSxNQUFsREMsS0FBa0QsUUFBbERBLEtBQWtEO0FBQUEsTUFBM0NDLFdBQTJDLFFBQTNDQSxX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YUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT2pCLElBQUksQ0FBQ2lCLE1BQVosYUFESixXQUMyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9aLE9BQVAsQ0FEM0MsVUFDcUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPZixRQUFQLENBRHJFLENBRkosQ0FERixFQU9FO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS1UsSUFBSSxDQUFDUixHQUFMLENBQVMsVUFBQzBCLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQWlCLE1BQUMsT0FBRDtBQUFTLFNBQUcsRUFBRUE7QUFBZCxPQUF3QkQsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFqQjtBQUFBLEdBQVQsQ0FETCxDQVBGLENBRlIsR0FhUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWZkLEVBaUJNaEIsS0FBSyxJQUNIO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkEsS0FBN0IsQ0FESixDQWxCUixDQURKO0FBeUJILENBakREOztHQUFNQyxROztNQUFBQSxRO0FBbURTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdGluZ3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFDVElPTlMgPSBbXCJWaWV3XCIsIFwiUmVwbHlcIl07XG5cbmNvbnN0IGZvcm1hdEFzQ3VycmVuY3kgPSAoaW50KSA9PiB7XG4gICAgLy8gVE9ET1xuICAgIGlmICh0eXBlb2YgaW50ID09PSAnbnVtYmVyJykge1xuICAgICAgICBsZXQgcHJpY2VJblRob3VzYW5kcyA9IE1hdGgucm91bmQoaW50LzEwMDApKjEwMDA7XG4gICAgICAgIHJldHVybiAnJCcgKyBwcmljZUluVGhvdXNhbmRzLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBpbnQ7XG59O1xuXG5jb25zdCBMaXN0aW5nID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWdVcmwsIGxvY2F0aW9uLCBwcmljZSB9KSA9PiB7XG4gICAgLy8gVE9ET1xuICAgIC8vIFRoaXMgc2hvdWxkIGJlIHRoZSBjb21wb25lbnQgd2hpY2ggcmVuZGVycyBhbiBpbmRpdmlkdWFsIGxpc3RpbmcgdG8gdGhlIHBhZ2VcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ1wiPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibGlzdGluZ19fdGl0bGVcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdfX3N1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ19fcHJpY2VcIj57Zm9ybWF0QXNDdXJyZW5jeShwcmljZSl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdGluZ19fbG9jYXRpb25cIj57bG9jYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWdVcmwgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdfX2ltZy13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PXt0aXRsZX0gc3JjPXtpbWdVcmx9IGNsYXNzTmFtZT1cImxpc3RpbmdfX2ltZ1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICAgIHsgZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPVwibGlzdGluZ19fZGVzY3JpcHRpb25cIj57IGRlc2NyaXB0aW9uIH08L3A+IH1cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBBQ1RJT05TLm1hcChhY3Rpb24gPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24ga2V5PXthY3Rpb259IG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKGAke2FjdGlvbn0gOiAke3RpdGxlfWApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIHx8ICdmYWlsZWQgdG8gZmV0Y2ggZGF0YSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmNvbnN0IExpc3RpbmdzID0gKHsgZGF0YUVuZHBvaW50LCBrZXl3b3JkLCBsb2NhdGlvbiB9KSA9PiB7XG4gICAgLy8gVE9ET1xuICAgIC8vIFRoaXMgY29tcG9uZW50IHNob3VsZCBtYWtlIGEgcmVxdWVzdCB0byB0aGUgYXBpIGVuZHBvaW50IChwcm9wcy5kYXRhRW5kcG9pbnQpXG4gICAgLy8gdGhlbiByZW5kZXIgdGhlIHJlc3VsdCBhcyBzZXQgb2YgbGlzdGluZ3MgYXMgcGVyIHRoZSBkZXNpZ24gbW9ja3NcbiAgICAvLyBjaGVjayBwcm9wcyBwYXNzZWQgaW4gZnJvbSBwYXJlbnQgZm9yIG90aGVyIHZhbHVlcyB0aGF0IHlvdSBtYXkgbmVlZCB0byB1c2VcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSwgZXJyb3I6ICcnLCBkYXRhOiBbXVxuICAgICAgICB9KTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChkYXRhRW5kcG9pbnQpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdTVUNDRVNTJywgcGF5bG9hZDogZGF0YX0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdFUlJPUicsIHBheWxvYWQ6IGVycm9yLnRvU3RyaW5nKCkgfSlcbiAgICAgICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH0gPSBzdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RpbmdzXCI+XG4gICAgICAgICAgICB7IGxvYWRpbmcgJiYgPGRpdj4uLi5Mb2FkaW5nPC9kaXY+IH1cbiAgICAgICAgICAgIHsgIWVycm9yICYmICFsb2FkaW5nICYmXG4gICAgICAgICAgICAgICAgKGRhdGEubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgPyA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNlYXJjaCBSZXN1bHRzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGEubGVuZ3RofSByZXN1bHRzPC9zcGFuPiBmb3IgPHNwYW4+e2tleXdvcmR9PC9zcGFuPiBpbiA8c3Bhbj57bG9jYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0aW5nc19fZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IDxMaXN0aW5nIGtleT17aW5kZXh9ey4uLml0ZW19IC8+KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgOiA8ZGl2Pi4uLk5vIHJlc3VsdHMgZm91bmQ8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgZXJyb3IgJiZcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JfX21zZ1wiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RpbmdzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Listings.js\n");

/***/ })

})