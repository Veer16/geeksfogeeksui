import { createContext, useRef, useState } from "react";
import Context from "./Context";
import FuncProps from "./FuncProps";

// Context hook example

export const tokenContext = createContext<string>("");

export default function Hooks() {
  const [name, setName] = useState<string>("");
  const [num, setNum] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <label>{`Hello ${name}`}</label>
      <button ref={buttonRef} onClick={(e) => setNum(num + 1)}>
        Increment
      </button>
      <label>{num}</label>
      <FuncProps init={5} />
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => alert(inputRef.current?.value)} // Nullish Collacing
      />

      {/* Using context to pass the value to the child components */}

      <tokenContext.Provider value={name}>
        <Context />
      </tokenContext.Provider>
    </>
  );
}
console.log("Account already existed - No OTP ".toUpperCase());
