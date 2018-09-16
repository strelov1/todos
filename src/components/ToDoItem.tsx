import * as React from "react";

import { Item } from "../types/";

interface ToDoItemProps {
  index: number;
  item: Item;
  deleteItem: (id: number) => void;
}

const ToDoItem: React.SFC<ToDoItemProps> = ({ item, index, deleteItem }) => {
  const handleOneSubmit = () => {
    deleteItem(index);
  };
  return (
    <li>
      {item.name} <button onClick={handleOneSubmit}>x</button>
    </li>
  );
};

export default ToDoItem;
