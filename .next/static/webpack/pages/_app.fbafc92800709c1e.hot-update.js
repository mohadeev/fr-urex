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

/***/ "./layout/footer/footer-components/NewsLatter.tsx":
/*!********************************************************!*\
  !*** ./layout/footer/footer-components/NewsLatter.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_GERARDO_Desktop_my_apps_fe_urex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_GERARDO_Desktop_my_apps_fe_urex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_GERARDO_Desktop_my_apps_fe_urex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_icons_all_files_io5_IoMailOpenOutline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-icons/all-files/io5/IoMailOpenOutline */ \"./node_modules/@react-icons/all-files/io5/IoMailOpenOutline.js\");\n/* harmony import */ var _styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/layout/footer/footer-components/news-latter.module.css */ \"./styles/layout/footer/footer-components/news-latter.module.css\");\n/* harmony import */ var _styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_basedPostUrlRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/basedPostUrlRequest */ \"./utils/basedPostUrlRequest.ts\");\n/* harmony import */ var _redux_style_slice_general_style_GenrealStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/style-slice/general-style/GenrealStyle */ \"./redux/style-slice/general-style/GenrealStyle.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _SocailMediaLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SocailMediaLinks */ \"./layout/footer/footer-components/SocailMediaLinks.jsx\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar NewsLatter = function() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var handleSubmet = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(C_Users_GERARDO_Desktop_my_apps_fe_urex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var body;\n            return C_Users_GERARDO_Desktop_my_apps_fe_urex_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        body = {\n                            email: email\n                        };\n                        _ctx.next = 3;\n                        return (0,_utils_basedPostUrlRequest__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/post/contact/news-latter\", body).then(function() {\n                            dispatch((0,_redux_style_slice_general_style_GenrealStyle__WEBPACK_IMPORTED_MODULE_4__.poPUppRedcuer)({\n                                data: \"you emaill was addec thank you\"\n                            }));\n                            setTimeout(function() {\n                                dispatch((0,_redux_style_slice_general_style_GenrealStyle__WEBPACK_IMPORTED_MODULE_4__.poPUppRedcuer)({\n                                    data: \"\"\n                                }));\n                            }, 10000);\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmet(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().newslatter_container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().newslatter),\n                    children: \"Newsletter:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().first_p),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                        className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().first_strong),\n                        children: \"Get the best deals on Active adventures!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"small\", {\n                        className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().first_small),\n                        children: \"Be the first to hear about the best Active adventure package deals, straight to your inbox.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().news_latter_form_container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_react_icons_all_files_io5_IoMailOpenOutline__WEBPACK_IMPORTED_MODULE_9__.IoMailOpenOutline, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(e) {\n                                    setEmail(e.target.value);\n                                },\n                                type: \"text\",\n                                placeholder: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: handleSubmet,\n                                children: \"Subscribe\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"small\", {\n                        className: (_styles_layout_footer_footer_components_news_latter_module_css__WEBPACK_IMPORTED_MODULE_8___default().second_small),\n                        children: \"By submitting this form, I agree to the urexcursion T&Cs and Privacy policy.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SocailMediaLinks__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\NewsLatter.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(NewsLatter, \"II6R+vsdw+jba1Y27rByPJzuzRo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch\n    ];\n});\n_c = NewsLatter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsLatter);\nvar _c;\n$RefreshReg$(_c, \"NewsLatter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci1jb21wb25lbnRzL05ld3NMYXR0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQXdDO0FBQ3lDO0FBQ1U7QUFDdEI7QUFDaUI7QUFDNUM7QUFDTzs7QUFDakQsSUFBTVEsVUFBVSxHQUFHLFdBQU07O0lBQ3ZCLElBQU1DLFFBQVEsR0FBR0gsd0RBQVcsRUFBRTtJQUM5QixJQUEwQkwsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQlMsS0FBSyxHQUFjVCxHQUFZLEdBQTFCLEVBQUVVLFFBQVEsR0FBSVYsR0FBWSxHQUFoQjtJQUN0QixJQUFNVyxZQUFZO21CQUFHLHdQQUFPQyxDQUFNLEVBQUs7Z0JBQy9CQyxJQUFJOzs7O3dCQUFKQSxJQUFJLEdBQVE7NEJBQ2hCSixLQUFLLEVBQUxBLEtBQUs7eUJBQ04sQ0FBQzs7K0JBQ0lOLHNFQUFtQixDQUFDLCtCQUErQixFQUFFVSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUNuRSxXQUFNOzRCQUNKTixRQUFRLENBQUNKLDRGQUFhLENBQUM7Z0NBQUVXLElBQUksRUFBRSxnQ0FBZ0M7NkJBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3BFQyxVQUFVLENBQUMsV0FBTTtnQ0FDZlIsUUFBUSxDQUFDSiw0RkFBYSxDQUFDO29DQUFFVyxJQUFJLEVBQUUsRUFBRTtpQ0FBRSxDQUFDLENBQUMsQ0FBQzs2QkFDdkMsRUFBRSxLQUFLLENBQUMsQ0FBQzt5QkFDWCxDQUNGOzs7Ozs7U0FDRjt3QkFaS0osWUFBWSxDQUFVQyxDQUFNOzs7T0FZakM7SUFDRCxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUVoQixpSEFBZTs7MEJBQzdCLDhEQUFDZSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVoQiw0SEFBMEI7MEJBQ3hDLDRFQUFDbUIsR0FBQztvQkFBQ0gsU0FBUyxFQUFFaEIsa0hBQWdCOzhCQUFFLGFBQVc7Ozs7O3lCQUFJOzs7OztxQkFDM0M7MEJBQ04sOERBQUNtQixHQUFDO2dCQUFDSCxTQUFTLEVBQUVoQiwrR0FBYTs7a0NBQ3pCLDhEQUFDc0IsUUFBTTt3QkFBQ04sU0FBUyxFQUFFaEIsb0hBQWtCO2tDQUFFLDBDQUV2Qzs7Ozs7NkJBQVM7a0NBQ1QsOERBQUN3QixPQUFLO3dCQUFDUixTQUFTLEVBQUVoQixtSEFBaUI7a0NBQUUsNkZBR3JDOzs7Ozs2QkFBUTs7Ozs7O3FCQUNOOzBCQUNKLDhEQUFDZSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVoQixrSUFBZ0M7O2tDQUM5Qyw4REFBQ2UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFaEIsNEdBQVU7OzBDQUN4Qiw4REFBQ0QsMkZBQWlCOzs7O3FDQUFHOzBDQUNyQiw4REFBQzZCLE9BQUs7Z0NBQ0pDLFFBQVEsRUFBRSxTQUFDbkIsQ0FBTSxFQUFLO29DQUNwQkYsUUFBUSxDQUFDRSxDQUFDLENBQUNvQixNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDO2lDQUMxQjtnQ0FDREMsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLFdBQVcsRUFBQyxPQUFPOzs7OztxQ0FDbkI7MENBQ0YsOERBQUNDLFFBQU07Z0NBQUNDLE9BQU8sRUFBRTFCLFlBQVk7MENBQUUsV0FBUzs7Ozs7cUNBQVM7Ozs7Ozs2QkFDN0M7a0NBQ04sOERBQUNlLE9BQUs7d0JBQUNSLFNBQVMsRUFBRWhCLG9IQUFrQjtrQ0FBRSw4RUFHdEM7Ozs7OzZCQUFRO2tDQUNSLDhEQUFDSSx5REFBZ0I7Ozs7NkJBQUc7Ozs7OztxQkFDaEI7Ozs7OzthQUNGLENBQ047Q0FDSDtHQWxES0MsVUFBVTs7UUFDR0Ysb0RBQVc7OztBQUR4QkUsS0FBQUEsVUFBVTtBQW9EaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci1jb21wb25lbnRzL05ld3NMYXR0ZXIudHN4PzdlYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElvTWFpbE9wZW5PdXRsaW5lIH0gZnJvbSBcIkByZWFjdC1pY29ucy9hbGwtZmlsZXMvaW81L0lvTWFpbE9wZW5PdXRsaW5lXCI7XHJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2xheW91dC9mb290ZXIvZm9vdGVyLWNvbXBvbmVudHMvbmV3cy1sYXR0ZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgYmFzZWRQb3N0VXJsUmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvYmFzZWRQb3N0VXJsUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBwb1BVcHBSZWRjdWVyIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L3N0eWxlLXNsaWNlL2dlbmVyYWwtc3R5bGUvR2VucmVhbFN0eWxlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBTb2NhaWxNZWRpYUxpbmtzIGZyb20gXCIuL1NvY2FpbE1lZGlhTGlua3NcIlxyXG5jb25zdCBOZXdzTGF0dGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1ldCA9IGFzeW5jIChlOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGJvZHk6IGFueSA9IHtcclxuICAgICAgZW1haWwsXHJcbiAgICB9O1xyXG4gICAgYXdhaXQgYmFzZWRQb3N0VXJsUmVxdWVzdChcIi9hcGkvcG9zdC9jb250YWN0L25ld3MtbGF0dGVyXCIsIGJvZHkpLnRoZW4oXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwb1BVcHBSZWRjdWVyKHsgZGF0YTogXCJ5b3UgZW1haWxsIHdhcyBhZGRlYyB0aGFuayB5b3VcIiB9KSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaChwb1BVcHBSZWRjdWVyKHsgZGF0YTogXCJcIiB9KSk7XHJcbiAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubmV3c2xhdHRlcl9jb250YWluZXJ9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17U3R5bGUubmV3c2xhdHRlcn0+TmV3c2xldHRlcjo8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e1N0eWxlLmZpcnN0X3B9PlxyXG4gICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtTdHlsZS5maXJzdF9zdHJvbmd9PlxyXG4gICAgICAgICAgR2V0IHRoZSBiZXN0IGRlYWxzIG9uIEFjdGl2ZSBhZHZlbnR1cmVzIVxyXG4gICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgIDxzbWFsbCBjbGFzc05hbWU9e1N0eWxlLmZpcnN0X3NtYWxsfT5cclxuICAgICAgICAgIEJlIHRoZSBmaXJzdCB0byBoZWFyIGFib3V0IHRoZSBiZXN0IEFjdGl2ZSBhZHZlbnR1cmUgcGFja2FnZSBkZWFscyxcclxuICAgICAgICAgIHN0cmFpZ2h0IHRvIHlvdXIgaW5ib3guXHJcbiAgICAgICAgPC9zbWFsbD5cclxuICAgICAgPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUubmV3c19sYXR0ZXJfZm9ybV9jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5mb3JtfT5cclxuICAgICAgICAgIDxJb01haWxPcGVuT3V0bGluZSAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWV0fT5TdWJzY3JpYmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c21hbGwgY2xhc3NOYW1lPXtTdHlsZS5zZWNvbmRfc21hbGx9PlxyXG4gICAgICAgICAgQnkgc3VibWl0dGluZyB0aGlzIGZvcm0sIEkgYWdyZWUgdG8gdGhlIHVyZXhjdXJzaW9uIFQmQ3MgYW5kIFByaXZhY3lcclxuICAgICAgICAgIHBvbGljeS5cclxuICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgIDxTb2NhaWxNZWRpYUxpbmtzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NMYXR0ZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW9NYWlsT3Blbk91dGxpbmUiLCJTdHlsZSIsImJhc2VkUG9zdFVybFJlcXVlc3QiLCJwb1BVcHBSZWRjdWVyIiwidXNlRGlzcGF0Y2giLCJTb2NhaWxNZWRpYUxpbmtzIiwiTmV3c0xhdHRlciIsImRpc3BhdGNoIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1ldCIsImUiLCJib2R5IiwidGhlbiIsImRhdGEiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibmV3c2xhdHRlcl9jb250YWluZXIiLCJwIiwibmV3c2xhdHRlciIsImZpcnN0X3AiLCJzdHJvbmciLCJmaXJzdF9zdHJvbmciLCJzbWFsbCIsImZpcnN0X3NtYWxsIiwibmV3c19sYXR0ZXJfZm9ybV9jb250YWluZXIiLCJmb3JtIiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInNlY29uZF9zbWFsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/footer/footer-components/NewsLatter.tsx\n"));

