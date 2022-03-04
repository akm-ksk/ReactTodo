import { ChangeEvent, memo, VFC } from "react";

type Props = {
  addText: string;
  onChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const InputBox: VFC<Props> = memo((props) => {
  const { addText, onChangeText } = props;
  return <input type="text" value={addText} onChange={onChangeText} />;
});
