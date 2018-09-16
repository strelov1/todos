import { combineReducers } from "redux";

import { todoReducer } from "./todoReducer";
import { IStoreState } from "../types";

const rootReducer = combineReducers<IStoreState>({
  todoList: todoReducer
});

export default rootReducer;
