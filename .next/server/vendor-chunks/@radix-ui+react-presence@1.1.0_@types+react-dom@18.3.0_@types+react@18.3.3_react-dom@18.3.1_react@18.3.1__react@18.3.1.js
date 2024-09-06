"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-presence@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1";
exports.ids = ["vendor-chunks/@radix-ui+react-presence@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-presence@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Presence: () => (/* binding */ Presence)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.2.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/react-compose-refs */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs\");\n/* harmony import */ var _radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-use-layout-effect */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.0_@types+react@18.3.3_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ Presence auto */ // packages/react/presence/src/Presence.tsx\n\n\n\n\n// packages/react/presence/src/useStateMachine.tsx\n\nfunction useStateMachine(initialState, machine) {\n    return react__WEBPACK_IMPORTED_MODULE_0__.useReducer((state, event)=>{\n        const nextState = machine[state][event];\n        return nextState ?? state;\n    }, initialState);\n}\n// packages/react/presence/src/Presence.tsx\nvar Presence = (props)=>{\n    const { present, children } = props;\n    const presence = usePresence(present);\n    const child = typeof children === \"function\" ? children({\n        present: presence.isPresent\n    }) : react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children);\n    const ref = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.useComposedRefs)(presence.ref, getElementRef(child));\n    const forceMount = typeof children === \"function\";\n    return forceMount || presence.isPresent ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {\n        ref\n    }) : null;\n};\nPresence.displayName = \"Presence\";\nfunction usePresence(present) {\n    const [node, setNode] = react__WEBPACK_IMPORTED_MODULE_0__.useState();\n    const stylesRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});\n    const prevPresentRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(present);\n    const prevAnimationNameRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(\"none\");\n    const initialState = present ? \"mounted\" : \"unmounted\";\n    const [state, send] = useStateMachine(initialState, {\n        mounted: {\n            UNMOUNT: \"unmounted\",\n            ANIMATION_OUT: \"unmountSuspended\"\n        },\n        unmountSuspended: {\n            MOUNT: \"mounted\",\n            ANIMATION_END: \"unmounted\"\n        },\n        unmounted: {\n            MOUNT: \"mounted\"\n        }\n    });\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{\n        const currentAnimationName = getAnimationName(stylesRef.current);\n        prevAnimationNameRef.current = state === \"mounted\" ? currentAnimationName : \"none\";\n    }, [\n        state\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        const styles = stylesRef.current;\n        const wasPresent = prevPresentRef.current;\n        const hasPresentChanged = wasPresent !== present;\n        if (hasPresentChanged) {\n            const prevAnimationName = prevAnimationNameRef.current;\n            const currentAnimationName = getAnimationName(styles);\n            if (present) {\n                send(\"MOUNT\");\n            } else if (currentAnimationName === \"none\" || styles?.display === \"none\") {\n                send(\"UNMOUNT\");\n            } else {\n                const isAnimating = prevAnimationName !== currentAnimationName;\n                if (wasPresent && isAnimating) {\n                    send(\"ANIMATION_OUT\");\n                } else {\n                    send(\"UNMOUNT\");\n                }\n            }\n            prevPresentRef.current = present;\n        }\n    }, [\n        present,\n        send\n    ]);\n    (0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{\n        if (node) {\n            const handleAnimationEnd = (event)=>{\n                const currentAnimationName = getAnimationName(stylesRef.current);\n                const isCurrentAnimation = currentAnimationName.includes(event.animationName);\n                if (event.target === node && isCurrentAnimation) {\n                    react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(()=>send(\"ANIMATION_END\"));\n                }\n            };\n            const handleAnimationStart = (event)=>{\n                if (event.target === node) {\n                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);\n                }\n            };\n            node.addEventListener(\"animationstart\", handleAnimationStart);\n            node.addEventListener(\"animationcancel\", handleAnimationEnd);\n            node.addEventListener(\"animationend\", handleAnimationEnd);\n            return ()=>{\n                node.removeEventListener(\"animationstart\", handleAnimationStart);\n                node.removeEventListener(\"animationcancel\", handleAnimationEnd);\n                node.removeEventListener(\"animationend\", handleAnimationEnd);\n            };\n        } else {\n            send(\"ANIMATION_END\");\n        }\n    }, [\n        node,\n        send\n    ]);\n    return {\n        isPresent: [\n            \"mounted\",\n            \"unmountSuspended\"\n        ].includes(state),\n        ref: react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node2)=>{\n            if (node2) stylesRef.current = getComputedStyle(node2);\n            setNode(node2);\n        }, [])\n    };\n}\nfunction getAnimationName(styles) {\n    return styles?.animationName || \"none\";\n}\nfunction getElementRef(element) {\n    let getter = Object.getOwnPropertyDescriptor(element.props, \"ref\")?.get;\n    let mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.ref;\n    }\n    getter = Object.getOwnPropertyDescriptor(element, \"ref\")?.get;\n    mayWarn = getter && \"isReactWarning\" in getter && getter.isReactWarning;\n    if (mayWarn) {\n        return element.props.ref;\n    }\n    return element.props.ref || element.ref;\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByZXNlbmNlQDEuMS4wX0B0eXBlcytyZWFjdC1kb21AMTguMy4wX0B0eXBlcytyZWFjdEAxOC4zLjNfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByZXNlbmNlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1QjtBQUNHO0FBQ007QUFDQTs7QUNIVDtBQVdoQixTQUFTSSxnQkFDZEMsWUFBQSxFQUNBQyxPQUFBO0lBRUEsT0FBYU4sNkNBQUEsQ0FBVyxDQUFDUSxPQUF3QkM7UUFDL0MsTUFBTUMsWUFBYUosT0FBQSxDQUFRRSxNQUFLLENBQVVDLE1BQUs7UUFDL0MsT0FBT0MsYUFBYUY7SUFDdEIsR0FBR0g7QUFDTDs7QURSQSxJQUFNTSxXQUFvQyxDQUFDQztJQUN6QyxNQUFNLEVBQUVDLE9BQUEsRUFBU0MsUUFBQSxFQUFTLEdBQUlGO0lBQzlCLE1BQU1HLFdBQVdDLFlBQVlIO0lBRTdCLE1BQU1JLFFBQ0osT0FBT0gsYUFBYSxhQUNoQkEsU0FBUztRQUFFRCxTQUFTRSxTQUFTRyxTQUFBO0lBQVUsS0FDakNDLDJDQUFBLENBQVNFLElBQUEsQ0FBS1A7SUFHMUIsTUFBTVEsTUFBTXBCLDZFQUFlQSxDQUFDYSxTQUFTTyxHQUFBLEVBQUtDLGNBQWNOO0lBQ3hELE1BQU1PLGFBQWEsT0FBT1YsYUFBYTtJQUN2QyxPQUFPVSxjQUFjVCxTQUFTRyxTQUFBLGlCQUFrQkMsK0NBQUEsQ0FBYUYsT0FBTztRQUFFSztJQUFJLEtBQUs7QUFDakY7QUFFQVgsU0FBU2UsV0FBQSxHQUFjO0FBTXZCLFNBQVNWLFlBQVlILE9BQUE7SUFDbkIsTUFBTSxDQUFDYyxNQUFNQyxRQUFPLEdBQVVULDJDQUFBO0lBQzlCLE1BQU1XLFlBQWtCWCx5Q0FBQSxDQUE0QixDQUFDO0lBQ3JELE1BQU1h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QSxVQUFVQSxPQUFPSyxjQUFBO0lBQzdELElBQUlELFNBQVM7UUFDWCxPQUFRTCxRQUFnQnpDLEdBQUE7SUFDMUI7SUFHQTBDLFNBQVNDLE9BQU9DLHdCQUFBLENBQXlCSCxTQUFTLFFBQVFJO0lBQzFEQyxVQUFVSixVQUFVLG9CQUFvQkEsVUFBVUEsT0FBT0ssY0FBQTtJQUN6RCxJQUFJRCxTQUFTO1FBQ1gsT0FBT0wsUUFBUW5ELEtBQUEsQ0FBTVUsR0FBQTtJQUN2QjtJQUdBLE9BQU95QyxRQUFRbkQsS0FBQSxDQUFNVSxHQUFBLElBQVF5QyxRQUFnQnpDLEdBQUE7QUFDL0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLXB3aC1ibG9nLy4uL3NyYy9QcmVzZW5jZS50c3g/OGIzOSIsIndlYnBhY2s6Ly9hd2Vzb21lLXB3aC1ibG9nLy4uL3NyYy91c2VTdGF0ZU1hY2hpbmUudHN4P2EzMjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IHVzZUNvbXBvc2VkUmVmcyB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1jb21wb3NlLXJlZnMnO1xuaW1wb3J0IHsgdXNlTGF5b3V0RWZmZWN0IH0gZnJvbSAnQHJhZGl4LXVpL3JlYWN0LXVzZS1sYXlvdXQtZWZmZWN0JztcbmltcG9ydCB7IHVzZVN0YXRlTWFjaGluZSB9IGZyb20gJy4vdXNlU3RhdGVNYWNoaW5lJztcblxuaW50ZXJmYWNlIFByZXNlbmNlUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50IHwgKChwcm9wczogeyBwcmVzZW50OiBib29sZWFuIH0pID0+IFJlYWN0LlJlYWN0RWxlbWVudCk7XG4gIHByZXNlbnQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IFByZXNlbmNlOiBSZWFjdC5GQzxQcmVzZW5jZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByZXNlbnQsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3QgcHJlc2VuY2UgPSB1c2VQcmVzZW5jZShwcmVzZW50KTtcblxuICBjb25zdCBjaGlsZCA9IChcbiAgICB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbidcbiAgICAgID8gY2hpbGRyZW4oeyBwcmVzZW50OiBwcmVzZW5jZS5pc1ByZXNlbnQgfSlcbiAgICAgIDogUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgKSBhcyBSZWFjdC5SZWFjdEVsZW1lbnQ7XG5cbiAgY29uc3QgcmVmID0gdXNlQ29tcG9zZWRSZWZzKHByZXNlbmNlLnJlZiwgZ2V0RWxlbWVudFJlZihjaGlsZCkpO1xuICBjb25zdCBmb3JjZU1vdW50ID0gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gZm9yY2VNb3VudCB8fCBwcmVzZW5jZS5pc1ByZXNlbnQgPyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgcmVmIH0pIDogbnVsbDtcbn07XG5cblByZXNlbmNlLmRpc3BsYXlOYW1lID0gJ1ByZXNlbmNlJztcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogdXNlUHJlc2VuY2VcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gdXNlUHJlc2VuY2UocHJlc2VudDogYm9vbGVhbikge1xuICBjb25zdCBbbm9kZSwgc2V0Tm9kZV0gPSBSZWFjdC51c2VTdGF0ZTxIVE1MRWxlbWVudD4oKTtcbiAgY29uc3Qgc3R5bGVzUmVmID0gUmVhY3QudXNlUmVmPENTU1N0eWxlRGVjbGFyYXRpb24+KHt9IGFzIGFueSk7XG4gIGNvbnN0IHByZXZQcmVzZW50UmVmID0gUmVhY3QudXNlUmVmKHByZXNlbnQpO1xuICBjb25zdCBwcmV2QW5pbWF0aW9uTmFtZVJlZiA9IFJlYWN0LnVzZVJlZjxzdHJpbmc+KCdub25lJyk7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHByZXNlbnQgPyAnbW91bnRlZCcgOiAndW5tb3VudGVkJztcbiAgY29uc3QgW3N0YXRlLCBzZW5kXSA9IHVzZVN0YXRlTWFjaGluZShpbml0aWFsU3RhdGUsIHtcbiAgICBtb3VudGVkOiB7XG4gICAgICBVTk1PVU5UOiAndW5tb3VudGVkJyxcbiAgICAgIEFOSU1BVElPTl9PVVQ6ICd1bm1vdW50U3VzcGVuZGVkJyxcbiAgICB9LFxuICAgIHVubW91bnRTdXNwZW5kZWQ6IHtcbiAgICAgIE1PVU5UOiAnbW91bnRlZCcsXG4gICAgICBBTklNQVRJT05fRU5EOiAndW5tb3VudGVkJyxcbiAgICB9LFxuICAgIHVubW91bnRlZDoge1xuICAgICAgTU9VTlQ6ICdtb3VudGVkJyxcbiAgICB9LFxuICB9KTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudCA9IHN0YXRlID09PSAnbW91bnRlZCcgPyBjdXJyZW50QW5pbWF0aW9uTmFtZSA6ICdub25lJztcbiAgfSwgW3N0YXRlXSk7XG5cbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdHlsZXMgPSBzdHlsZXNSZWYuY3VycmVudDtcbiAgICBjb25zdCB3YXNQcmVzZW50ID0gcHJldlByZXNlbnRSZWYuY3VycmVudDtcbiAgICBjb25zdCBoYXNQcmVzZW50Q2hhbmdlZCA9IHdhc1ByZXNlbnQgIT09IHByZXNlbnQ7XG5cbiAgICBpZiAoaGFzUHJlc2VudENoYW5nZWQpIHtcbiAgICAgIGNvbnN0IHByZXZBbmltYXRpb25OYW1lID0gcHJldkFuaW1hdGlvbk5hbWVSZWYuY3VycmVudDtcbiAgICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXMpO1xuXG4gICAgICBpZiAocHJlc2VudCkge1xuICAgICAgICBzZW5kKCdNT1VOVCcpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50QW5pbWF0aW9uTmFtZSA9PT0gJ25vbmUnIHx8IHN0eWxlcz8uZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGV4aXQgYW5pbWF0aW9uIG9yIHRoZSBlbGVtZW50IGlzIGhpZGRlbiwgYW5pbWF0aW9ucyB3b24ndCBydW5cbiAgICAgICAgLy8gc28gd2UgdW5tb3VudCBpbnN0YW50bHlcbiAgICAgICAgc2VuZCgnVU5NT1VOVCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdoZW4gYHByZXNlbnRgIGNoYW5nZXMgdG8gYGZhbHNlYCwgd2UgY2hlY2sgY2hhbmdlcyB0byBhbmltYXRpb24tbmFtZSB0b1xuICAgICAgICAgKiBkZXRlcm1pbmUgd2hldGhlciBhbiBhbmltYXRpb24gaGFzIHN0YXJ0ZWQuIFdlIGNob3NlIHRoaXMgYXBwcm9hY2ggKHJlYWRpbmdcbiAgICAgICAgICogY29tcHV0ZWQgc3R5bGVzKSBiZWNhdXNlIHRoZXJlIGlzIG5vIGBhbmltYXRpb25ydW5gIGV2ZW50IGFuZCBgYW5pbWF0aW9uc3RhcnRgXG4gICAgICAgICAqIGZpcmVzIGFmdGVyIGBhbmltYXRpb24tZGVsYXlgIGhhcyBleHBpcmVkIHdoaWNoIHdvdWxkIGJlIHRvbyBsYXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgaXNBbmltYXRpbmcgPSBwcmV2QW5pbWF0aW9uTmFtZSAhPT0gY3VycmVudEFuaW1hdGlvbk5hbWU7XG5cbiAgICAgICAgaWYgKHdhc1ByZXNlbnQgJiYgaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICBzZW5kKCdBTklNQVRJT05fT1VUJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VuZCgnVU5NT1VOVCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZXZQcmVzZW50UmVmLmN1cnJlbnQgPSBwcmVzZW50O1xuICAgIH1cbiAgfSwgW3ByZXNlbnQsIHNlbmRdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICAvKipcbiAgICAgICAqIFRyaWdnZXJpbmcgYW4gQU5JTUFUSU9OX09VVCBkdXJpbmcgYW4gQU5JTUFUSU9OX0lOIHdpbGwgZmlyZSBhbiBgYW5pbWF0aW9uY2FuY2VsYFxuICAgICAgICogZXZlbnQgZm9yIEFOSU1BVElPTl9JTiBhZnRlciB3ZSBoYXZlIGVudGVyZWQgYHVubW91bnRTdXNwZW5kZWRgIHN0YXRlLiBTbywgd2VcbiAgICAgICAqIG1ha2Ugc3VyZSB3ZSBvbmx5IHRyaWdnZXIgQU5JTUFUSU9OX0VORCBmb3IgdGhlIGN1cnJlbnRseSBhY3RpdmUgYW5pbWF0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCBoYW5kbGVBbmltYXRpb25FbmQgPSAoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBbmltYXRpb25OYW1lID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgICAgIGNvbnN0IGlzQ3VycmVudEFuaW1hdGlvbiA9IGN1cnJlbnRBbmltYXRpb25OYW1lLmluY2x1ZGVzKGV2ZW50LmFuaW1hdGlvbk5hbWUpO1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBub2RlICYmIGlzQ3VycmVudEFuaW1hdGlvbikge1xuICAgICAgICAgIC8vIFdpdGggUmVhY3QgMTggY29uY3VycmVuY3kgdGhpcyB1cGRhdGUgaXMgYXBwbGllZFxuICAgICAgICAgIC8vIGEgZnJhbWUgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBlbmRzLCBjcmVhdGluZyBhIGZsYXNoIG9mIHZpc2libGUgY29udGVudC5cbiAgICAgICAgICAvLyBCeSBtYW51YWxseSBmbHVzaGluZyB3ZSBlbnN1cmUgdGhleSBzeW5jIHdpdGhpbiBhIGZyYW1lLCByZW1vdmluZyB0aGUgZmxhc2guXG4gICAgICAgICAgUmVhY3RET00uZmx1c2hTeW5jKCgpID0+IHNlbmQoJ0FOSU1BVElPTl9FTkQnKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBoYW5kbGVBbmltYXRpb25TdGFydCA9IChldmVudDogQW5pbWF0aW9uRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbm9kZSkge1xuICAgICAgICAgIC8vIGlmIGFuaW1hdGlvbiBvY2N1cnJlZCwgc3RvcmUgaXRzIG5hbWUgYXMgdGhlIHByZXZpb3VzIGFuaW1hdGlvbi5cbiAgICAgICAgICBwcmV2QW5pbWF0aW9uTmFtZVJlZi5jdXJyZW50ID0gZ2V0QW5pbWF0aW9uTmFtZShzdHlsZXNSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbnN0YXJ0JywgaGFuZGxlQW5pbWF0aW9uU3RhcnQpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25jYW5jZWwnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25zdGFydCcsIGhhbmRsZUFuaW1hdGlvblN0YXJ0KTtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25jYW5jZWwnLCBoYW5kbGVBbmltYXRpb25FbmQpO1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGhhbmRsZUFuaW1hdGlvbkVuZCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSB1bm1vdW50ZWQgc3RhdGUgaWYgdGhlIG5vZGUgaXMgcmVtb3ZlZCBwcmVtYXR1cmVseS5cbiAgICAgIC8vIFdlIGF2b2lkIGRvaW5nIHNvIGR1cmluZyBjbGVhbnVwIGFzIHRoZSBub2RlIG1heSBjaGFuZ2UgYnV0IHN0aWxsIGV4aXN0LlxuICAgICAgc2VuZCgnQU5JTUFUSU9OX0VORCcpO1xuICAgIH1cbiAgfSwgW25vZGUsIHNlbmRdKTtcblxuICByZXR1cm4ge1xuICAgIGlzUHJlc2VudDogWydtb3VudGVkJywgJ3VubW91bnRTdXNwZW5kZWQnXS5pbmNsdWRlcyhzdGF0ZSksXG4gICAgcmVmOiBSZWFjdC51c2VDYWxsYmFjaygobm9kZTogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChub2RlKSBzdHlsZXNSZWYuY3VycmVudCA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICBzZXROb2RlKG5vZGUpO1xuICAgIH0sIFtdKSxcbiAgfTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiBnZXRBbmltYXRpb25OYW1lKHN0eWxlcz86IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcbiAgcmV0dXJuIHN0eWxlcz8uYW5pbWF0aW9uTmFtZSB8fCAnbm9uZSc7XG59XG5cbi8vIEJlZm9yZSBSZWFjdCAxOSBhY2Nlc3NpbmcgYGVsZW1lbnQucHJvcHMucmVmYCB3aWxsIHRocm93IGEgd2FybmluZyBhbmQgc3VnZ2VzdCB1c2luZyBgZWxlbWVudC5yZWZgXG4vLyBBZnRlciBSZWFjdCAxOSBhY2Nlc3NpbmcgYGVsZW1lbnQucmVmYCBkb2VzIHRoZSBvcHBvc2l0ZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzI4MzQ4XG4vL1xuLy8gQWNjZXNzIHRoZSByZWYgdXNpbmcgdGhlIG1ldGhvZCB0aGF0IGRvZXNuJ3QgeWllbGQgYSB3YXJuaW5nLlxuZnVuY3Rpb24gZ2V0RWxlbWVudFJlZihlbGVtZW50OiBSZWFjdC5SZWFjdEVsZW1lbnQpIHtcbiAgLy8gUmVhY3QgPD0xOCBpbiBERVZcbiAgbGV0IGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZWxlbWVudC5wcm9wcywgJ3JlZicpPy5nZXQ7XG4gIGxldCBtYXlXYXJuID0gZ2V0dGVyICYmICdpc1JlYWN0V2FybmluZycgaW4gZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZztcbiAgaWYgKG1heVdhcm4pIHtcbiAgICByZXR1cm4gKGVsZW1lbnQgYXMgYW55KS5yZWY7XG4gIH1cblxuICAvLyBSZWFjdCAxOSBpbiBERVZcbiAgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlbGVtZW50LCAncmVmJyk/LmdldDtcbiAgbWF5V2FybiA9IGdldHRlciAmJiAnaXNSZWFjdFdhcm5pbmcnIGluIGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmc7XG4gIGlmIChtYXlXYXJuKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucHJvcHMucmVmO1xuICB9XG5cbiAgLy8gTm90IERFVlxuICByZXR1cm4gZWxlbWVudC5wcm9wcy5yZWYgfHwgKGVsZW1lbnQgYXMgYW55KS5yZWY7XG59XG5cbmV4cG9ydCB7IFByZXNlbmNlIH07XG5leHBvcnQgdHlwZSB7IFByZXNlbmNlUHJvcHMgfTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudHlwZSBNYWNoaW5lPFM+ID0geyBbazogc3RyaW5nXTogeyBbazogc3RyaW5nXTogUyB9IH07XG50eXBlIE1hY2hpbmVTdGF0ZTxUPiA9IGtleW9mIFQ7XG50eXBlIE1hY2hpbmVFdmVudDxUPiA9IGtleW9mIFVuaW9uVG9JbnRlcnNlY3Rpb248VFtrZXlvZiBUXT47XG5cbi8vIPCfpK8gaHR0cHM6Ly9mZXR0YmxvZy5ldS90eXBlc2NyaXB0LXVuaW9uLXRvLWludGVyc2VjdGlvbi9cbnR5cGUgVW5pb25Ub0ludGVyc2VjdGlvbjxUPiA9IChUIGV4dGVuZHMgYW55ID8gKHg6IFQpID0+IGFueSA6IG5ldmVyKSBleHRlbmRzICh4OiBpbmZlciBSKSA9PiBhbnlcbiAgPyBSXG4gIDogbmV2ZXI7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZU1hY2hpbmU8TT4oXG4gIGluaXRpYWxTdGF0ZTogTWFjaGluZVN0YXRlPE0+LFxuICBtYWNoaW5lOiBNICYgTWFjaGluZTxNYWNoaW5lU3RhdGU8TT4+XG4pIHtcbiAgcmV0dXJuIFJlYWN0LnVzZVJlZHVjZXIoKHN0YXRlOiBNYWNoaW5lU3RhdGU8TT4sIGV2ZW50OiBNYWNoaW5lRXZlbnQ8TT4pOiBNYWNoaW5lU3RhdGU8TT4gPT4ge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IChtYWNoaW5lW3N0YXRlXSBhcyBhbnkpW2V2ZW50XTtcbiAgICByZXR1cm4gbmV4dFN0YXRlID8/IHN0YXRlO1xuICB9LCBpbml0aWFsU3RhdGUpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJ1c2VDb21wb3NlZFJlZnMiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VTdGF0ZU1hY2hpbmUiLCJpbml0aWFsU3RhdGUiLCJtYWNoaW5lIiwidXNlUmVkdWNlciIsInN0YXRlIiwiZXZlbnQiLCJuZXh0U3RhdGUiLCJQcmVzZW5jZSIsInByb3BzIiwicHJlc2VudCIsImNoaWxkcmVuIiwicHJlc2VuY2UiLCJ1c2VQcmVzZW5jZSIsImNoaWxkIiwiaXNQcmVzZW50IiwiUmVhY3QyIiwiQ2hpbGRyZW4iLCJvbmx5IiwicmVmIiwiZ2V0RWxlbWVudFJlZiIsImZvcmNlTW91bnQiLCJjbG9uZUVsZW1lbnQiLCJkaXNwbGF5TmFtZSIsIm5vZGUiLCJzZXROb2RlIiwidXNlU3RhdGUiLCJzdHlsZXNSZWYiLCJ1c2VSZWYiLCJwcmV2UHJlc2VudFJlZiIsInByZXZBbmltYXRpb25OYW1lUmVmIiwic2VuZCIsIm1vdW50ZWQiLCJVTk1PVU5UIiwiQU5JTUFUSU9OX09VVCIsInVubW91bnRTdXNwZW5kZWQiLCJNT1VOVCIsIkFOSU1BVElPTl9FTkQiLCJ1bm1vdW50ZWQiLCJ1c2VFZmZlY3QiLCJjdXJyZW50QW5pbWF0aW9uTmFtZSIsImdldEFuaW1hdGlvbk5hbWUiLCJjdXJyZW50Iiwic3R5bGVzIiwid2FzUHJlc2VudCIsImhhc1ByZXNlbnRDaGFuZ2VkIiwicHJldkFuaW1hdGlvbk5hbWUiLCJkaXNwbGF5IiwiaXNBbmltYXRpbmciLCJoYW5kbGVBbmltYXRpb25FbmQiLCJpc0N1cnJlbnRBbmltYXRpb24iLCJpbmNsdWRlcyIsImFuaW1hdGlvbk5hbWUiLCJ0YXJnZXQiLCJmbHVzaFN5bmMiLCJoYW5kbGVBbmltYXRpb25TdGFydCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlQ2FsbGJhY2siLCJnZXRDb21wdXRlZFN0eWxlIiwiZWxlbWVudCIsImdldHRlciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldCIsIm1heVdhcm4iLCJpc1JlYWN0V2FybmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-presence@1.1.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs\n");

/***/ })

};
;