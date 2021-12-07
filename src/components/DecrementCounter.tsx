import { useContextSelector } from "use-context-selector";
import { CounterContext } from "../context/CounterContext";
import { useRenderCount } from "../hooks/useRenderCount";

export const DecrementCounter = () => {
  const renderCount = useRenderCount("DecrementCounter");

  const decrement = useContextSelector(
    CounterContext,
    ({ decrement }) => decrement
  );

  return (
    <>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      {renderCount}
    </>
  );
};
