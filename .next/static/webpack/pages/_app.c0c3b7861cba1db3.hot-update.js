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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GeneralStyle\": function() { return /* binding */ GeneralStyle; },\n/* harmony export */   \"WindowHeightRedcuer\": function() { return /* binding */ WindowHeightRedcuer; },\n/* harmony export */   \"poPUppRedcuer\": function() { return /* binding */ poPUppRedcuer; },\n/* harmony export */   \"reducerFormSignUp\": function() { return /* binding */ reducerFormSignUp; },\n/* harmony export */   \"reducerSignUp\": function() { return /* binding */ reducerSignUp; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nvar initialState = {\n    WindowHeight: 800,\n    popUpp: false,\n    popUppData: {},\n    signUp: true,\n    formSignUp: false,\n    cookieContainer: false\n};\nvar GeneralStyle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"general-style\",\n    initialState: initialState,\n    reducers: {\n        WindowHeightRedcuer: function(state, action) {\n            state.WindowHeight = action.payload;\n        },\n        poPUppRedcuer: function(state, action) {\n            if (!state.popUpp) {\n                state.popUpp = true;\n                state.popUppData = action.payload.data;\n            } else {\n                state.popUpp = false;\n            }\n        },\n        reducerFormSignUp: function(state, action) {\n            state.formSignUp = action.paylaod;\n        },\n        reducerSignUp: function(state, action) {\n            state.signUp = action.paylaod;\n        },\n        toggleCookie: function(state, action) {\n            state.cookieContainer = action.paylaod;\n        }\n    }\n});\nvar _actions = GeneralStyle.actions;\nvar WindowHeightRedcuer = _actions.WindowHeightRedcuer, poPUppRedcuer = _actions.poPUppRedcuer, reducerSignUp = _actions.reducerSignUp, reducerFormSignUp = _actions.reducerFormSignUp;\nvar AllReducers = GeneralStyle.reducer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllReducers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdHlsZS1zbGljZS9nZW5lcmFsLXN0eWxlL0dlbnJlYWxTdHlsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFFL0MsSUFBTUMsWUFBWSxHQUFHO0lBQ25CQyxZQUFZLEVBQUUsR0FBRztJQUNqQkMsTUFBTSxFQUFFLEtBQUs7SUFDYkMsVUFBVSxFQUFFLEVBQUU7SUFDZEMsTUFBTSxFQUFFLElBQUk7SUFDWkMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLGVBQWUsRUFBRSxLQUFLO0NBQ3ZCO0FBRU0sSUFBTUMsWUFBWSxHQUFHUiw2REFBVyxDQUFDO0lBQ3RDUyxJQUFJLEVBQUUsZUFBZTtJQUNyQlIsWUFBWSxFQUFaQSxZQUFZO0lBQ1pTLFFBQVEsRUFBRTtRQUNSQyxtQkFBbUIsRUFBRSxTQUFDQyxLQUFVLEVBQUVDLE1BQVcsRUFBSztZQUNoREQsS0FBSyxDQUFDVixZQUFZLEdBQUdXLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDO1NBQ3JDO1FBQ0RDLGFBQWEsRUFBRSxTQUFDSCxLQUFVLEVBQUVDLE1BQVcsRUFBSztZQUMxQyxJQUFJLENBQUNELEtBQUssQ0FBQ1QsTUFBTSxFQUFFO2dCQUNqQlMsS0FBSyxDQUFDVCxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQlMsS0FBSyxDQUFDUixVQUFVLEdBQUdTLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDRSxJQUFJLENBQUM7YUFDeEMsTUFBTTtnQkFDTEosS0FBSyxDQUFDVCxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRGMsaUJBQWlCLEVBQUUsU0FBQ0wsS0FBVSxFQUFFQyxNQUFXLEVBQUs7WUFDOUNELEtBQUssQ0FBQ04sVUFBVSxHQUFHTyxNQUFNLENBQUNLLE9BQU8sQ0FBQztTQUNuQztRQUVEQyxhQUFhLEVBQUUsU0FBQ1AsS0FBVSxFQUFFQyxNQUFXLEVBQUs7WUFDMUNELEtBQUssQ0FBQ1AsTUFBTSxHQUFHUSxNQUFNLENBQUNLLE9BQU8sQ0FBQztTQUMvQjtRQUNERSxZQUFZLEVBQUUsU0FBQ1IsS0FBVSxFQUFFQyxNQUFXLEVBQUs7WUFDekNELEtBQUssQ0FBQ0wsZUFBZSxHQUFHTSxNQUFNLENBQUNLLE9BQU8sQ0FBQztTQUN4QztLQUNGO0NBQ0YsQ0FBQyxDQUFDO0lBT0NWLFFBQW9CLEdBQXBCQSxZQUFZLENBQUNhLE9BQU87QUFMakIsSUFDTFYsbUJBQW1CLEdBSWpCSCxRQUFvQixDQUp0QkcsbUJBQW1CLEVBQ25CSSxhQUFhLEdBR1hQLFFBQW9CLENBSHRCTyxhQUFhLEVBQ2JJLGFBQWEsR0FFWFgsUUFBb0IsQ0FGdEJXLGFBQWEsRUFDYkYsaUJBQWlCLEdBQ2ZULFFBQW9CLENBRHRCUyxpQkFBaUIsQ0FDTTtBQUN6QixJQUFNSyxXQUFXLEdBQUdkLFlBQVksQ0FBQ2UsT0FBTztBQUN4QywrREFBZUQsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3N0eWxlLXNsaWNlL2dlbmVyYWwtc3R5bGUvR2VucmVhbFN0eWxlLnRzP2E2NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIFdpbmRvd0hlaWdodDogODAwLFxyXG4gIHBvcFVwcDogZmFsc2UsXHJcbiAgcG9wVXBwRGF0YToge30sXHJcbiAgc2lnblVwOiB0cnVlLFxyXG4gIGZvcm1TaWduVXA6IGZhbHNlLFxyXG4gIGNvb2tpZUNvbnRhaW5lcjogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR2VuZXJhbFN0eWxlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiZ2VuZXJhbC1zdHlsZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgV2luZG93SGVpZ2h0UmVkY3VlcjogKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgIHN0YXRlLldpbmRvd0hlaWdodCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHBvUFVwcFJlZGN1ZXI6IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXN0YXRlLnBvcFVwcCkge1xyXG4gICAgICAgIHN0YXRlLnBvcFVwcCA9IHRydWU7XHJcbiAgICAgICAgc3RhdGUucG9wVXBwRGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUucG9wVXBwID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWR1Y2VyRm9ybVNpZ25VcDogKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgIHN0YXRlLmZvcm1TaWduVXAgPSBhY3Rpb24ucGF5bGFvZDtcclxuICAgIH0sXHJcblxyXG4gICAgcmVkdWNlclNpZ25VcDogKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgIHN0YXRlLnNpZ25VcCA9IGFjdGlvbi5wYXlsYW9kO1xyXG4gICAgfSxcclxuICAgIHRvZ2dsZUNvb2tpZTogKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XHJcbiAgICAgIHN0YXRlLmNvb2tpZUNvbnRhaW5lciA9IGFjdGlvbi5wYXlsYW9kO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7XHJcbiAgV2luZG93SGVpZ2h0UmVkY3VlcixcclxuICBwb1BVcHBSZWRjdWVyLFxyXG4gIHJlZHVjZXJTaWduVXAsXHJcbiAgcmVkdWNlckZvcm1TaWduVXAsXHJcbn0gPSBHZW5lcmFsU3R5bGUuYWN0aW9ucztcclxuY29uc3QgQWxsUmVkdWNlcnMgPSBHZW5lcmFsU3R5bGUucmVkdWNlcjtcclxuZXhwb3J0IGRlZmF1bHQgQWxsUmVkdWNlcnM7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIldpbmRvd0hlaWdodCIsInBvcFVwcCIsInBvcFVwcERhdGEiLCJzaWduVXAiLCJmb3JtU2lnblVwIiwiY29va2llQ29udGFpbmVyIiwiR2VuZXJhbFN0eWxlIiwibmFtZSIsInJlZHVjZXJzIiwiV2luZG93SGVpZ2h0UmVkY3VlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInBvUFVwcFJlZGN1ZXIiLCJkYXRhIiwicmVkdWNlckZvcm1TaWduVXAiLCJwYXlsYW9kIiwicmVkdWNlclNpZ25VcCIsInRvZ2dsZUNvb2tpZSIsImFjdGlvbnMiLCJBbGxSZWR1Y2VycyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/style-slice/general-style/GenrealStyle.ts\n"));

/***/ })

});