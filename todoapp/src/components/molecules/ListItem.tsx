import { VFC, memo } from "react";
import { ButtonNumber } from "../atoms/ButtonNumber";

type Props = {
  index: number;
  todo: string;
  clickEvent: (index: number) => void;
  onClickRemove: (index: number) => void;
};

export const ListItem: VFC<Props> = memo((props) => {
  const { index, todo, clickEvent, onClickRemove } = props;
  return (
    <li>
      <p>{todo}</p>
      <ButtonNumber index={index} value="完了" clickEvent={clickEvent} />
      <ButtonNumber index={index} value="削除" clickEvent={onClickRemove} />
    </li>
  );
});
