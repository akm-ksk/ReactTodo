import { Dispatch, memo, SetStateAction, VFC } from "react";
import { ListItem } from "../molecules/ListItem";

type Props = {
  todoList: string[];
  setTodoList: Dispatch<SetStateAction<string[]>>;
  compTodoList: string[];
  setCompTodoList: Dispatch<SetStateAction<string[]>>;
};

export const EndList: VFC<Props> = memo((props) => {
  const { todoList, setTodoList, compTodoList, setCompTodoList } = props;

  // 未完了ボタン
  const onClickIncomplete = (index: number) => {
    const newTodoList = [...todoList];
    newTodoList.push(compTodoList[index]);
    setTodoList(newTodoList);

    const newCompTodoList = [...compTodoList];
    newCompTodoList.splice(index, 1);
    setCompTodoList(newCompTodoList);
  };

  // 削除ボタンComp
  const onClickRemoveComp = (index: number) => {
    const newCompTodoList = [...compTodoList];
    newCompTodoList.splice(index, 1);
    setCompTodoList(newCompTodoList);
  };

  return (
    <section id="endList">
      <h2>Complete List</h2>
      {compTodoList.length > 0 ? (
        <ul>
          {compTodoList.map((comp, index) => (
            <ListItem
              key={index}
              index={index}
              todo={comp}
              clickEvent={onClickIncomplete}
              onClickRemove={onClickRemoveComp}
            />
          ))}
        </ul>
      ) : (
        todoList.length > 0 && <p>為すべきことを、為すのです</p>
      )}
    </section>
  );
});
