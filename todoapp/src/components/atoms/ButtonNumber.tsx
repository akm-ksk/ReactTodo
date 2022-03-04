import { memo, VFC } from "react";

type Props = {
  index: number;
  value: string;
  clickEvent: (index: number) => void;
};

export const ButtonNumber: VFC<Props> = memo((props) => {
  const { index, value, clickEvent } = props;
  return (
    <input type="button" value={value} onClick={() => clickEvent(index)} />
  );
});
