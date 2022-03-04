import { Dispatch, VFC, SetStateAction, memo } from "react";
import { ListItem } from "../molecules/ListItem";

type Props = {
  todoList: string[];
  setTodoList: Dispatch<SetStateAction<string[]>>;
  compTodoList: string[];
  setCompTodoList: Dispatch<SetStateAction<string[]>>;
};

export const TodoList: VFC<Props> = memo((props) => {
  const { todoList, setTodoList, compTodoList, setCompTodoList } = props;

  // 完了ボタン
  const onClickComp = (index: number) => {
    const newCompTodoList = [...compTodoList];
    newCompTodoList.push(todoList[index]);
    setCompTodoList(newCompTodoList);

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  // 削除ボタンTodo
  const onClickRemoveTodo = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <section id="todoList">
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        <ul>
          {todoList.map((todo, index) => (
            <ListItem
              key={index}
              index={index}
              todo={todo}
              clickEvent={onClickComp}
              onClickRemove={onClickRemoveTodo}
            />
          ))}
        </ul>
      ) : compTodoList.length > 0 ? (
        <p>見事…なり…</p>
      ) : (
        <p>為すべきことを追加してください!</p>
      )}
    </section>
  );
});
