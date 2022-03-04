import { VFC } from "react";

type Props = {
  todoList: string[];
  compTodoList: string[];
  onClickComp: (index: number) => void;
  onClickRemoveTodo: (index: number) => void;
};

export const TodoList: VFC<Props> = (props) => {
  console.log("todo");
  const { todoList, compTodoList, onClickComp, onClickRemoveTodo } = props;
  return (
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
  );
};
