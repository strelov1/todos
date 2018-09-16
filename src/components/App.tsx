import * as React from "react";

import { Item } from "../types/";
import TodoList from "./TodoList";

interface AppProps {
  todoList: Item[];
  addItem: (item: Item) => void;
}

const App: React.SFC<AppProps> = ({ todoList, addItem }) => {
  const input = React.createRef<HTMLInputElement>();

  const handleOneSubmit = (event: React.MouseEvent): void => {
    addItem({ name: input.current.value });
    input.current.value = "";
  };

  return (
    <div>
      <TodoList items={todoList} />
      <div>
        <input type="text" ref={input} autoFocus={true} />
        <button onClick={handleOneSubmit}>Add</button>
      </div>
    </div>
  );
};

export default App;
