import { memo, VFC } from "react";

type Props = {
  value: string;
  clickEvent: () => void;
};

export const Button: VFC<Props> = memo((props) => {
  const { value, clickEvent } = props;
  return <input type="button" value={value} onClick={clickEvent} />;
});
