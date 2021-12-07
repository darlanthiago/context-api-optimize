import { ReactNode, useCallback, useState } from "react";
import { createContext } from "use-context-selector";
interface CounterContextType {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextType>(
  {} as CounterContextType
);

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterProvider, CounterContext };
