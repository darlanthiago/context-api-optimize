import { DecrementCounter } from "./components/DecrementCounter";
import { IncrementCounter } from "./components/IncrementCounter";
import { ShowCount } from "./components/ShowCounter";
import { UserInput } from "./components/UserInput";
import UserShow from "./components/UserShow";
import { CounterProvider } from "./context/CounterContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <CounterProvider>
        <h1>Default Context</h1>
        <ShowCount />
        <IncrementCounter />
        <DecrementCounter />
      </CounterProvider>
      <UserProvider>
        <UserInput />
        <UserShow />
      </UserProvider>
    </>
  );
}

export default App;
