import { useEffect, useRef } from "react";
import Audio from "./Audio";

const UseRef = () => {
  const audioRef = useRef(null);

  const handleClick = () => {
    audioRef.current.play();
  };

  return (
    <div>
      <Audio ref={audioRef} />
      <button onClick={handleClick}>Audio</button>
    </div>
  );
};

export default UseRef;
