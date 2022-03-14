import React from "react";
import { NameContext } from "./UseContext";
import { useContext } from "react";

const Child2 = () => {
  const name = useContext(NameContext);
  return <div>{name}</div>;
};

export default Child2;
