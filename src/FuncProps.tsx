import { useState } from "react";

interface IProps {
  init: number;
}
export default function FuncProps(props: IProps) {
  const [num, setNum] = useState<number>(props.init);
  return (
    <>
      <button onClick={(e) => setNum(num + 1)}>Increment by 1</button>
      <label>{num}</label>
    </>
  );
}
