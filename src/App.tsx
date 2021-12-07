import { DecrementCounter } from "./components/DecrementCounter";
import { IncrementCounter } from "./components/IncrementCounter";
import { ShowCount } from "./components/ShowCounter";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <h1>Default Context</h1>
      <ShowCount />
      <IncrementCounter />
      <DecrementCounter />
    </CounterProvider>
  );
}

export default App;
