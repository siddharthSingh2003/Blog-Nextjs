"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit@5.0.0";
exports.ids = ["vendor-chunks/unist-util-visit@5.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTINUE: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.CONTINUE),\n/* harmony export */   EXIT: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.EXIT),\n/* harmony export */   SKIP: () => (/* reexport safe */ unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.SKIP),\n/* harmony export */   visit: () => (/* binding */ visit)\n/* harmony export */ });\n/* harmony import */ var unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-visit-parents */ \"(rsc)/./node_modules/.pnpm/unist-util-visit-parents@6.0.1/node_modules/unist-util-visit-parents/lib/index.js\");\n/**\n * @typedef {import('unist').Node} UnistNode\n * @typedef {import('unist').Parent} UnistParent\n * @typedef {import('unist-util-visit-parents').VisitorResult} VisitorResult\n */\n\n/**\n * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test\n *   Test from `unist-util-is`.\n *\n *   Note: we have remove and add `undefined`, because otherwise when generating\n *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,\n *   which doesn’t work when publishing on npm.\n */\n\n// To do: use types from `unist-util-visit-parents` when it’s released.\n\n/**\n * @typedef {(\n *   Fn extends (value: any) => value is infer Thing\n *   ? Thing\n *   : Fallback\n * )} Predicate\n *   Get the value of a type guard `Fn`.\n * @template Fn\n *   Value; typically function that is a type guard (such as `(x): x is Y`).\n * @template Fallback\n *   Value to yield if `Fn` is not a type guard.\n */\n\n/**\n * @typedef {(\n *   Check extends null | undefined // No test.\n *   ? Value\n *   : Value extends {type: Check} // String (type) test.\n *   ? Value\n *   : Value extends Check // Partial test.\n *   ? Value\n *   : Check extends Function // Function test.\n *   ? Predicate<Check, Value> extends Value\n *     ? Predicate<Check, Value>\n *     : never\n *   : never // Some other test?\n * )} MatchesOne\n *   Check whether a node matches a primitive check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test, but not arrays.\n */\n\n/**\n * @typedef {(\n *   Check extends Array<any>\n *   ? MatchesOne<Value, Check[keyof Check]>\n *   : MatchesOne<Value, Check>\n * )} Matches\n *   Check whether a node matches a check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test.\n */\n\n/**\n * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint\n *   Number; capped reasonably.\n */\n\n/**\n * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment\n *   Increment a number in the type system.\n * @template {Uint} [I=0]\n *   Index.\n */\n\n/**\n * @typedef {(\n *   Node extends UnistParent\n *   ? Node extends {children: Array<infer Children>}\n *     ? Child extends Children ? Node : never\n *     : never\n *   : never\n * )} InternalParent\n *   Collect nodes that can be parents of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent\n *   Collect nodes in `Tree` that can be parents of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {(\n *   Depth extends Max\n *   ? never\n *   :\n *     | InternalParent<Node, Child>\n *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>\n * )} InternalAncestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @typedef {(\n *   Tree extends UnistParent\n *     ? Depth extends Max\n *       ? Tree\n *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>\n *     : Tree\n * )} InclusiveDescendant\n *   Collect all (inclusive) descendants of `Tree`.\n *\n *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to\n *   > recurse without actually running into an infinite loop, which the\n *   > previous version did.\n *   >\n *   > Practically, a max of `2` is typically enough assuming a `Root` is\n *   > passed, but it doesn’t improve performance.\n *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.\n *   > Using up to `10` doesn’t hurt or help either.\n * @template {UnistNode} Tree\n *   Tree type.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @callback Visitor\n *   Handle a node (matching `test`, if given).\n *\n *   Visitors are free to transform `node`.\n *   They can also transform `parent`.\n *\n *   Replacing `node` itself, if `SKIP` is not returned, still causes its\n *   descendants to be walked (which is a bug).\n *\n *   When adding or removing previous siblings of `node` (or next siblings, in\n *   case of reverse), the `Visitor` should return a new `Index` to specify the\n *   sibling to traverse after `node` is traversed.\n *   Adding or removing next siblings of `node` (or previous siblings, in case\n *   of reverse) is handled as expected without needing to return a new `Index`.\n *\n *   Removing the children property of `parent` still results in them being\n *   traversed.\n * @param {Visited} node\n *   Found node.\n * @param {Visited extends UnistNode ? number | undefined : never} index\n *   Index of `node` in `parent`.\n * @param {Ancestor extends UnistParent ? Ancestor | undefined : never} parent\n *   Parent of `node`.\n * @returns {VisitorResult}\n *   What to do next.\n *\n *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.\n *   An `Action` is treated as a tuple of `[Action]`.\n *\n *   Passing a tuple back only makes sense if the `Action` is `SKIP`.\n *   When the `Action` is `EXIT`, that action can be returned.\n *   When the `Action` is `CONTINUE`, `Index` can be returned.\n * @template {UnistNode} [Visited=UnistNode]\n *   Visited node type.\n * @template {UnistParent} [Ancestor=UnistParent]\n *   Ancestor type.\n */\n\n/**\n * @typedef {Visitor<Visited, Parent<Ancestor, Visited>>} BuildVisitorFromMatch\n *   Build a typed `Visitor` function from a node and all possible parents.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} Visited\n *   Node type.\n * @template {UnistParent} Ancestor\n *   Parent type.\n */\n\n/**\n * @typedef {(\n *   BuildVisitorFromMatch<\n *     Matches<Descendant, Check>,\n *     Extract<Descendant, UnistParent>\n *   >\n * )} BuildVisitorFromDescendants\n *   Build a typed `Visitor` function from a list of descendants and a test.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} Descendant\n *   Node type.\n * @template {Test} Check\n *   Test type.\n */\n\n/**\n * @typedef {(\n *   BuildVisitorFromDescendants<\n *     InclusiveDescendant<Tree>,\n *     Check\n *   >\n * )} BuildVisitor\n *   Build a typed `Visitor` function from a tree and a test.\n *\n *   It will infer which values are passed as `node` and which as `parent`.\n * @template {UnistNode} [Tree=UnistNode]\n *   Node type.\n * @template {Test} [Check=Test]\n *   Test type.\n */\n\n\n\n\n\n/**\n * Visit nodes.\n *\n * This algorithm performs *depth-first* *tree traversal* in *preorder*\n * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).\n *\n * You can choose for which nodes `visitor` is called by passing a `test`.\n * For complex tests, you should test yourself in `visitor`, as it will be\n * faster and will have improved type information.\n *\n * Walking the tree is an intensive task.\n * Make use of the return values of the visitor when possible.\n * Instead of walking a tree multiple times, walk it once, use `unist-util-is`\n * to check if a node matches, and then perform different operations.\n *\n * You can change the tree.\n * See `Visitor` for more info.\n *\n * @overload\n * @param {Tree} tree\n * @param {Check} check\n * @param {BuildVisitor<Tree, Check>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @overload\n * @param {Tree} tree\n * @param {BuildVisitor<Tree>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @param {UnistNode} tree\n *   Tree to traverse.\n * @param {Visitor | Test} testOrVisitor\n *   `unist-util-is`-compatible test (optional, omit to pass a visitor).\n * @param {Visitor | boolean | null | undefined} [visitorOrReverse]\n *   Handle each node (when test is omitted, pass `reverse`).\n * @param {boolean | null | undefined} [maybeReverse=false]\n *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).\n * @returns {undefined}\n *   Nothing.\n *\n * @template {UnistNode} Tree\n *   Node type.\n * @template {Test} Check\n *   `unist-util-is`-compatible test.\n */\nfunction visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {\n  /** @type {boolean | null | undefined} */\n  let reverse\n  /** @type {Test} */\n  let test\n  /** @type {Visitor} */\n  let visitor\n\n  if (\n    typeof testOrVisitor === 'function' &&\n    typeof visitorOrReverse !== 'function'\n  ) {\n    test = undefined\n    visitor = testOrVisitor\n    reverse = visitorOrReverse\n  } else {\n    // @ts-expect-error: assume the overload with test was given.\n    test = testOrVisitor\n    // @ts-expect-error: assume the overload with test was given.\n    visitor = visitorOrReverse\n    reverse = maybeReverse\n  }\n\n  (0,unist_util_visit_parents__WEBPACK_IMPORTED_MODULE_0__.visitParents)(tree, test, overload, reverse)\n\n  /**\n   * @param {UnistNode} node\n   * @param {Array<UnistParent>} parents\n   */\n  function overload(node, parents) {\n    const parent = parents[parents.length - 1]\n    const index = parent ? parent.children.indexOf(node) : undefined\n    return visitor(node, index, parent)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC12aXNpdEA1LjAuMC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDLGFBQWEsa0RBQWtEO0FBQy9EOztBQUVBO0FBQ0EsYUFBYSw4REFBOEQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBYSw0Q0FBNEM7QUFDekQsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYSxzS0FBc0s7QUFDbkw7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9EO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsTUFBTTtBQUNwQixVQUFVO0FBQ1YsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsTUFBTTtBQUNwQixVQUFVO0FBQ1YsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0EsV0FBVyx3REFBd0Q7QUFDbkU7QUFDQSxXQUFXLDZEQUE2RDtBQUN4RTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLDZDQUE2QztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTs7QUFFcUQ7O0FBRVE7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsT0FBTztBQUNsQixXQUFXLDJCQUEyQjtBQUN0QyxXQUFXLDRCQUE0QjtBQUN2QyxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLG9CQUFvQjtBQUMvQixXQUFXLDRCQUE0QjtBQUN2QyxhQUFhO0FBQ2I7QUFDQSxXQUFXLFdBQVc7QUFDdEI7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQjtBQUNBLFdBQVcsc0NBQXNDO0FBQ2pEO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ087QUFDUCxhQUFhLDRCQUE0QjtBQUN6QztBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBLGFBQWEsU0FBUztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxzRUFBWTs7QUFFZDtBQUNBLGFBQWEsV0FBVztBQUN4QixhQUFhLG9CQUFvQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F3ZXNvbWUtcHdoLWJsb2cvLi9ub2RlX21vZHVsZXMvLnBucG0vdW5pc3QtdXRpbC12aXNpdEA1LjAuMC9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC9saWIvaW5kZXguanM/ZDRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gVW5pc3ROb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gVW5pc3RQYXJlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpLlZpc2l0b3JSZXN1bHR9IFZpc2l0b3JSZXN1bHRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFeGNsdWRlPGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3QsIHVuZGVmaW5lZD4gfCB1bmRlZmluZWR9IFRlc3RcbiAqICAgVGVzdCBmcm9tIGB1bmlzdC11dGlsLWlzYC5cbiAqXG4gKiAgIE5vdGU6IHdlIGhhdmUgcmVtb3ZlIGFuZCBhZGQgYHVuZGVmaW5lZGAsIGJlY2F1c2Ugb3RoZXJ3aXNlIHdoZW4gZ2VuZXJhdGluZ1xuICogICBhdXRvbWF0aWMgYC5kLnRzYCBmaWxlcywgVFMgdHJpZXMgdG8gZmxhdHRlbiBwYXRocyBmcm9tIGEgbG9jYWwgcGVyc3BlY3RpdmUsXG4gKiAgIHdoaWNoIGRvZXNu4oCZdCB3b3JrIHdoZW4gcHVibGlzaGluZyBvbiBucG0uXG4gKi9cblxuLy8gVG8gZG86IHVzZSB0eXBlcyBmcm9tIGB1bmlzdC11dGlsLXZpc2l0LXBhcmVudHNgIHdoZW4gaXTigJlzIHJlbGVhc2VkLlxuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIEZuIGV4dGVuZHMgKHZhbHVlOiBhbnkpID0+IHZhbHVlIGlzIGluZmVyIFRoaW5nXG4gKiAgID8gVGhpbmdcbiAqICAgOiBGYWxsYmFja1xuICogKX0gUHJlZGljYXRlXG4gKiAgIEdldCB0aGUgdmFsdWUgb2YgYSB0eXBlIGd1YXJkIGBGbmAuXG4gKiBAdGVtcGxhdGUgRm5cbiAqICAgVmFsdWU7IHR5cGljYWxseSBmdW5jdGlvbiB0aGF0IGlzIGEgdHlwZSBndWFyZCAoc3VjaCBhcyBgKHgpOiB4IGlzIFlgKS5cbiAqIEB0ZW1wbGF0ZSBGYWxsYmFja1xuICogICBWYWx1ZSB0byB5aWVsZCBpZiBgRm5gIGlzIG5vdCBhIHR5cGUgZ3VhcmQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBDaGVjayBleHRlbmRzIG51bGwgfCB1bmRlZmluZWQgLy8gTm8gdGVzdC5cbiAqICAgPyBWYWx1ZVxuICogICA6IFZhbHVlIGV4dGVuZHMge3R5cGU6IENoZWNrfSAvLyBTdHJpbmcgKHR5cGUpIHRlc3QuXG4gKiAgID8gVmFsdWVcbiAqICAgOiBWYWx1ZSBleHRlbmRzIENoZWNrIC8vIFBhcnRpYWwgdGVzdC5cbiAqICAgPyBWYWx1ZVxuICogICA6IENoZWNrIGV4dGVuZHMgRnVuY3Rpb24gLy8gRnVuY3Rpb24gdGVzdC5cbiAqICAgPyBQcmVkaWNhdGU8Q2hlY2ssIFZhbHVlPiBleHRlbmRzIFZhbHVlXG4gKiAgICAgPyBQcmVkaWNhdGU8Q2hlY2ssIFZhbHVlPlxuICogICAgIDogbmV2ZXJcbiAqICAgOiBuZXZlciAvLyBTb21lIG90aGVyIHRlc3Q/XG4gKiApfSBNYXRjaGVzT25lXG4gKiAgIENoZWNrIHdoZXRoZXIgYSBub2RlIG1hdGNoZXMgYSBwcmltaXRpdmUgY2hlY2sgaW4gdGhlIHR5cGUgc3lzdGVtLlxuICogQHRlbXBsYXRlIFZhbHVlXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgdW5pc3QgYE5vZGVgLlxuICogQHRlbXBsYXRlIENoZWNrXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdCwgYnV0IG5vdCBhcnJheXMuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBDaGVjayBleHRlbmRzIEFycmF5PGFueT5cbiAqICAgPyBNYXRjaGVzT25lPFZhbHVlLCBDaGVja1trZXlvZiBDaGVja10+XG4gKiAgIDogTWF0Y2hlc09uZTxWYWx1ZSwgQ2hlY2s+XG4gKiApfSBNYXRjaGVzXG4gKiAgIENoZWNrIHdoZXRoZXIgYSBub2RlIG1hdGNoZXMgYSBjaGVjayBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKiBAdGVtcGxhdGUgVmFsdWVcbiAqICAgVmFsdWU7IHR5cGljYWxseSB1bmlzdCBgTm9kZWAuXG4gKiBAdGVtcGxhdGUgQ2hlY2tcbiAqICAgVmFsdWU7IHR5cGljYWxseSBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgezAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMH0gVWludFxuICogICBOdW1iZXI7IGNhcHBlZCByZWFzb25hYmx5LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0kgZXh0ZW5kcyAwID8gMSA6IEkgZXh0ZW5kcyAxID8gMiA6IEkgZXh0ZW5kcyAyID8gMyA6IEkgZXh0ZW5kcyAzID8gNCA6IEkgZXh0ZW5kcyA0ID8gNSA6IEkgZXh0ZW5kcyA1ID8gNiA6IEkgZXh0ZW5kcyA2ID8gNyA6IEkgZXh0ZW5kcyA3ID8gOCA6IEkgZXh0ZW5kcyA4ID8gOSA6IDEwfSBJbmNyZW1lbnRcbiAqICAgSW5jcmVtZW50IGEgbnVtYmVyIGluIHRoZSB0eXBlIHN5c3RlbS5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW0k9MF1cbiAqICAgSW5kZXguXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBOb2RlIGV4dGVuZHMgVW5pc3RQYXJlbnRcbiAqICAgPyBOb2RlIGV4dGVuZHMge2NoaWxkcmVuOiBBcnJheTxpbmZlciBDaGlsZHJlbj59XG4gKiAgICAgPyBDaGlsZCBleHRlbmRzIENoaWxkcmVuID8gTm9kZSA6IG5ldmVyXG4gKiAgICAgOiBuZXZlclxuICogICA6IG5ldmVyXG4gKiApfSBJbnRlcm5hbFBhcmVudFxuICogICBDb2xsZWN0IG5vZGVzIHRoYXQgY2FuIGJlIHBhcmVudHMgb2YgYENoaWxkYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBOb2RlXG4gKiAgIEFsbCBub2RlIHR5cGVzIGluIGEgdHJlZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBDaGlsZFxuICogICBOb2RlIHRvIHNlYXJjaCBmb3IuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7SW50ZXJuYWxQYXJlbnQ8SW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlPiwgQ2hpbGQ+fSBQYXJlbnRcbiAqICAgQ29sbGVjdCBub2RlcyBpbiBgVHJlZWAgdGhhdCBjYW4gYmUgcGFyZW50cyBvZiBgQ2hpbGRgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFRyZWVcbiAqICAgQWxsIG5vZGUgdHlwZXMgaW4gYSB0cmVlLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IENoaWxkXG4gKiAgIE5vZGUgdG8gc2VhcmNoIGZvci5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIERlcHRoIGV4dGVuZHMgTWF4XG4gKiAgID8gbmV2ZXJcbiAqICAgOlxuICogICAgIHwgSW50ZXJuYWxQYXJlbnQ8Tm9kZSwgQ2hpbGQ+XG4gKiAgICAgfCBJbnRlcm5hbEFuY2VzdG9yPE5vZGUsIEludGVybmFsUGFyZW50PE5vZGUsIENoaWxkPiwgTWF4LCBJbmNyZW1lbnQ8RGVwdGg+PlxuICogKX0gSW50ZXJuYWxBbmNlc3RvclxuICogICBDb2xsZWN0IG5vZGVzIGluIGBUcmVlYCB0aGF0IGNhbiBiZSBhbmNlc3RvcnMgb2YgYENoaWxkYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBOb2RlXG4gKiAgIEFsbCBub2RlIHR5cGVzIGluIGEgdHJlZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBDaGlsZFxuICogICBOb2RlIHRvIHNlYXJjaCBmb3IuXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtNYXg9MTBdXG4gKiAgIE1heDsgc2VhcmNoZXMgdXAgdG8gdGhpcyBkZXB0aC5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW0RlcHRoPTBdXG4gKiAgIEN1cnJlbnQgZGVwdGguXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBUcmVlIGV4dGVuZHMgVW5pc3RQYXJlbnRcbiAqICAgICA/IERlcHRoIGV4dGVuZHMgTWF4XG4gKiAgICAgICA/IFRyZWVcbiAqICAgICAgIDogVHJlZSB8IEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZVsnY2hpbGRyZW4nXVtudW1iZXJdLCBNYXgsIEluY3JlbWVudDxEZXB0aD4+XG4gKiAgICAgOiBUcmVlXG4gKiApfSBJbmNsdXNpdmVEZXNjZW5kYW50XG4gKiAgIENvbGxlY3QgYWxsIChpbmNsdXNpdmUpIGRlc2NlbmRhbnRzIG9mIGBUcmVlYC5cbiAqXG4gKiAgID4g8J+RiSAqKk5vdGUqKjogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIGZhc3Rlc3Qgd2F5IHRvXG4gKiAgID4gcmVjdXJzZSB3aXRob3V0IGFjdHVhbGx5IHJ1bm5pbmcgaW50byBhbiBpbmZpbml0ZSBsb29wLCB3aGljaCB0aGVcbiAqICAgPiBwcmV2aW91cyB2ZXJzaW9uIGRpZC5cbiAqICAgPlxuICogICA+IFByYWN0aWNhbGx5LCBhIG1heCBvZiBgMmAgaXMgdHlwaWNhbGx5IGVub3VnaCBhc3N1bWluZyBhIGBSb290YCBpc1xuICogICA+IHBhc3NlZCwgYnV0IGl0IGRvZXNu4oCZdCBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICogICA+IEl0IGdldHMgaGlnaGVyIHdpdGggYExpc3QgPiBMaXN0SXRlbSA+IFRhYmxlID4gVGFibGVSb3cgPiBUYWJsZUNlbGxgLlxuICogICA+IFVzaW5nIHVwIHRvIGAxMGAgZG9lc27igJl0IGh1cnQgb3IgaGVscCBlaXRoZXIuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVHJlZVxuICogICBUcmVlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtNYXg9MTBdXG4gKiAgIE1heDsgc2VhcmNoZXMgdXAgdG8gdGhpcyBkZXB0aC5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW0RlcHRoPTBdXG4gKiAgIEN1cnJlbnQgZGVwdGguXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgVmlzaXRvclxuICogICBIYW5kbGUgYSBub2RlIChtYXRjaGluZyBgdGVzdGAsIGlmIGdpdmVuKS5cbiAqXG4gKiAgIFZpc2l0b3JzIGFyZSBmcmVlIHRvIHRyYW5zZm9ybSBgbm9kZWAuXG4gKiAgIFRoZXkgY2FuIGFsc28gdHJhbnNmb3JtIGBwYXJlbnRgLlxuICpcbiAqICAgUmVwbGFjaW5nIGBub2RlYCBpdHNlbGYsIGlmIGBTS0lQYCBpcyBub3QgcmV0dXJuZWQsIHN0aWxsIGNhdXNlcyBpdHNcbiAqICAgZGVzY2VuZGFudHMgdG8gYmUgd2Fsa2VkICh3aGljaCBpcyBhIGJ1ZykuXG4gKlxuICogICBXaGVuIGFkZGluZyBvciByZW1vdmluZyBwcmV2aW91cyBzaWJsaW5ncyBvZiBgbm9kZWAgKG9yIG5leHQgc2libGluZ3MsIGluXG4gKiAgIGNhc2Ugb2YgcmV2ZXJzZSksIHRoZSBgVmlzaXRvcmAgc2hvdWxkIHJldHVybiBhIG5ldyBgSW5kZXhgIHRvIHNwZWNpZnkgdGhlXG4gKiAgIHNpYmxpbmcgdG8gdHJhdmVyc2UgYWZ0ZXIgYG5vZGVgIGlzIHRyYXZlcnNlZC5cbiAqICAgQWRkaW5nIG9yIHJlbW92aW5nIG5leHQgc2libGluZ3Mgb2YgYG5vZGVgIChvciBwcmV2aW91cyBzaWJsaW5ncywgaW4gY2FzZVxuICogICBvZiByZXZlcnNlKSBpcyBoYW5kbGVkIGFzIGV4cGVjdGVkIHdpdGhvdXQgbmVlZGluZyB0byByZXR1cm4gYSBuZXcgYEluZGV4YC5cbiAqXG4gKiAgIFJlbW92aW5nIHRoZSBjaGlsZHJlbiBwcm9wZXJ0eSBvZiBgcGFyZW50YCBzdGlsbCByZXN1bHRzIGluIHRoZW0gYmVpbmdcbiAqICAgdHJhdmVyc2VkLlxuICogQHBhcmFtIHtWaXNpdGVkfSBub2RlXG4gKiAgIEZvdW5kIG5vZGUuXG4gKiBAcGFyYW0ge1Zpc2l0ZWQgZXh0ZW5kcyBVbmlzdE5vZGUgPyBudW1iZXIgfCB1bmRlZmluZWQgOiBuZXZlcn0gaW5kZXhcbiAqICAgSW5kZXggb2YgYG5vZGVgIGluIGBwYXJlbnRgLlxuICogQHBhcmFtIHtBbmNlc3RvciBleHRlbmRzIFVuaXN0UGFyZW50ID8gQW5jZXN0b3IgfCB1bmRlZmluZWQgOiBuZXZlcn0gcGFyZW50XG4gKiAgIFBhcmVudCBvZiBgbm9kZWAuXG4gKiBAcmV0dXJucyB7VmlzaXRvclJlc3VsdH1cbiAqICAgV2hhdCB0byBkbyBuZXh0LlxuICpcbiAqICAgQW4gYEluZGV4YCBpcyB0cmVhdGVkIGFzIGEgdHVwbGUgb2YgYFtDT05USU5VRSwgSW5kZXhdYC5cbiAqICAgQW4gYEFjdGlvbmAgaXMgdHJlYXRlZCBhcyBhIHR1cGxlIG9mIGBbQWN0aW9uXWAuXG4gKlxuICogICBQYXNzaW5nIGEgdHVwbGUgYmFjayBvbmx5IG1ha2VzIHNlbnNlIGlmIHRoZSBgQWN0aW9uYCBpcyBgU0tJUGAuXG4gKiAgIFdoZW4gdGhlIGBBY3Rpb25gIGlzIGBFWElUYCwgdGhhdCBhY3Rpb24gY2FuIGJlIHJldHVybmVkLlxuICogICBXaGVuIHRoZSBgQWN0aW9uYCBpcyBgQ09OVElOVUVgLCBgSW5kZXhgIGNhbiBiZSByZXR1cm5lZC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBbVmlzaXRlZD1VbmlzdE5vZGVdXG4gKiAgIFZpc2l0ZWQgbm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtVbmlzdFBhcmVudH0gW0FuY2VzdG9yPVVuaXN0UGFyZW50XVxuICogICBBbmNlc3RvciB0eXBlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge1Zpc2l0b3I8VmlzaXRlZCwgUGFyZW50PEFuY2VzdG9yLCBWaXNpdGVkPj59IEJ1aWxkVmlzaXRvckZyb21NYXRjaFxuICogICBCdWlsZCBhIHR5cGVkIGBWaXNpdG9yYCBmdW5jdGlvbiBmcm9tIGEgbm9kZSBhbmQgYWxsIHBvc3NpYmxlIHBhcmVudHMuXG4gKlxuICogICBJdCB3aWxsIGluZmVyIHdoaWNoIHZhbHVlcyBhcmUgcGFzc2VkIGFzIGBub2RlYCBhbmQgd2hpY2ggYXMgYHBhcmVudGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVmlzaXRlZFxuICogICBOb2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1VuaXN0UGFyZW50fSBBbmNlc3RvclxuICogICBQYXJlbnQgdHlwZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIEJ1aWxkVmlzaXRvckZyb21NYXRjaDxcbiAqICAgICBNYXRjaGVzPERlc2NlbmRhbnQsIENoZWNrPixcbiAqICAgICBFeHRyYWN0PERlc2NlbmRhbnQsIFVuaXN0UGFyZW50PlxuICogICA+XG4gKiApfSBCdWlsZFZpc2l0b3JGcm9tRGVzY2VuZGFudHNcbiAqICAgQnVpbGQgYSB0eXBlZCBgVmlzaXRvcmAgZnVuY3Rpb24gZnJvbSBhIGxpc3Qgb2YgZGVzY2VuZGFudHMgYW5kIGEgdGVzdC5cbiAqXG4gKiAgIEl0IHdpbGwgaW5mZXIgd2hpY2ggdmFsdWVzIGFyZSBwYXNzZWQgYXMgYG5vZGVgIGFuZCB3aGljaCBhcyBgcGFyZW50YC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBEZXNjZW5kYW50XG4gKiAgIE5vZGUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VGVzdH0gQ2hlY2tcbiAqICAgVGVzdCB0eXBlLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgQnVpbGRWaXNpdG9yRnJvbURlc2NlbmRhbnRzPFxuICogICAgIEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZT4sXG4gKiAgICAgQ2hlY2tcbiAqICAgPlxuICogKX0gQnVpbGRWaXNpdG9yXG4gKiAgIEJ1aWxkIGEgdHlwZWQgYFZpc2l0b3JgIGZ1bmN0aW9uIGZyb20gYSB0cmVlIGFuZCBhIHRlc3QuXG4gKlxuICogICBJdCB3aWxsIGluZmVyIHdoaWNoIHZhbHVlcyBhcmUgcGFzc2VkIGFzIGBub2RlYCBhbmQgd2hpY2ggYXMgYHBhcmVudGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gW1RyZWU9VW5pc3ROb2RlXVxuICogICBOb2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1Rlc3R9IFtDaGVjaz1UZXN0XVxuICogICBUZXN0IHR5cGUuXG4gKi9cblxuaW1wb3J0IHt2aXNpdFBhcmVudHN9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cydcblxuZXhwb3J0IHtDT05USU5VRSwgRVhJVCwgU0tJUH0gZnJvbSAndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJ1xuXG4vKipcbiAqIFZpc2l0IG5vZGVzLlxuICpcbiAqIFRoaXMgYWxnb3JpdGhtIHBlcmZvcm1zICpkZXB0aC1maXJzdCogKnRyZWUgdHJhdmVyc2FsKiBpbiAqcHJlb3JkZXIqXG4gKiAoKipOTFIqKikgb3IgaWYgYHJldmVyc2VgIGlzIGdpdmVuLCBpbiAqcmV2ZXJzZSBwcmVvcmRlciogKCoqTlJMKiopLlxuICpcbiAqIFlvdSBjYW4gY2hvb3NlIGZvciB3aGljaCBub2RlcyBgdmlzaXRvcmAgaXMgY2FsbGVkIGJ5IHBhc3NpbmcgYSBgdGVzdGAuXG4gKiBGb3IgY29tcGxleCB0ZXN0cywgeW91IHNob3VsZCB0ZXN0IHlvdXJzZWxmIGluIGB2aXNpdG9yYCwgYXMgaXQgd2lsbCBiZVxuICogZmFzdGVyIGFuZCB3aWxsIGhhdmUgaW1wcm92ZWQgdHlwZSBpbmZvcm1hdGlvbi5cbiAqXG4gKiBXYWxraW5nIHRoZSB0cmVlIGlzIGFuIGludGVuc2l2ZSB0YXNrLlxuICogTWFrZSB1c2Ugb2YgdGhlIHJldHVybiB2YWx1ZXMgb2YgdGhlIHZpc2l0b3Igd2hlbiBwb3NzaWJsZS5cbiAqIEluc3RlYWQgb2Ygd2Fsa2luZyBhIHRyZWUgbXVsdGlwbGUgdGltZXMsIHdhbGsgaXQgb25jZSwgdXNlIGB1bmlzdC11dGlsLWlzYFxuICogdG8gY2hlY2sgaWYgYSBub2RlIG1hdGNoZXMsIGFuZCB0aGVuIHBlcmZvcm0gZGlmZmVyZW50IG9wZXJhdGlvbnMuXG4gKlxuICogWW91IGNhbiBjaGFuZ2UgdGhlIHRyZWUuXG4gKiBTZWUgYFZpc2l0b3JgIGZvciBtb3JlIGluZm8uXG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge1RyZWV9IHRyZWVcbiAqIEBwYXJhbSB7Q2hlY2t9IGNoZWNrXG4gKiBAcGFyYW0ge0J1aWxkVmlzaXRvcjxUcmVlLCBDaGVjaz59IHZpc2l0b3JcbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZXZlcnNlXVxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqXG4gKiBAb3ZlcmxvYWRcbiAqIEBwYXJhbSB7VHJlZX0gdHJlZVxuICogQHBhcmFtIHtCdWlsZFZpc2l0b3I8VHJlZT59IHZpc2l0b3JcbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFtyZXZlcnNlXVxuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqXG4gKiBAcGFyYW0ge1VuaXN0Tm9kZX0gdHJlZVxuICogICBUcmVlIHRvIHRyYXZlcnNlLlxuICogQHBhcmFtIHtWaXNpdG9yIHwgVGVzdH0gdGVzdE9yVmlzaXRvclxuICogICBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0IChvcHRpb25hbCwgb21pdCB0byBwYXNzIGEgdmlzaXRvcikuXG4gKiBAcGFyYW0ge1Zpc2l0b3IgfCBib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3Zpc2l0b3JPclJldmVyc2VdXG4gKiAgIEhhbmRsZSBlYWNoIG5vZGUgKHdoZW4gdGVzdCBpcyBvbWl0dGVkLCBwYXNzIGByZXZlcnNlYCkuXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbbWF5YmVSZXZlcnNlPWZhbHNlXVxuICogICBUcmF2ZXJzZSBpbiByZXZlcnNlIHByZW9yZGVyIChOUkwpIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgcHJlb3JkZXIgKE5MUikuXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICogICBOb3RoaW5nLlxuICpcbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBUcmVlXG4gKiAgIE5vZGUgdHlwZS5cbiAqIEB0ZW1wbGF0ZSB7VGVzdH0gQ2hlY2tcbiAqICAgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0KHRyZWUsIHRlc3RPclZpc2l0b3IsIHZpc2l0b3JPclJldmVyc2UsIG1heWJlUmV2ZXJzZSkge1xuICAvKiogQHR5cGUge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xuICBsZXQgcmV2ZXJzZVxuICAvKiogQHR5cGUge1Rlc3R9ICovXG4gIGxldCB0ZXN0XG4gIC8qKiBAdHlwZSB7VmlzaXRvcn0gKi9cbiAgbGV0IHZpc2l0b3JcblxuICBpZiAoXG4gICAgdHlwZW9mIHRlc3RPclZpc2l0b3IgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgdmlzaXRvck9yUmV2ZXJzZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICB0ZXN0ID0gdW5kZWZpbmVkXG4gICAgdmlzaXRvciA9IHRlc3RPclZpc2l0b3JcbiAgICByZXZlcnNlID0gdmlzaXRvck9yUmV2ZXJzZVxuICB9IGVsc2Uge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGFzc3VtZSB0aGUgb3ZlcmxvYWQgd2l0aCB0ZXN0IHdhcyBnaXZlbi5cbiAgICB0ZXN0ID0gdGVzdE9yVmlzaXRvclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3I6IGFzc3VtZSB0aGUgb3ZlcmxvYWQgd2l0aCB0ZXN0IHdhcyBnaXZlbi5cbiAgICB2aXNpdG9yID0gdmlzaXRvck9yUmV2ZXJzZVxuICAgIHJldmVyc2UgPSBtYXliZVJldmVyc2VcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICAvKipcbiAgICogQHBhcmFtIHtVbmlzdE5vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtBcnJheTxVbmlzdFBhcmVudD59IHBhcmVudHNcbiAgICovXG4gIGZ1bmN0aW9uIG92ZXJsb2FkKG5vZGUsIHBhcmVudHMpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICBjb25zdCBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogdW5kZWZpbmVkXG4gICAgcmV0dXJuIHZpc2l0b3Iobm9kZSwgaW5kZXgsIHBhcmVudClcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js\n");

/***/ })

};
;