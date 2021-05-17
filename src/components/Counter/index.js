import { useContext } from "react";
import styled from "styled-components";

import CounterStore from "../../contexts/CounterStore";

const Index = () => {
  const { counterState, dispatch } = useContext(CounterStore);
  return (
    <Counter>
      <h2>Counter</h2>
      <div className="flex">
        <button onClick={() => dispatch("decrement")}>-</button>
        <span>{counterState.counterValue}</span>
        <button onClick={() => dispatch("increment")}>+</button>
      </div>
      <button onClick={() => dispatch("reset")}>reset</button>
    </Counter>
  );
};

const Counter = styled.div`
  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
  }
  span {
    font-size: 2rem;
  }

  .flex {
    align-items: center;
  }
`;

export default Index;
