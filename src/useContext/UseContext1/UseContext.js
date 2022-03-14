import Child1 from "./Child1";
import { createContext } from "react";

export const NameContext = createContext();

const UseContext = ({ name }) => {
  return (
    <div>
      <NameContext.Provider value={name}>
        <Child1 />
      </NameContext.Provider>
    </div>
  );
};

UseContext.defaultProps = {
  name: "shin",
};

export default UseContext;
