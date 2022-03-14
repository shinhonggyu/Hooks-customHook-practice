import { useEffect, useRef } from "react";

const UseRef3 = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button>로그인</button>
    </div>
  );
};

export default UseRef3;
