import { useRef } from "react";

export const useRenderCount = (componentName: string) => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  return (
    <>
      <h3>{`${componentName} have: ${renderCount.current} renderes`}</h3>
      <hr />
    </>
  );
};
