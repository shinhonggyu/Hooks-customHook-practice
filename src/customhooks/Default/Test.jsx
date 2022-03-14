import useTest from "./useTest";

const Test = () => {
  const [isVisible, setIsVisible] = useTest(true);
  const [isVisible2, setIsVisible2] = useTest();

  return (
    <div>
      {isVisible && <h1>Hear I Am!</h1>}
      <button onClick={setIsVisible}>Show/Hide</button>
      <br />
      {isVisible2 && <h1>I'm gere too!</h1>}
      <button onClick={setIsVisible2}>Show/Hide</button>
    </div>
  );
};

export default Test;
