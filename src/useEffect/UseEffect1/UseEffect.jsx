import Resize from "./Resize";
import { useState } from "react";

const UseEffect = () => {
  const [mounted, toggleMounted] = useState(false);
  return (
    <div>
      {mounted && <Resize />}
      <button onClick={() => toggleMounted(!mounted)}>Toggle Mounted</button>
    </div>
  );
};

export default UseEffect;
