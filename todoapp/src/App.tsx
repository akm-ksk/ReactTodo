import { ChangeEvent, FC, useState } from "react";
import "./App.css";

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

      <section id="addArea">
        <input type="text" value={addText} onChange={onChangeText} />
        <input type="button" value="追加" onClick={onClickAdd} />
      </section>

      <section id="todoList">
        <h2>Todo List</h2>
        {todoList.length > 0 ? (
          <ul>
            {todoList.map((todo, index) => (
              <li key={index}>
                <p>{todo}</p>
                <input
                  type="button"
                  value="完了"
                  onClick={() => onClickComp(index)}
                />
                <input
                  type="button"
                  value="削除"
                  onClick={() => onClickRemoveTodo(index)}
                />
              </li>
            ))}
          </ul>
        ) : compTodoList.length > 0 ? (
          <p>見事…なり…</p>
        ) : (
          <p>為すべきことを追加してください!</p>
        )}
      </section>

      <section id="endList">
        <h2>Complete List</h2>
        {compTodoList.length > 0 ? (
          <ul>
            {compTodoList.map((comp, index) => (
              <li key={index}>
                <p>{comp}</p>
                <input
                  type="button"
                  value="未完了"
                  onClick={() => onClickIncomplete(index)}
                />
                <input
                  type="button"
                  value="削除"
                  onClick={() => onClickRemoveComp(index)}
                />
              </li>
            ))}
          </ul>
        ) : (
          todoList.length > 0 && <p>為すべきことを、為すのです</p>
        )}
      </section>
    </div>
  );
};

export default App;
