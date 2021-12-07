import { useContextSelector } from "use-context-selector";
import { CounterContext } from "../context/CounterContext";
import { useRenderCount } from "../hooks/useRenderCount";

export const ShowCount = () => {
  const renderCount = useRenderCount("ShowCounter");
  
  const counter = useContextSelector(CounterContext, ({ counter }) => counter);

  return (
    <>
      <h2>Counter: {counter}</h2>
      {renderCount}
    </>
  );
};
