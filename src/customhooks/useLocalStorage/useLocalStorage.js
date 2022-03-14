import { useState } from "react";

export default function useLocalStorage(initialValue) {
  console.log("useLocalStorage");
  const [value, setValue] = useState(initialValue);

  return [value, setValue];
}
