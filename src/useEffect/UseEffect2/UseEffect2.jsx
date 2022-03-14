import React, { useState, useEffect } from "react";
import Timer from "./Timer";

const UseEffect2 = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && <Timer />}
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
    </div>
  );
};

export default UseEffect2;
