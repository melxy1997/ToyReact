/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toy_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react.js */ \"./src/toy-react.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MyComponent = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent, _Component);\n\n  var _super = _createSuper(MyComponent);\n\n  function MyComponent() {\n    var _this;\n\n    _classCallCheck(this, MyComponent);\n\n    _this = _super.call(this);\n    _this.state = {\n      a: 1,\n      b: 2\n    };\n    return _this;\n  }\n\n  _createClass(MyComponent, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return (0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", null, \"asd\", (0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", {\n        onclick: function onclick() {\n          _this2.state.a++;\n\n          _this2.rerender();\n        }\n      }, \"Add\"), (0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\", null, \"a:\", this.state.a.toString()));\n    }\n  }]);\n\n  return MyComponent;\n}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.Component); // JSX部分：\n// window.a = \n// document.body.appendChild(window.a)\n\n\n(0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.render)((0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyComponent, {\n  id: \"a\",\n  \"class\": \"c\"\n}, (0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", null, \"abc\"), (0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", null), (0,_toy_react_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"span\", null)), document.body); // console.log(b);\n\n//# sourceURL=webpack://toyreact/./src/main.js?");

/***/ }),

/***/ "./src/toy-react.js":
/*!**************************!*\
  !*** ./src/toy-react.js ***!
  \**************************/
/*! namespace exports */
/*! export Component [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export render [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => /* binding */ Component,\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"render\": () => /* binding */ render\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar RENDER_TO_DOM = Symbol(\"render to DOM\");\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this._root = null;\n    this.props = Object.create(null); //为何不使用{}？因为它不如Object.creat出创建的更空，无原型链的任何继承\n\n    this.children = [];\n    this._range = null;\n  }\n\n  _createClass(Component, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      this.children.push(component);\n    } // 操作&重新渲染，这里使用了Symbol，方括号形式\n\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      //使用Range的API来定位\n      this.render()[RENDER_TO_DOM](range); //替代了getRoot的方式\n\n      this._range = range;\n    }\n  }, {\n    key: \"rerender\",\n    value: function rerender() {\n      this._range.deleteContents();\n\n      this[RENDER_TO_DOM](this._range);\n    }\n  }]);\n\n  return Component;\n}();\n\nvar ElementWarpper = /*#__PURE__*/function () {\n  function ElementWarpper(type) {\n    _classCallCheck(this, ElementWarpper);\n\n    this.root = document.createElement(type);\n  }\n\n  _createClass(ElementWarpper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // 希望把on开头的属性单独处理 因为它是事件绑定\n      // 使用正则进行匹配 [\\s\\S]表示所有的空白与非空白集合 即全部字符\n      if (name.match(/^on([\\s\\S]+)$/)) {\n        console.log(\"Match Event!\"); // 由于使用了()，则可以捕获到该位置的值\n        // 确保事件名是小写的\n\n        this.root.addEventListener(RegExp.$1.replace(/^[\\s\\S]/, function (c) {\n          return c.toLowerCase();\n        }), value);\n      }\n\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(component) {\n      // this.root.appendChild(component.root);\n      // 使用range+render代替root\n      var range = document.createRange(); // 既然是append肯定是在末尾 因此range的起始于结尾都在root的尾部\n\n      range.setStart(this.root, this.root.childNodes.length);\n      range.setEnd(this.root, this.root.childNodes.length);\n      component[RENDER_TO_DOM](range);\n    }\n  }, {\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return ElementWarpper;\n}();\n\nvar TextWarpper = /*#__PURE__*/function () {\n  function TextWarpper(content) {\n    _classCallCheck(this, TextWarpper);\n\n    this.root = document.createTextNode(content);\n  } // Text不会有子节点，也不会append子节点\n\n\n  _createClass(TextWarpper, [{\n    key: RENDER_TO_DOM,\n    value: function value(range) {\n      range.deleteContents();\n      range.insertNode(this.root);\n    }\n  }]);\n\n  return TextWarpper;\n}();\n\nfunction createElement(type, attributes) {\n  var element;\n\n  if (typeof type === \"string\") {\n    // 普通结点元素\n    // element = document.createElement(type);\n    element = new ElementWarpper(type);\n  } else {\n    // 若为class 则实例化一下 变成真正的DOM对象\n    // 但是这导致element不是原生对象，没有appendChild、setAttribute方法\n    // 因此需要编写ElementWrapper类 重写这两个函数\n    element = new type();\n  } // 所有属性被存放在了attributes对象上，所以需要使用迭代for in\n\n\n  for (var name in attributes) {\n    element.setAttribute(name, attributes[name]); //  为什么不用element[name] = attributes[name];这个叫property，上面的才是attribute\n    //  property理解为js对象，attribute为DOM的字符串，\n    //  DOM有默认的几个基本property 不需要在HTML中显式写出(一个空div自动就有超级多的key，这正是虚拟DOM存在的必要)\n    //  而attributes一般是手动赋值的，因此attributes是属于property的一个子集，输出attribute可看出其为key=\"value\"\n    //  property的修改不影响attributes，而attributes的修改会影响property\n  } // children可能嵌套着需要展开的children，此处定义一个递归的箭头函数\n\n\n  var insertChildren = function insertChildren(children) {\n    // children是个数组，因此要用for of来循环\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        // 单独处理文本节点\n        if (typeof child === \"string\") {\n          // child = document.createTextNode(child);\n          child = new TextWarpper(child);\n        } //为了将数组形式的多个children展开 需要进行判断\n\n\n        if (_typeof(child) === \"object\" && child instanceof Array) {\n          insertChildren(child);\n        } else {\n          element.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  }; // 别忘了调用\n\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  insertChildren(children);\n  return element;\n  return document.createElement(type);\n}\nfunction render(component, parentElement) {\n  // parentElement.appendChild(component.root);\n  // 注意此处使用rangeAPI的方式，有Start和End，根据parentElementd的长度设定\n  // 把parentElement的内容清空，然后render to DOM\n  var range = document.createRange();\n  range.setStart(parentElement, 0);\n  range.setEnd(parentElement, parentElement.childNodes.length);\n  range.deleteContents();\n  component[RENDER_TO_DOM](range);\n}\n\n//# sourceURL=webpack://toyreact/./src/toy-react.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;