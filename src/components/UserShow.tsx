import React from "react";
import { render } from "react-dom";
import { useContextSelector } from "use-context-selector";
import { UserContext } from "../context/UserContext";
import { useRenderCount } from "../hooks/useRenderCount";
import isEmptyObj from "../utils/emptyObj";

// import { Container } from './styles';

const UserShow: React.FC = () => {
  const { user, loading } = useContextSelector(
    UserContext,
    ({ user, loading }) => ({ user, loading })
  );

  const renderCount = useRenderCount("UserShow");

  if (loading) {
    <h1>Loading...</h1>;
  }

  return (
    <>
      {!isEmptyObj(user) && (
        <div
          style={{
            border: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "200px",
            marginTop: "30px",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h3>{user.name}</h3>
          <a href={user.html_url}>{user.login}</a>
          <img src={user.avatar_url} alt={user.name} />
        </div>
      )}
      {renderCount}
    </>
  );
};

export default UserShow;
