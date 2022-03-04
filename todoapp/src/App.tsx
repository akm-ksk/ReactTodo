import { FC, useState } from "react";
import "./App.css";
import { AddArea } from "./components/templates/AddArea";
import { EndList } from "./components/templates/EndList";
import { TodoList } from "./components/templates/TodoList";

export const App: FC = () => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [compTodoList, setCompTodoList] = useState<string[]>([]);

  console.log("App");

  return (
    <div>
      <h1>React Typescript Todo List</h1>

      <AddArea todoList={todoList} setTodoList={setTodoList} />

      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        compTodoList={compTodoList}
        setCompTodoList={setCompTodoList}
      />

      <EndList
        todoList={todoList}
        setTodoList={setTodoList}
        compTodoList={compTodoList}
        setCompTodoList={setCompTodoList}
      />
    </div>
  );
};

export default App;
