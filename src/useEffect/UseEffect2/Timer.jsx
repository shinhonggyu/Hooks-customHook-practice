import React, { useEffect, useState } from "react";

const test = () => {
  console.log("엄청 무거운 작업..");
  return "";
};

const Timer = () => {
  const [name, setName] = useState(() => {
    return test();
  });
  console.log(name);
  useEffect(() => {
    console.log("함수실행");
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000);

    return () => {
      console.log("clean up");
      clearInterval(timer);
    };
  }, [name]);

  return (
    <div>
      <span>타이머를 시작합니다. 콘손을 보세요</span>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Timer;
