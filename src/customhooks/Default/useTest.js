import { useState } from "react";

export default function useTest(defaultState = false) {
  console.log("useTest");
  const [state, setState] = useState(defaultState);

  const flipState = () => setState(!state);

  return [state, flipState];
}
