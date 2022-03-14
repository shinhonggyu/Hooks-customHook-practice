import React, { useState, useReducer, useRef } from "react";

const dummyData = [
  {
    id: 1,
    name: "신홍규",
    attend: false,
  },
  {
    id: 2,
    name: "태연",
    attend: false,
  },
  {
    id: 3,
    name: "사나",
    attend: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    case "TOGGLE":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, attend: !item.attend };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}

const UseReducer3 = () => {
  const [name, setName] = useState("");
  const [출석부, dispatch] = useReducer(reducer, dummyData);
  const studentId = useRef(4);

  const addStudent = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        id: studentId.current,
        name,
        attend: false,
      },
    });
    setName("");
    studentId.current++;
  };

  const deleteStudent = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  const toggleAttend = (id) => {
    dispatch({
      type: "TOGGLE",
      id,
    });
  };

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {출석부.length}</p>
      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>추가</button>
      </form>
      <ul style={{ padding: "0px", margin: "0px" }}>
        {출석부.map((item) => {
          return (
            <li key={item.id}>
              <span
                style={{ textDecoration: item.attend && "line-through" }}
                onClick={() => toggleAttend(item.id)}
              >
                {item.name}
              </span>
              <button onClick={() => deleteStudent(item.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseReducer3;