/***/ }),

/***/ "./layout/footer/footer-components/SocailMediaLinks.jsx":
/*!**************************************************************!*\
  !*** ./layout/footer/footer-components/SocailMediaLinks.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar SocailMediaLinks = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"SocailMediaLinks\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\footer\\\\footer-components\\\\SocailMediaLinks.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, _this);\n};\n_c = SocailMediaLinks;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SocailMediaLinks);\nvar _c;\n$RefreshReg$(_c, \"SocailMediaLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci1jb21wb25lbnRzL1NvY2FpbE1lZGlhTGlua3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQTBCO0FBRTFCLElBQU1DLGdCQUFnQixHQUFHLFdBQU07SUFDN0IscUJBQU8sOERBQUNDLEtBQUc7a0JBQUMsa0JBQWdCOzs7OzthQUFNLENBQUM7Q0FDcEM7QUFGS0QsS0FBQUEsZ0JBQWdCO0FBSXRCLCtEQUFlQSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvZm9vdGVyL2Zvb3Rlci1jb21wb25lbnRzL1NvY2FpbE1lZGlhTGlua3MuanN4PzY1ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU29jYWlsTWVkaWFMaW5rcyA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5Tb2NhaWxNZWRpYUxpbmtzPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29jYWlsTWVkaWFMaW5rcztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU29jYWlsTWVkaWFMaW5rcyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./layout/footer/footer-components/SocailMediaLinks.jsx\n"));

/***/ })

});