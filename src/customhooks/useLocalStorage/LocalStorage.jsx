import useLocalStorage from "./useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("");

  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default LocalStorage;
