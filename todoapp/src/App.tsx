import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { AddArea } from "./components/templates/AddArea";
import { EndList } from "./components/templates/EndList";
import { TodoList } from "./components/templates/TodoList";

export const App: FC = () => {
  const [addText, setAddText] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);
  const [compTodoList, setCompTodoList] = useState<string[]>([]);

  // 追加ボタン
  const onClickAdd = () => {
    if (addText === "") {
      alert("為すべきことをを入力してください");
    } else {
      const newTodoList = [...todoList];
      newTodoList.push(addText);
      setTodoList(newTodoList);
      console.log(addText);
      setAddText("");
    }
  };

  // 完了ボタン
  const onClickComp = (index: number) => {
    const newCompTodoList = [...compTodoList];
    newCompTodoList.push(todoList[index]);
    setCompTodoList(newCompTodoList);

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // 未完了ボタン
  const onClickIncomplete = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.push(compTodoList[index]);
    setTodoList(newTodoList);

    const newCompTodoList = [...compTodoList];
    newCompTodoList.splice(index, 1);
    setCompTodoList(newCompTodoList);
  };

  // 削除ボタンTodo
  const onClickRemoveTodo = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // 削除ボタンComp
  const onClickRemoveComp = (index: number) => {
    const newCompTodoList = [...compTodoList];
    newCompTodoList.splice(index, 1);
    setCompTodoList(newCompTodoList);
  };

  // テキストボックスのvalue取得
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setAddText(event.target.value);
  };

  console.log(todoList);

  return (
    <div>
      <h1>React Typescript Todo List</h1>

      <AddArea
        addText={addText}
        onChangeText={onChangeText}
        onClickAdd={onClickAdd}
      />

      <TodoList
        todoList={todoList}
        compTodoList={compTodoList}
        onClickComp={onClickComp}
        onClickRemoveTodo={onClickRemoveTodo}
      />

      <EndList
        todoList={todoList}
        compTodoList={compTodoList}
        onClickIncomplete={onClickIncomplete}
        onClickRemoveComp={onClickRemoveComp}
      />
    </div>
  );
};

export default App;
