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
const Menu_1 = __webpack_require__(/*! ./Menu */ "./src/components/Menu.tsx");
const menu_1 = __webpack_require__(/*! ../menu */ "./src/menu.ts");
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
            React.createElement("button", { onClick: handleOneSubmit }, "Add")),
        React.createElement(Menu_1.default, { menu: menu_1.default })));
};
exports.default = App;


/***/ }),

/***/ "./src/components/Menu.tsx":
/*!*********************************!*\
  !*** ./src/components/Menu.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
const MenuItemBlock = ({ menu, openHandler, showItems }) => {
    return (React.createElement("ul", null, menu.map((item) => {
        return (React.createElement("li", { key: item.id },
            item.title,
            item.items ? (React.createElement("button", { onClick: () => openHandler(item.id) }, ">")) : (""),
            item.items && showItems.includes(item.id) ? (React.createElement(MenuItemBlock, { menu: item.items, openHandler: openHandler, showItems: showItems })) : ("")));
    })));
};
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.openHandler = id => {
            if (!this.state.showItems.includes(id)) {
                this.setState({
                    showItems: [...this.state.showItems, id]
                });
                console.log("add", id);
            }
            else {
                this.setState({
                    showItems: this.state.showItems.filter(item => item !== id)
                });
                console.log("del", id);
            }
        };
        this.state = {
            showItems: []
        };
        this.menu = this.prepareMenu(this.props.menu);
    }
    prepareMenu(menu) {
        return menu.map((item) => {
            if (item.items) {
                return Object.assign({ id: uuid_1.v4() }, item, { items: this.prepareMenu(item.items) });
            }
            return Object.assign({ id: uuid_1.v4() }, item);
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(MenuItemBlock, { menu: this.menu, openHandler: this.openHandler, showItems: this.state.showItems })));
    }
}
exports.default = Menu;


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

/***/ "./src/menu.ts":
/*!*********************!*\
  !*** ./src/menu.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//Основываясь на примере который был показан на лекции
//Создайте функцию которая будет генерировать
// меню любой вложенности + обработчик события для открывания/закрывания его
//Пример списка меню ниже.
//P.S. Очень важно что бы вложенности могла быть любой
Object.defineProperty(exports, "__esModule", { value: true });
const menu = [
    {
        title: "Животные",
        items: [
            {
                title: "Млекопитающие",
                items: [
                    { title: "Коровы" },
                    { title: "Ослы" },
                    { title: "Собаки" },
                    { title: "Тигры" }
                ]
            },
            {
                title: "Другие",
                items: [{ title: "Змеи" }, { title: "Птицы" }, { title: "Ящерицы" }]
            }
        ]
    },
    {
        title: "Рыбы",
        items: [
            {
                title: "Аквариумные",
                items: [{ title: "Гуппи" }, { title: "Скалярии" }]
            },
            {
                title: "Форель",
                items: [{ title: "Морская форель" }]
            }
        ]
    }
];
exports.default = menu;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdG9kby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RvRG9JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RvTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyZVN0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL0FwcC5jb25uZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Ub2RvSXRlbS5jb25uZWN0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvdG9kb1JlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUFDakMsT0FBYSxFQUNMLEVBQUU7SUFDVixPQUFPLENBQUMsR0FBRyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FDdEIsUUFBZ0IsZUFBZSxFQUFFLEVBQ2pDLE9BQWUsRUFDUCxFQUFFO0lBQ1YsT0FBTyxlQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzeFwiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vdG9kb1wiO1xuIiwiaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgQUREID0gXCJBRERcIjtcbmV4cG9ydCB0eXBlIEFERCA9IHR5cGVvZiBBREQ7XG5cbmV4cG9ydCBjb25zdCBERUwgPSBcIkRFTFwiO1xuZXhwb3J0IHR5cGUgREVMID0gdHlwZW9mIERFTDtcblxuZXhwb3J0IGludGVyZmFjZSBBZGRBY3Rpb24ge1xuICB0eXBlOiBBREQ7XG4gIHBheWxvYWQ6IEl0ZW07XG59XG5leHBvcnQgaW50ZXJmYWNlIERlbGV0ZUFjdGlvbiB7XG4gIHR5cGU6IERFTDtcbiAgcGF5bG9hZDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQWN0aW9uKGl0ZW06IEl0ZW0pOiBBZGRBY3Rpb24ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFERCxcbiAgICBwYXlsb2FkOiBpdGVtXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVBY3Rpb24oaWQ6IG51bWJlcik6IERlbGV0ZUFjdGlvbiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogREVMLFxuICAgIHBheWxvYWQ6IGlkXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFRvZG9BY3Rpb24gPSBBZGRBY3Rpb24gfCBEZWxldGVBY3Rpb247XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi90eXBlcy9cIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9Ub2RvTGlzdFwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vTWVudVwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL21lbnVcIjtcblxuaW50ZXJmYWNlIEFwcFByb3BzIHtcbiAgdG9kb0xpc3Q6IEl0ZW1bXTtcbiAgYWRkSXRlbTogKGl0ZW06IEl0ZW0pID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFwcDogUmVhY3QuU0ZDPEFwcFByb3BzPiA9ICh7IHRvZG9MaXN0LCBhZGRJdGVtIH0pID0+IHtcbiAgY29uc3QgaW5wdXQgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcblxuICBjb25zdCBoYW5kbGVPbmVTdWJtaXQgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBhZGRJdGVtKHsgbmFtZTogaW5wdXQuY3VycmVudC52YWx1ZSB9KTtcbiAgICBpbnB1dC5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VG9kb0xpc3QgaXRlbXM9e3RvZG9MaXN0fSAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPXtpbnB1dH0gYXV0b0ZvY3VzPXt0cnVlfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9uZVN1Ym1pdH0+QWRkPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZW51IG1lbnU9e21lbnV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCBtZW51LCB7IE1lbnVJdGVtIH0gZnJvbSBcIi4uL21lbnVcIjtcblxuaW50ZXJmYWNlIE1lbnVJdGVtSW5kZXhlZCBleHRlbmRzIE1lbnVJdGVtIHtcbiAgaWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIE1lbnVJdGVtQmxvY2tQcm9wcyB7XG4gIG1lbnU6IE1lbnVJdGVtSW5kZXhlZFtdO1xuICBzaG93SXRlbXM6IHN0cmluZ1tdO1xuICBvcGVuSGFuZGxlcjogKGlkOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IE1lbnVJdGVtQmxvY2s6IFJlYWN0LlNGQzxhbnk+ID0gKHsgbWVudSwgb3BlbkhhbmRsZXIsIHNob3dJdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge21lbnUubWFwKChpdGVtOiBNZW51SXRlbUluZGV4ZWQpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAge2l0ZW0uaXRlbXMgPyAoXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb3BlbkhhbmRsZXIoaXRlbS5pZCl9Pj48L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIFwiXCJcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aXRlbS5pdGVtcyAmJiBzaG93SXRlbXMuaW5jbHVkZXMoaXRlbS5pZCkgPyAoXG4gICAgICAgICAgICAgIDxNZW51SXRlbUJsb2NrXG4gICAgICAgICAgICAgICAgbWVudT17aXRlbS5pdGVtc31cbiAgICAgICAgICAgICAgICBvcGVuSGFuZGxlcj17b3BlbkhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgc2hvd0l0ZW1zPXtzaG93SXRlbXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuaW50ZXJmYWNlIE1lbnVQcm9wcyB7XG4gIG1lbnU6IE1lbnVJdGVtW107XG59XG5cbmludGVyZmFjZSBNZW51U3RhdGUge1xuICBzaG93SXRlbXM6IHN0cmluZ1tdO1xufVxuXG5jbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1lbnVQcm9wcywgTWVudVN0YXRlPiB7XG4gIHByaXZhdGUgbWVudTogTWVudUl0ZW1JbmRleGVkW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByb3BzOiBNZW51UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dJdGVtczogW11cbiAgICB9O1xuXG4gICAgdGhpcy5tZW51ID0gdGhpcy5wcmVwYXJlTWVudSh0aGlzLnByb3BzLm1lbnUpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuSGFuZGxlciA9IGlkID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd0l0ZW1zLmluY2x1ZGVzKGlkKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNob3dJdGVtczogWy4uLnRoaXMuc3RhdGUuc2hvd0l0ZW1zLCBpZF1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJhZGRcIiwgaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd0l0ZW1zOiB0aGlzLnN0YXRlLnNob3dJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBpZClcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJkZWxcIiwgaWQpO1xuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIHByZXBhcmVNZW51KG1lbnUpIHtcbiAgICByZXR1cm4gbWVudS5tYXAoXG4gICAgICAoaXRlbTogTWVudUl0ZW0pOiBNZW51SXRlbUluZGV4ZWQgPT4ge1xuICAgICAgICBpZiAoaXRlbS5pdGVtcykge1xuICAgICAgICAgIHJldHVybiB7IGlkOiB2NCgpLCAuLi5pdGVtLCBpdGVtczogdGhpcy5wcmVwYXJlTWVudShpdGVtLml0ZW1zKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGlkOiB2NCgpLCAuLi5pdGVtIH07XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxNZW51SXRlbUJsb2NrXG4gICAgICAgICAgbWVudT17dGhpcy5tZW51fVxuICAgICAgICAgIG9wZW5IYW5kbGVyPXt0aGlzLm9wZW5IYW5kbGVyfVxuICAgICAgICAgIHNob3dJdGVtcz17dGhpcy5zdGF0ZS5zaG93SXRlbXN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi90eXBlcy9cIjtcblxuaW50ZXJmYWNlIFRvRG9JdGVtUHJvcHMge1xuICBpbmRleDogbnVtYmVyO1xuICBpdGVtOiBJdGVtO1xuICBkZWxldGVJdGVtOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgVG9Eb0l0ZW06IFJlYWN0LlNGQzxUb0RvSXRlbVByb3BzPiA9ICh7IGl0ZW0sIGluZGV4LCBkZWxldGVJdGVtIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlT25lU3VibWl0ID0gKCkgPT4ge1xuICAgIGRlbGV0ZUl0ZW0oaW5kZXgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIHtpdGVtLm5hbWV9IDxidXR0b24gb25DbGljaz17aGFuZGxlT25lU3VibWl0fT54PC9idXR0b24+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9JdGVtO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBUb0RvSXRlbSBmcm9tIFwiLi4vY29udGFpbmVycy9Ub2RvSXRlbS5jb25uZWN0XCI7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzL1wiO1xuXG5pbnRlcmZhY2UgVG9kb0xpc3RQcm9wcyB7XG4gIGl0ZW1zOiBJdGVtW107XG59XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5TRkM8VG9kb0xpc3RQcm9wcz4gPSAoeyBpdGVtcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge21hcChpdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gPFRvRG9JdGVtIGtleT17a2V5fSBpdGVtPXtpdGVtfSBpbmRleD17a2V5fSAvPjtcbiAgICAgIH0pfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5cbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycyk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBcIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IElTdG9yZVN0YXRlLCBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogSVN0b3JlU3RhdGUpID0+ICh7XG4gIHRvZG9MaXN0OiBzdGF0ZS50b2RvTGlzdFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGFkZEl0ZW06IChpdGVtOiBJdGVtKSA9PiBkaXNwYXRjaChhY3Rpb25zLmFkZEFjdGlvbihpdGVtKSlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShBcHApO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5pbXBvcnQgVG9Eb0l0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9Eb0l0ZW1cIjtcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcbmltcG9ydCB7IElTdG9yZVN0YXRlLCBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGRlbGV0ZUl0ZW06IChpbmRleDogbnVtYmVyKSA9PiBkaXNwYXRjaChhY3Rpb25zLmRlbGV0ZUFjdGlvbihpbmRleCkpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKFRvRG9JdGVtKTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gXCIuL2NvbmZpZ3VyZVN0b3JlXCI7XG5pbXBvcnQgQXBwQ29ubmVjdCBmcm9tIFwiLi9jb250YWluZXJzL0FwcC5jb25uZWN0XCI7XG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8QXBwQ29ubmVjdCAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikgYXMgSFRNTEVsZW1lbnRcbik7XG4iLCIvL9Ce0YHQvdC+0LLRi9Cy0LDRj9GB0Ywg0L3QsCDQv9GA0LjQvNC10YDQtSDQutC+0YLQvtGA0YvQuSDQsdGL0Lsg0L/QvtC60LDQt9Cw0L0g0L3QsCDQu9C10LrRhtC40Lhcbi8v0KHQvtC30LTQsNC50YLQtSDRhNGD0L3QutGG0LjRjiDQutC+0YLQvtGA0LDRjyDQsdGD0LTQtdGCINCz0LXQvdC10YDQuNGA0L7QstCw0YLRjFxuLy8g0LzQtdC90Y4g0LvRjtCx0L7QuSDQstC70L7QttC10L3QvdC+0YHRgtC4ICsg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8g0LTQu9GPINC+0YLQutGA0YvQstCw0L3QuNGPL9C30LDQutGA0YvQstCw0L3QuNGPINC10LPQvlxuLy/Qn9GA0LjQvNC10YAg0YHQv9C40YHQutCwINC80LXQvdGOINC90LjQttC1LlxuLy9QLlMuINCe0YfQtdC90Ywg0LLQsNC20L3QviDRh9GC0L4g0LHRiyDQstC70L7QttC10L3QvdC+0YHRgtC4INC80L7Qs9C70LAg0LHRi9GC0Ywg0LvRjtCx0L7QuVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM/OiBNZW51SXRlbVtdO1xufVxuXG5jb25zdCBtZW51OiBNZW51SXRlbVtdID0gW1xuICB7XG4gICAgdGl0bGU6IFwi0JbQuNCy0L7RgtC90YvQtVwiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcItCc0LvQtdC60L7Qv9C40YLQsNGO0YnQuNC1XCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0aXRsZTogXCLQmtC+0YDQvtCy0YtcIiB9LFxuICAgICAgICAgIHsgdGl0bGU6IFwi0J7RgdC70YtcIiB9LFxuICAgICAgICAgIHsgdGl0bGU6IFwi0KHQvtCx0LDQutC4XCIgfSxcbiAgICAgICAgICB7IHRpdGxlOiBcItCi0LjQs9GA0YtcIiB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcItCU0YDRg9Cz0LjQtVwiLFxuICAgICAgICBpdGVtczogW3sgdGl0bGU6IFwi0JfQvNC10LhcIiB9LCB7IHRpdGxlOiBcItCf0YLQuNGG0YtcIiB9LCB7IHRpdGxlOiBcItCv0YnQtdGA0LjRhtGLXCIgfV1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCLQoNGL0LHRi1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcItCQ0LrQstCw0YDQuNGD0LzQvdGL0LVcIixcbiAgICAgICAgaXRlbXM6IFt7IHRpdGxlOiBcItCT0YPQv9C/0LhcIiB9LCB7IHRpdGxlOiBcItCh0LrQsNC70Y/RgNC40LhcIiB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwi0KTQvtGA0LXQu9GMXCIsXG4gICAgICAgIGl0ZW1zOiBbeyB0aXRsZTogXCLQnNC+0YDRgdC60LDRjyDRhNC+0YDQtdC70YxcIiB9XVxuICAgICAgfVxuICAgIF1cbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuXG5pbXBvcnQgeyB0b2RvUmVkdWNlciB9IGZyb20gXCIuL3RvZG9SZWR1Y2VyXCI7XG5pbXBvcnQgeyBJU3RvcmVTdGF0ZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyczxJU3RvcmVTdGF0ZT4oe1xuICB0b2RvTGlzdDogdG9kb1JlZHVjZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiIsImltcG9ydCB7IHJlamVjdCB9IGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0ICogYXMgdG9Eb0FjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnNcIjtcblxuY29uc3QgY3JlYXRlRW1wdHlUb0RvID0gKCk6IEl0ZW1bXSA9PiBbeyBuYW1lOiBcIlRlc3RcIiB9XTtcblxuZXhwb3J0IGNvbnN0IHRvZG9SZWR1Y2VyID0gKFxuICBzdGF0ZSA9IGNyZWF0ZUVtcHR5VG9EbygpLFxuICBhY3Rpb246IHRvRG9BY3Rpb25zLlRvZG9BY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSB0b0RvQWN0aW9ucy5BREQ6XG4gICAgICByZXR1cm4gaGFuZGxlQWRkQWN0aW9uKHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSB0b0RvQWN0aW9ucy5ERUw6XG4gICAgICByZXR1cm4gaGFuZGxlRGVsQWN0aW9uKHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3QgaGFuZGxlQWRkQWN0aW9uID0gKFxuICBzdGF0ZTogSXRlbVtdID0gY3JlYXRlRW1wdHlUb0RvKCksXG4gIHBheWxvYWQ6IEl0ZW1cbik6IEl0ZW1bXSA9PiB7XG4gIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xufTtcblxuY29uc3QgaGFuZGxlRGVsQWN0aW9uID0gKFxuICBzdGF0ZTogSXRlbVtdID0gY3JlYXRlRW1wdHlUb0RvKCksXG4gIHBheWxvYWQ6IG51bWJlclxuKTogSXRlbVtdID0+IHtcbiAgcmV0dXJuIHJlamVjdChzdGF0ZSwgKF8sIGtleSkgPT4ga2V5ID09PSBwYXlsb2FkKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9