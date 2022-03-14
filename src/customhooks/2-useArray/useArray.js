import { useState } from "react";

export default function useArray(defaultValue) {
  console.log("render");
  const [array, setArray] = useState(defaultValue);

  function push(element) {
    setArray((prevState) => [...prevState, element]);
  }

  function filter(callback) {
    setArray((prevState) => prevState.filter(callback));
  }

  function update(index, newElement) {
    setArray((prevState) => [
      ...prevState.slice(0, index),
      newElement,
      ...prevState.slice(index + 1, prevState.length),
    ]);
  }

  function remove(index) {
    setArray((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1, prevState.length),
    ]);
  }

  return { array, push, filter, update, remove };
}
