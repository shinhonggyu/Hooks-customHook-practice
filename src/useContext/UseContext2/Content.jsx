import React from "react";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const { name, age } = useContext(UserContext);
  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>
        {name}님 {age}살, 좋은 하루 되세요.
      </p>
    </div>
  );
};

export default Content;
