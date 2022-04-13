import React, { useContext, useState } from "react";

const CountContext = React.createContext();

//custom hook
export default function useCountContext() {
  return useContext(CountContext);
}

//provider
export const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
