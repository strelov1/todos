/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/index.ts":
/*!******************************!*\
  !*** ./src/actions/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./todo */ "./src/actions/todo/index.ts"));


/***/ }),

/***/ "./src/actions/todo/index.ts":
/*!***********************************!*\
  !*** ./src/actions/todo/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD = "ADD";
exports.DEL = "DEL";
function addAction(item) {
    return {
        type: exports.ADD,
        payload: item
    };
}
exports.addAction = addAction;
function deleteAction(id) {
    return {
        type: exports.DEL,
        payload: id
    };
}
exports.deleteAction = deleteAction;


/***/ }),

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const TodoList_1 = __webpack_require__(/*! ./TodoList */ "./src/components/TodoList.tsx");
const App = ({ todoList, addItem }) => {
    const input = React.createRef();
    const handleOneSubmit = (event) => {
        addItem({ name: input.current.value });
        input.current.value = "";
    };
    return (React.createElement("div", null,
        React.createElement(TodoList_1.default, { items: todoList }),
        React.createElement("div", null,
            React.createElement("input", { type: "text", ref: input, autoFocus: true }),
            React.createElement("button", { onClick: handleOneSubmit }, "Add"))));
};
exports.default = App;


/***/ }),

/***/ "./src/components/ToDoItem.tsx":
/*!*************************************!*\
  !*** ./src/components/ToDoItem.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ToDoItem = ({ item, index, deleteItem }) => {
    const handleOneSubmit = () => {
        deleteItem(index);
    };
    return (React.createElement("li", null,
        item.name,
        " ",
        React.createElement("button", { onClick: handleOneSubmit }, "x")));
};
exports.default = ToDoItem;


/***/ }),

/***/ "./src/components/TodoList.tsx":
/*!*************************************!*\
  !*** ./src/components/TodoList.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const TodoItem_connect_1 = __webpack_require__(/*! ../containers/TodoItem.connect */ "./src/containers/TodoItem.connect.tsx");
const TodoList = ({ items }) => {
    return (React.createElement("ul", null, lodash_1.map(items, (item, key) => {
        return React.createElement(TodoItem_connect_1.default, { key: key, item: item, index: key });
    })));
};
exports.default = TodoList;


/***/ }),

/***/ "./src/configureStore.ts":
/*!*******************************!*\
  !*** ./src/configureStore.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const reducers_1 = __webpack_require__(/*! ./reducers */ "./src/reducers/index.ts");
function configureStore() {
    const store = redux_1.createStore(reducers_1.default);
    return store;
}
exports.default = configureStore;


/***/ }),

/***/ "./src/containers/App.connect.tsx":
/*!****************************************!*\
  !*** ./src/containers/App.connect.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const App_1 = __webpack_require__(/*! ../components/App */ "./src/components/App.tsx");
const actions = __webpack_require__(/*! ../actions */ "./src/actions/index.ts");
const mapStateToProps = (state) => ({
    todoList: state.todoList
});
const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(actions.addAction(item))
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App_1.default);


/***/ }),

/***/ "./src/containers/TodoItem.connect.tsx":
/*!*********************************************!*\
  !*** ./src/containers/TodoItem.connect.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const ToDoItem_1 = __webpack_require__(/*! ../components/ToDoItem */ "./src/components/ToDoItem.tsx");
const actions = __webpack_require__(/*! ../actions */ "./src/actions/index.ts");
const mapDispatchToProps = dispatch => ({
    deleteItem: (index) => dispatch(actions.deleteAction(index))
});
exports.default = react_redux_1.connect(null, mapDispatchToProps)(ToDoItem_1.default);


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const configureStore_1 = __webpack_require__(/*! ./configureStore */ "./src/configureStore.ts");
const App_connect_1 = __webpack_require__(/*! ./containers/App.connect */ "./src/containers/App.connect.tsx");
const store = configureStore_1.default();
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(App_connect_1.default, null)), document.getElementById("app"));


/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const todoReducer_1 = __webpack_require__(/*! ./todoReducer */ "./src/reducers/todoReducer.ts");
const rootReducer = redux_1.combineReducers({
    todoList: todoReducer_1.todoReducer
});
exports.default = rootReducer;


