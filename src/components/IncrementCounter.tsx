import { useContextSelector } from "use-context-selector";
import { CounterContext } from "../context/CounterContext";
import { useRenderCount } from "../hooks/useRenderCount";

export const IncrementCounter = () => {
  const renderCount = useRenderCount("IncrementCounter");

  const increment = useContextSelector(
    CounterContext,
    ({ increment }) => increment
  );

  return (
    <>
      <button type="button" onClick={increment}>
        Increment
      </button>
      {renderCount}
    </>
  );
};
