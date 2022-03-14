import React, { useState } from "react";
import "./UseContext2.css";
import Page from "./Page";

import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const UseContext2 = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider
      value={{
        name: "신홍규",
        age: 31,
      }}
    >
      <ThemeContext.Provider
        value={{
          isDark,
          setIsDark,
        }}
      >
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default UseContext2;
