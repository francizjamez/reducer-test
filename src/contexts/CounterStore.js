import { createContext, useReducer } from "react";

const CounterStore = createContext();

export default CounterStore;

export function CounterContextProvider(props) {
  let initialState = { counterValue: 0 };
  const [counterState, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action) {
      case "increment":
        return { counterValue: state.counterValue + 1 };
      case "decrement":
        return { counterValue: state.counterValue - 1 };
      case "reset":
        return { counterValue: 0 };
      default:
        throw new Error("Wrong action");
    }
  }
  return (
    <CounterStore.Provider value={{ counterState, dispatch }}>
      {props.children}
    </CounterStore.Provider>
  );
}
