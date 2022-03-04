import { Dispatch, memo, SetStateAction, useState } from "react";
import { ChangeEvent, VFC } from "react";
import { Button } from "../atoms/Button";
import { InputBox } from "../atoms/InputBox";

type Props = {
  todoList: string[];
  setTodoList: Dispatch<SetStateAction<string[]>>;
};

export const AddArea: VFC<Props> = memo((props) => {
  console.log("Add");
  const { todoList, setTodoList } = props;

  const [addText, setAddText] = useState<string>("");

  // 追加ボタン
  const onClickAdd = () => {
    if (addText === "") {
      alert("為すべきことをを入力してください");
    } else {
      const newTodoList: string[] = [...todoList];
      newTodoList.push(addText);
      setTodoList(newTodoList);
      console.log(addText);
      setAddText("");
    }
  };

  // テキストボックスのvalue取得
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setAddText(event.target.value);
  };

  return (
    <section id="addArea">
      <InputBox addText={addText} onChangeText={onChangeText} />
      <Button value="追加" clickEvent={onClickAdd} />
    </section>
  );
});
