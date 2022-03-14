import { useState } from "react";

export default function useToggle(defaultValue) {
  console.log("useToggle");
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    console.log(value);
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
