import React, { useState, useEffect } from "react";

const Box = ({ createBoxStyle }) => {
  const [style, setStyle] = useState({});
  console.log("Box 렌더링");
  useEffect(() => {
    console.log("박스 키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}>Box</div>;
};

export default Box;
