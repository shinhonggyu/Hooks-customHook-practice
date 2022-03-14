import { useReducer } from "react";

const initialState = {
  numGuitars: 1,
  showEmoji: false,
};

function reducer(state = initialState, action) {
  if (action.type === "ADD") {
    return {
      numGuitars: state.numGuitars + 1,
      showEmoji: true,
    };
  }

  if (action.type === "REMOVE") {
    return {
      numGuitars: state.numGuitars - 1,
      showEmoji: false,
    };
  }

  if (action.type === "RESET") {
    return {
      numGuitars: 1,
      showEmoji: false,
    };
  }

  return state;
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{"⭐".repeat(state.numGuitars)}</h1>
      <button onClick={() => dispatch({ type: "ADD" })}>add emoji</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>remove emoji</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
      {state.showEmoji && <h2>😭</h2>}
    </div>
  );
};

export default UseReducer;
