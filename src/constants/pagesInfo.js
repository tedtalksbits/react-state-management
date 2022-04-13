export const PAGESINFO = {
  reduxPage: {
    desc: "Redux is a library that has been around for a long time and is widely used in the React environment.",
    title: "Redux",
    code: "",
  },
  contextPage: {
    desc: " If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.",
    title: "Before You use context",
    code: `  
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

         `,
  },
};
