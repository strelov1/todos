import * as React from "react";
import { map } from "lodash";

import ToDoItem from "../containers/TodoItem.connect";
import { Item } from "../types/";

interface TodoListProps {
  items: Item[];
}

const TodoList: React.SFC<TodoListProps> = ({ items }) => {
  return (
    <ul>
      {map(items, (item, key) => {
        return <ToDoItem key={key} item={item} index={key} />;
      })}
    </ul>
  );
};

export default TodoList;
