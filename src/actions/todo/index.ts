import { Item } from "../../types";

export const ADD = "ADD";
export type ADD = typeof ADD;

export const DEL = "DEL";
export type DEL = typeof DEL;

export interface AddAction {
  type: ADD;
  payload: Item;
}
export interface DeleteAction {
  type: DEL;
  payload: number;
}

export function addAction(item: Item): AddAction {
  return {
    type: ADD,
    payload: item
  };
}

export function deleteAction(id: number): DeleteAction {
  return {
    type: DEL,
    payload: id
  };
}

export type TodoAction = AddAction | DeleteAction;
