import { useContext } from "react";

import CounterStore from "../../contexts/CounterStore";

const Index = () => {
  const { counterState, dispatch } = useContext(CounterStore);
  return (
    <div>
      <h2>Counter</h2>
      <div className="flex">
        <button onClick={() => dispatch("decrement")}>-</button>
        <span>{counterState.counterValue}</span>
        <button onClick={() => dispatch("increment")}>+</button>
      </div>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Index;
