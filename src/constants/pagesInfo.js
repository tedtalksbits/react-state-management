export const PAGESINFO = {
  reduxPage: {
    desc: "Redux is a library that has been around for a long time and is widely used in the React environment.",
    title: "Redux",
    code: `
    // count.actions.jsx

    export const ADD = "ADD";
    export const addOne = () => ({ type: ADD });
    
    export const SUB = "SUB";
    export const subOne = () => ({ type: SUB });
    
    export const ADDSOME = "ADDSOME";
    export const addSome = (value) => ({ type: ADDSOME, payload: value });
    
    export const SUBSOME = "  SUBSOME";
    export const subSome = (value) => ({ type: SUBSOME, payload: value });
    
    export const RESET = "  RESET";
    export const reset = () => ({ type: RESET });
    
    import { ADD, ADDSOME, RESET, SUB, SUBSOME } from "../actions/count.actions";


   // count.reducer.jsx 

   const CountReducer = (state = { count: 0 }, action) => {
   switch (action.type) {
      case ADD:
         return { count: state.count + 1 };
      case SUB:
         return { count: state.count - 1 };
      case ADDSOME:
         return { count: state.count + action.payload };
      case SUBSOME:
         return { count: state.count - action.payload };
      case RESET:
         return { count: 0 };

      default:
         return state;
   }
   };

   export default CountReducer;
    
   // index.jsx

   import { createStore } from "redux";
   import CountReducer from "./reducers/count.reducer";
   export default createStore(CountReducer);
    

   // app.jsx

   import { useSelector, useDispatch } from "react-redux";
   import { addOne, subOne } from "../store/actions/count.actions";
   
   ...
   const dispatch = useDispatch();
   const count = useSelector((state) => state.count);

   ...
   <PlusCircle size={32} onClick={() => dispatch(addOne())} />
   <MinusCircle size={32} onClick={() => dispatch(subOne())} />
    `,
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
