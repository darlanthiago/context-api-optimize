import React, { useState } from "react";
import { useContextSelector } from "use-context-selector";
import { UserContext } from "../context/UserContext";
import { useRenderCount } from "../hooks/useRenderCount";

// import { Container } from './styles';

export const UserInput: React.FC = () => {
  const [user, setUser] = useState("");
  const { getUser, reset } = useContextSelector(
    UserContext,
    ({ getUser, reset }) => ({
      getUser,
      reset,
    })
  );
  const renderCount = useRenderCount("UserInput");

  function handleSearchUser() {
    getUser(user);
  }

  function handleReset() {
    reset();
    setUser("");
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <button type="button" onClick={handleSearchUser}>
        Buscar
      </button>
      <button type="button" onClick={handleReset}>
        Limpar
      </button>

      {renderCount}
    </>
  );
};
