"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./redux/style-slice/general-style/GenrealStyle.ts":
/*!*********************************************************!*\
  !*** ./redux/style-slice/general-style/GenrealStyle.ts ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GeneralStyle\": function() { return /* binding */ GeneralStyle; },\n/* harmony export */   \"WindowHeightRedcuer\": function() { return /* binding */ WindowHeightRedcuer; },\n/* harmony export */   \"poPUppRedcuer\": function() { return /* binding */ poPUppRedcuer; },\n/* harmony export */   \"reducerFormSignUp\": function() { return /* binding */ reducerFormSignUp; },\n/* harmony export */   \"reducerSignUp\": function() { return /* binding */ reducerSignUp; },\n/* harmony export */   \"toggleCookie\": function() { return /* binding */ toggleCookie; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n    WindowHeight: 800,\n    popUpp: false,\n    popUppData: {},\n    signUp: true,\n    formSignUp: true,\n    cookieContainer: true\n};\nvar GeneralStyle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"general-style\",\n    initialState: initialState,\n    reducers: {\n        WindowHeightRedcuer: function(state, action) {\n            state.WindowHeight = action.payload;\n        },\n        poPUppRedcuer: function(state, action) {\n            if (!state.popUpp) {\n                state.popUpp = true;\n                state.popUppData = action.payload.data;\n            } else {\n                state.popUpp = false;\n            }\n        },\n        reducerFormSignUp: function(state, action) {\n            state.formSignUp = action.payload;\n        },\n        reducerSignUp: function(state, action) {\n            state.signUp = action.payload;\n        },\n        toggleCookie: function(state, action) {\n            state.cookieContainer = action.payload;\n        }\n    }\n});\nvar _actions = GeneralStyle.actions;\nvar WindowHeightRedcuer = _actions.WindowHeightRedcuer, poPUppRedcuer = _actions.poPUppRedcuer, reducerSignUp = _actions.reducerSignUp, reducerFormSignUp = _actions.reducerFormSignUp, toggleCookie = _actions.toggleCookie;\nvar AllReducers = GeneralStyle.reducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllReducers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdHlsZS1zbGljZS9nZW5lcmFsLXN0eWxlL0dlbnJlYWxTdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBRS9DLElBQU1DLFlBQVksR0FBRztJQUNuQkMsWUFBWSxFQUFFLEdBQUc7SUFDakJDLE1BQU0sRUFBRSxLQUFLO0lBQ2JDLFVBQVUsRUFBRSxFQUFFO0lBQ2RDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxlQUFlLEVBQUUsSUFBSTtDQUN0QjtBQUVNLElBQU1DLFlBQVksR0FBR1IsNkRBQVcsQ0FBQztJQUN0Q1MsSUFBSSxFQUFFLGVBQWU7SUFDckJSLFlBQVksRUFBWkEsWUFBWTtJQUNaUyxRQUFRLEVBQUU7UUFDUkMsbUJBQW1CLEVBQUUsU0FBQ0MsS0FBVSxFQUFFQyxNQUFXLEVBQUs7WUFDaERELEtBQUssQ0FBQ1YsWUFBWSxHQUFHVyxNQUFNLENBQUNDLE9BQU8sQ0FBQztTQUNyQztRQUNEQyxhQUFhLEVBQUUsU0FBQ0gsS0FBVSxFQUFFQyxNQUFXLEVBQUs7WUFDMUMsSUFBSSxDQUFDRCxLQUFLLENBQUNULE1BQU0sRUFBRTtnQkFDakJTLEtBQUssQ0FBQ1QsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDcEJTLEtBQUssQ0FBQ1IsVUFBVSxHQUFHUyxNQUFNLENBQUNDLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDO2FBQ3hDLE1BQU07Z0JBQ0xKLEtBQUssQ0FBQ1QsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUN0QjtTQUNGO1FBQ0RjLGlCQUFpQixFQUFFLFNBQUNMLEtBQVUsRUFBRUMsTUFBVyxFQUFLO1lBQzlDRCxLQUFLLENBQUNOLFVBQVUsR0FBR08sTUFBTSxDQUFDQyxPQUFPLENBQUM7U0FDbkM7UUFFREksYUFBYSxFQUFFLFNBQUNOLEtBQVUsRUFBRUMsTUFBVyxFQUFLO1lBQzFDRCxLQUFLLENBQUNQLE1BQU0sR0FBR1EsTUFBTSxDQUFDQyxPQUFPLENBQUM7U0FDL0I7UUFDREssWUFBWSxFQUFFLFNBQUNQLEtBQVUsRUFBRUMsTUFBVyxFQUFLO1lBQ3pDRCxLQUFLLENBQUNMLGVBQWUsR0FBR00sTUFBTSxDQUFDQyxPQUFPLENBQUM7U0FDeEM7S0FDRjtDQUNGLENBQUMsQ0FBQztJQVFDTixRQUFvQixHQUFwQkEsWUFBWSxDQUFDWSxPQUFPO0FBTmpCLElBQ0xULG1CQUFtQixHQUtqQkgsUUFBb0IsQ0FMdEJHLG1CQUFtQixFQUNuQkksYUFBYSxHQUlYUCxRQUFvQixDQUp0Qk8sYUFBYSxFQUNiRyxhQUFhLEdBR1hWLFFBQW9CLENBSHRCVSxhQUFhLEVBQ2JELGlCQUFpQixHQUVmVCxRQUFvQixDQUZ0QlMsaUJBQWlCLEVBQ2pCRSxZQUFZLEdBQ1ZYLFFBQW9CLENBRHRCVyxZQUFZLENBQ1c7QUFDekIsSUFBTUUsV0FBVyxHQUFHYixZQUFZLENBQUNjLE9BQU87QUFDeEMsK0RBQWVELFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9yZWR1eC9zdHlsZS1zbGljZS9nZW5lcmFsLXN0eWxlL0dlbnJlYWxTdHlsZS50cz9hNjYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBXaW5kb3dIZWlnaHQ6IDgwMCxcclxuICBwb3BVcHA6IGZhbHNlLFxyXG4gIHBvcFVwcERhdGE6IHt9LFxyXG4gIHNpZ25VcDogdHJ1ZSxcclxuICBmb3JtU2lnblVwOiB0cnVlLFxyXG4gIGNvb2tpZUNvbnRhaW5lcjogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHZW5lcmFsU3R5bGUgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJnZW5lcmFsLXN0eWxlXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBXaW5kb3dIZWlnaHRSZWRjdWVyOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgc3RhdGUuV2luZG93SGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgcG9QVXBwUmVkY3VlcjogKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgIGlmICghc3RhdGUucG9wVXBwKSB7XHJcbiAgICAgICAgc3RhdGUucG9wVXBwID0gdHJ1ZTtcclxuICAgICAgICBzdGF0ZS5wb3BVcHBEYXRhID0gYWN0aW9uLnBheWxvYWQuZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGF0ZS5wb3BVcHAgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJGb3JtU2lnblVwOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgc3RhdGUuZm9ybVNpZ25VcCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWR1Y2VyU2lnblVwOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgc3RhdGUuc2lnblVwID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlQ29va2llOiAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcclxuICAgICAgc3RhdGUuY29va2llQ29udGFpbmVyID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICBXaW5kb3dIZWlnaHRSZWRjdWVyLFxyXG4gIHBvUFVwcFJlZGN1ZXIsXHJcbiAgcmVkdWNlclNpZ25VcCxcclxuICByZWR1Y2VyRm9ybVNpZ25VcCxcclxuICB0b2dnbGVDb29raWUsXHJcbn0gPSBHZW5lcmFsU3R5bGUuYWN0aW9ucztcclxuY29uc3QgQWxsUmVkdWNlcnMgPSBHZW5lcmFsU3R5bGUucmVkdWNlcjtcclxuZXhwb3J0IGRlZmF1bHQgQWxsUmVkdWNlcnM7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIldpbmRvd0hlaWdodCIsInBvcFVwcCIsInBvcFVwcERhdGEiLCJzaWduVXAiLCJmb3JtU2lnblVwIiwiY29va2llQ29udGFpbmVyIiwiR2VuZXJhbFN0eWxlIiwibmFtZSIsInJlZHVjZXJzIiwiV2luZG93SGVpZ2h0UmVkY3VlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInBvUFVwcFJlZGN1ZXIiLCJkYXRhIiwicmVkdWNlckZvcm1TaWduVXAiLCJyZWR1Y2VyU2lnblVwIiwidG9nZ2xlQ29va2llIiwiYWN0aW9ucyIsIkFsbFJlZHVjZXJzIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/style-slice/general-style/GenrealStyle.ts\n"));

/***/ })

});