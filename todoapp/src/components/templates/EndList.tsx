import { memo, VFC } from "react";

type Props = {
  todoList: string[];
  compTodoList: string[];
  onClickIncomplete: (index: number) => void;
  onClickRemoveComp: (index: number) => void;
};

export const EndList: VFC<Props> = memo((props) => {
  console.log("End");
  const { todoList, compTodoList, onClickIncomplete, onClickRemoveComp } =
    props;
  return (
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
  );
});
