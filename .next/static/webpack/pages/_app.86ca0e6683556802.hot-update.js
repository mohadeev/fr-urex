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

/***/ "./layout/header/SideMenu.tsx":
/*!************************************!*\
  !*** ./layout/header/SideMenu.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/layout/header/header-compnents/side-menu.module.css */ \"./styles/layout/header/header-compnents/side-menu.module.css\");\n/* harmony import */ var _styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_style_slice_menu_SideMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/style-slice/menu/SideMenu */ \"./redux/style-slice/menu/SideMenu.ts\");\n/* harmony import */ var _header_components_SearchInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header-components/SearchInput */ \"./layout/header/header-components/SearchInput.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modals/HeaderText */ \"./components/modals/HeaderText.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SideMenu = function() {\n    var _this1 = _this;\n    _s();\n    var Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var UserIsSignedIn = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.UserSignIn.UserIsSignedIn;\n    });\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var handelToggleMenu = function() {\n        dispatch((0,_redux_style_slice_menu_SideMenu__WEBPACK_IMPORTED_MODULE_3__.ToggleMenu)());\n    };\n    var HandelClick = function(link) {\n        Router.push(link);\n        handelToggleMenu();\n    };\n    var dropDownItems = [\n        {\n            name: \"Tours\",\n            link: \"/tours\"\n        },\n        {\n            name: \"Excursions\",\n            link: \"/excursions\"\n        },\n        {\n            name: \"Destinations\",\n            link: \"/destinations\"\n        },\n        {\n            name: \"Contact\",\n            link: \"/contact\"\n        },\n        {\n            name: \"Log-in\"\n        },\n        {\n            name: \"Sing-up\"\n        },\n        {\n            name: \"History\"\n        },\n        {\n            name: \"Setting\"\n        },\n        {\n            name: \" Terms & Conditions\",\n            link: \"terms-and-onditions\"\n        },\n        {\n            name: \" Privacy Policy\",\n            link: \"privacy-policy\"\n        },\n        {\n            name: \"Cookies\",\n            link: \"cookies\"\n        }, \n    ];\n    var first = dropDownItems.slice(0, 4);\n    var second = dropDownItems.slice(5, 8);\n    var last = dropDownItems.slice(8, 11);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().main_containet),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().menu_container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().container_search),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_header_components_SearchInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().container_secoond),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal_container),\n                                    children: first.map(function(param) {\n                                        var name = param.name, link = param.link;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: function() {\n                                                link && HandelClick(link);\n                                            },\n                                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().link_container),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__.HeaderText, {\n                                                Text: name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal_container),\n                                    children: second.map(function(param) {\n                                        var name = param.name, link = param.link;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                link && HandelClick(link);\n                                            },\n                                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().link_container),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__.HeaderText, {\n                                                Text: name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().modal_container),\n                                    children: last.map(function(param) {\n                                        var name = param.name, link = param.link;\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                link && HandelClick(link);\n                                            },\n                                            className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().link_container),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_HeaderText__WEBPACK_IMPORTED_MODULE_6__.HeaderText, {\n                                                Text: name\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: handelToggleMenu,\n                    className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().rest_container),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_layout_header_header_compnents_side_menu_module_css__WEBPACK_IMPORTED_MODULE_7___default().meun),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IoCloseOutline, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\GERARDO\\\\Desktop\\\\my-apps\\\\fe-urex\\\\layout\\\\header\\\\SideMenu.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_s(SideMenu, \"rMH9DKIGomge9dbnnEsnMfx0UMA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = SideMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideMenu);\nvar _c;\n$RefreshReg$(_c, \"SideMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDR0Ysa0RBQVM7UUFDREgsb0RBQVc7UUFHakJELG9EQUFXOzs7QUFMeEJNLEtBQUFBLFFBQVE7QUE4RmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9sYXlvdXQvaGVhZGVyL1NpZGVNZW51LnRzeD81YjIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvbGF5b3V0L2hlYWRlci9oZWFkZXItY29tcG5lbnRzL3NpZGUtbWVudS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBNeUFjY291bnQgZnJvbSBcIi4vaGVhZGVyLWNvbXBvbmVudHMvTXlBY2NvdW50XCI7XHJcbmltcG9ydCBCb29raW5ncyBmcm9tIFwiLi9oZWFkZXItY29tcG9uZW50cy9Cb29raW5nc1wiO1xyXG5pbXBvcnQgV2lzaExpc3QgZnJvbSBcIi4vaGVhZGVyLWNvbXBvbmVudHMvV2lzaExpc3RcIjtcclxuaW1wb3J0IExhbmdBbmRDdXJyZW5jeSBmcm9tIFwiLi9oZWFkZXItY29tcG9uZW50cy9MYW5nQW5kQ3VycmVuY3lcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3ksIExhbmcgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvTGFuZ0N1cnJlbmN5XCI7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnQgZnJvbSBcIi4vaGVhZGVyLWNvbXBvbmVudHMvU2hvcHBpbmdDYXJ0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBUb2dnbGVNZW51IH0gZnJvbSBcIi4uLy4uL3JlZHV4L3N0eWxlLXNsaWNlL21lbnUvU2lkZU1lbnVcIjtcclxuaW1wb3J0IHsgSW9DbG9zZUNpcmNsZU91dGxpbmUgfSBmcm9tIFwiQHJlYWN0LWljb25zL2FsbC1maWxlcy9pbzUvSW9DbG9zZUNpcmNsZU91dGxpbmVcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuL2hlYWRlci1jb21wb25lbnRzL1NlYXJjaElucHV0XCI7XHJcbmltcG9ydCB7IFBhcmFncmFwaHNQIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL05vcm1hbFRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEhlYWRlclRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvSGVhZGVyVGV4dFwiO1xyXG5jb25zdCBTaWRlTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBVc2VySXNTaWduZWRJbiA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBhbnkpID0+IHN0YXRlLlVzZXJTaWduSW4uVXNlcklzU2lnbmVkSW5cclxuICApO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBoYW5kZWxUb2dnbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goVG9nZ2xlTWVudSgpKTtcclxuICB9O1xyXG4gIGNvbnN0IEhhbmRlbENsaWNrID0gKGxpbms6IGFueSkgPT4ge1xyXG4gICAgUm91dGVyLnB1c2gobGluayk7XHJcbiAgICBoYW5kZWxUb2dnbGVNZW51KCk7XHJcbiAgfTtcclxuICBjb25zdCBkcm9wRG93bkl0ZW1zID0gW1xyXG4gICAgeyBuYW1lOiBcIlRvdXJzXCIsIGxpbms6IFwiL3RvdXJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJFeGN1cnNpb25zXCIsIGxpbms6IFwiL2V4Y3Vyc2lvbnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRlc3RpbmF0aW9uc1wiLCBsaW5rOiBcIi9kZXN0aW5hdGlvbnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbnRhY3RcIiwgbGluazogXCIvY29udGFjdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTG9nLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW5nLXVwXCIgfSxcclxuICAgIHsgbmFtZTogXCJIaXN0b3J5XCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXR0aW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCIgVGVybXMgJiBDb25kaXRpb25zXCIsIGxpbms6IFwidGVybXMtYW5kLW9uZGl0aW9uc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiIFByaXZhY3kgUG9saWN5XCIsIGxpbms6IFwicHJpdmFjeS1wb2xpY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvb2tpZXNcIiwgbGluazogXCJjb29raWVzXCIgfSxcclxuICBdO1xyXG4gIGNvbnN0IGZpcnN0ID0gZHJvcERvd25JdGVtcy5zbGljZSgwLCA0KTtcclxuICBjb25zdCBzZWNvbmQgPSBkcm9wRG93bkl0ZW1zLnNsaWNlKDUsIDgpO1xyXG4gIGNvbnN0IGxhc3QgPSBkcm9wRG93bkl0ZW1zLnNsaWNlKDgsIDExKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tYWluX2NvbnRhaW5ldH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1lbnVfY29udGFpbmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJfc2VhcmNofT5cclxuICAgICAgICAgICAgPFNlYXJjaElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtTdHlsZS5jb250YWluZXJfc2Vjb29uZH0+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1N0eWxlLm1vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge2ZpcnN0Lm1hcCgoeyBuYW1lLCBsaW5rIH06IGFueSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rICYmIEhhbmRlbENsaWNrKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlLmxpbmtfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dCBUZXh0PXtuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5tb2RhbF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgIHtzZWNvbmQubWFwKCh7IG5hbWUsIGxpbmsgfTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rICYmIEhhbmRlbENsaWNrKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlLmxpbmtfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIFRleHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dE5hbWU9e1widGV4dF9mbGV4X3N0YXJ0X25vcm1hbFwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLm1vZGFsX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAge2xhc3QubWFwKCh7IG5hbWUsIGxpbmsgfTogYW55KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rICYmIEhhbmRlbENsaWNrKGxpbmspO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1N0eWxlLmxpbmtfY29udGFpbmVyfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIFRleHQ9e25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGV4dE5hbWU9e1widGV4dF9mbGV4X3N0YXJ0X25vcm1hbFwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgb25DbGljaz17aGFuZGVsVG9nZ2xlTWVudX0gY2xhc3NOYW1lPXtTdHlsZS5yZXN0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1N0eWxlLm1ldW59PlxyXG4gICAgICAgICAgICA8SW9DbG9zZU91dGxpbmUgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZU1lbnU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0eWxlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlRvZ2dsZU1lbnUiLCJTZWFyY2hJbnB1dCIsInVzZVJvdXRlciIsIkhlYWRlclRleHQiLCJTaWRlTWVudSIsIlJvdXRlciIsIlVzZXJJc1NpZ25lZEluIiwic3RhdGUiLCJVc2VyU2lnbkluIiwiZGlzcGF0Y2giLCJoYW5kZWxUb2dnbGVNZW51IiwiSGFuZGVsQ2xpY2siLCJsaW5rIiwicHVzaCIsImRyb3BEb3duSXRlbXMiLCJuYW1lIiwiZmlyc3QiLCJzbGljZSIsInNlY29uZCIsImxhc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluX2NvbnRhaW5ldCIsIm1lbnVfY29udGFpbmVyIiwiY29udGFpbmVyX3NlYXJjaCIsIm5hdiIsImNvbnRhaW5lcl9zZWNvb25kIiwidWwiLCJtb2RhbF9jb250YWluZXIiLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJsaW5rX2NvbnRhaW5lciIsIlRleHQiLCJyZXN0X2NvbnRhaW5lciIsInNwYW4iLCJtZXVuIiwiSW9DbG9zZU91dGxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./layout/header/SideMenu.tsx\n"));

/***/ })

});