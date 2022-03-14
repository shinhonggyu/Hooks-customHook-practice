import React, { useState, useRef, useEffect } from "react";

const UseRef2 = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    // ref는 리렌더링을 발생시키지 않고 초기화되지 않는다.
    renderCount.current = renderCount.current + 1;
    console.log("렌더링 수:", renderCount.current);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default UseRef2;