/***/ }),

/***/ "./src/reducers/todoReducer.ts":
/*!*************************************!*\
  !*** ./src/reducers/todoReducer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
const toDoActions = __webpack_require__(/*! ../actions */ "./src/actions/index.ts");
const createEmptyToDo = () => [{ name: "Test" }];
exports.todoReducer = (state = createEmptyToDo(), action) => {
    switch (action.type) {
        case toDoActions.ADD:
            return handleAddAction(state, action.payload);
        case toDoActions.DEL:
            return handleDelAction(state, action.payload);
    }
    return state;
};
const handleAddAction = (state = createEmptyToDo(), payload) => {
    return [...state, payload];
};
const handleDelAction = (state = createEmptyToDo(), payload) => {
    return lodash_1.reject(state, (_, key) => key === payload);
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdG9kby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RvRG9JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0FwcC5jb25uZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ub2RvSXRlbS5jb25uZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdG9kb1JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUUsT0FBTyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FDdEIsUUFBZ0IsZUFBZSxFQUFFLEVBQ2pDLE9BQWUsRUFDUCxFQUFFO0lBQ1YsT0FBTyxlQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vdG9kb1wiO1xuIiwiaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQUREID0gXCJBRERcIjtcbmV4cG9ydCB0eXBlIEFERCA9IHR5cGVvZiBBREQ7XG5cbmV4cG9ydCBjb25zdCBERUwgPSBcIkRFTFwiO1xuZXhwb3J0IHR5cGUgREVMID0gdHlwZW9mIERFTDtcblxuZXhwb3J0IGludGVyZmFjZSBBZGRBY3Rpb24ge1xuICB0eXBlOiBBREQ7XG4gIHBheWxvYWQ6IEl0ZW07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlQWN0aW9uIHtcbiAgdHlwZTogREVMO1xuICBwYXlsb2FkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBY3Rpb24oaXRlbTogSXRlbSk6IEFkZEFjdGlvbiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQURELFxuICAgIHBheWxvYWQ6IGl0ZW1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFjdGlvbihpZDogbnVtYmVyKTogRGVsZXRlQWN0aW9uIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBERUwsXG4gICAgcGF5bG9hZDogaWRcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVG9kb0FjdGlvbiA9IEFkZEFjdGlvbiB8IERlbGV0ZUFjdGlvbjtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzL1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL1RvZG9MaXN0XCI7XG5cbmludGVyZmFjZSBBcHBQcm9wcyB7XG4gIHRvZG9MaXN0OiBJdGVtW107XG4gIGFkZEl0ZW06IChpdGVtOiBJdGVtKSA9PiB2b2lkO1xufVxuXG5jb25zdCBBcHA6IFJlYWN0LlNGQzxBcHBQcm9wcz4gPSAoeyB0b2RvTGlzdCwgYWRkSXRlbSB9KSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG5cbiAgY29uc3QgaGFuZGxlT25lU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgYWRkSXRlbSh7IG5hbWU6IGlucHV0LmN1cnJlbnQudmFsdWUgfSk7XG4gICAgaW5wdXQuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRvZG9MaXN0IGl0ZW1zPXt0b2RvTGlzdH0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHJlZj17aW5wdXR9IGF1dG9Gb2N1cz17dHJ1ZX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPbmVTdWJtaXR9PkFkZDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi90eXBlcy9cIjtcblxuaW50ZXJmYWNlIFRvRG9JdGVtUHJvcHMge1xuICBpbmRleDogbnVtYmVyO1xuICBpdGVtOiBJdGVtO1xuICBkZWxldGVJdGVtOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgVG9Eb0l0ZW06IFJlYWN0LlNGQzxUb0RvSXRlbVByb3BzPiA9ICh7IGl0ZW0sIGluZGV4LCBkZWxldGVJdGVtIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlT25lU3VibWl0ID0gKCkgPT4ge1xuICAgIGRlbGV0ZUl0ZW0oaW5kZXgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIHtpdGVtLm5hbWV9IDxidXR0b24gb25DbGljaz17aGFuZGxlT25lU3VibWl0fT54PC9idXR0b24+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9JdGVtO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi4vY29udGFpbmVycy9Ub2RvSXRlbS5jb25uZWN0XCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzL1wiO1xuXG5pbnRlcmZhY2UgVG9kb0xpc3RQcm9wcyB7XG4gIGl0ZW1zOiBJdGVtW107XG59XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5TRkM8VG9kb0xpc3RQcm9wcz4gPSAoeyBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge21hcChpdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gPFRvRG9JdGVtIGtleT17a2V5fSBpdGVtPXtpdGVtfSBpbmRleD17a2V5fSAvPjtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycyk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IElTdG9yZVN0YXRlLCBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0b3JlU3RhdGUpID0+ICh7XG4gIHRvZG9MaXN0OiBzdGF0ZS50b2RvTGlzdFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGFkZEl0ZW06IChpdGVtOiBJdGVtKSA9PiBkaXNwYXRjaChhY3Rpb25zLmFkZEFjdGlvbihpdGVtKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShBcHApO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgVG9Eb0l0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9Eb0l0ZW1cIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IElTdG9yZVN0YXRlLCBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGRlbGV0ZUl0ZW06IChpbmRleDogbnVtYmVyKSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlbGV0ZUFjdGlvbihpbmRleCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFRvRG9JdGVtKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCIuL2NvbmZpZ3VyZVN0b3JlXCI7XG5pbXBvcnQgQXBwQ29ubmVjdCBmcm9tIFwiLi9jb250YWluZXJzL0FwcC5jb25uZWN0XCI7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwQ29ubmVjdCAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikgYXMgSFRNTEVsZW1lbnRcbik7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuaW1wb3J0IHsgdG9kb1JlZHVjZXIgfSBmcm9tIFwiLi90b2RvUmVkdWNlclwiO1xuaW1wb3J0IHsgSVN0b3JlU3RhdGUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8SVN0b3JlU3RhdGU+KHtcbiAgdG9kb0xpc3Q6IHRvZG9SZWR1Y2VyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG4iLCJpbXBvcnQgeyByZWplY3QgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCAqIGFzIHRvRG9BY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zXCI7XG5cbmNvbnN0IGNyZWF0ZUVtcHR5VG9EbyA9ICgpOiBJdGVtW10gPT4gW3sgbmFtZTogXCJUZXN0XCIgfV07XG5cbmV4cG9ydCBjb25zdCB0b2RvUmVkdWNlciA9IChcbiAgc3RhdGUgPSBjcmVhdGVFbXB0eVRvRG8oKSxcbiAgYWN0aW9uOiB0b0RvQWN0aW9ucy5Ub2RvQWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdG9Eb0FjdGlvbnMuQUREOlxuICAgICAgcmV0dXJuIGhhbmRsZUFkZEFjdGlvbihzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICAgIGNhc2UgdG9Eb0FjdGlvbnMuREVMOlxuICAgICAgcmV0dXJuIGhhbmRsZURlbEFjdGlvbihzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IGhhbmRsZUFkZEFjdGlvbiA9IChcbiAgc3RhdGU6IEl0ZW1bXSA9IGNyZWF0ZUVtcHR5VG9EbygpLFxuICBwYXlsb2FkOiBJdGVtXG4pOiBJdGVtW10gPT4ge1xuICByZXR1cm4gWy4uLnN0YXRlLCBwYXlsb2FkXTtcbn07XG5cbmNvbnN0IGhhbmRsZURlbEFjdGlvbiA9IChcbiAgc3RhdGU6IEl0ZW1bXSA9IGNyZWF0ZUVtcHR5VG9EbygpLFxuICBwYXlsb2FkOiBudW1iZXJcbik6IEl0ZW1bXSA9PiB7XG4gIHJldHVybiByZWplY3Qoc3RhdGUsIChfLCBrZXkpID0+IGtleSA9PT0gcGF5bG9hZCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==