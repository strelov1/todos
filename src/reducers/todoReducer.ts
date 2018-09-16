import { reject } from "lodash";

import { Item } from "../types";
import * as toDoActions from "../actions";

const createEmptyToDo = (): Item[] => [{ name: "Test" }];

export const todoReducer = (
  state = createEmptyToDo(),
  action: toDoActions.TodoAction
) => {
  switch (action.type) {
    case toDoActions.ADD:
      return handleAddAction(state, action.payload);
    case toDoActions.DEL:
      return handleDelAction(state, action.payload);
  }
  return state;
};

const handleAddAction = (
  state: Item[] = createEmptyToDo(),
  payload: Item
): Item[] => {
  return [...state, payload];
};

const handleDelAction = (
  state: Item[] = createEmptyToDo(),
  payload: number
): Item[] => {
  return reject(state, (_, key) => key === payload);
};
