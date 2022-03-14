import React, { useState, useReducer } from "react";

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + parseInt(action.payload, 10);
    case ACTION_TYPES.withdraw:
      return state + parseInt(action.payload, 10);
    default:
      return state;
  }
}

const UseReducer2 = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고: {money}원</p>
      <input
        type="number"
        step="1000"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
          setNumber(0);
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
          setNumber(0);
        }}
      >
        출금
      </button>
    </div>
  );
};

export default UseReducer2;
