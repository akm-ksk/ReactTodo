import { memo } from "react";
import { ChangeEvent, VFC } from "react";

type Props = {
  addText: string;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
};

export const AddArea: VFC<Props> = memo((props) => {
  console.log("Add");
  const { addText, onChangeText, onClickAdd } = props;

  return (
    <section id="addArea">
      <input type="text" value={addText} onChange={onChangeText} />
      <input type="button" value="追加" onClick={onClickAdd} />
    </section>
  );
});
