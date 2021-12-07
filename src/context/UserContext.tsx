import { useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import axios from "axios";

type UserContextType = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
};

interface IUserContext {
  user: UserContextType;
  loading: boolean;
  getUser: (username: string) => Promise<void>;
  reset: () => void;
}

const UserContext = createContext({} as IUserContext);

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserContextType>({} as UserContextType);
  const [loading, setLoading] = useState(false);

  const getUser = useCallback(async (username: string) => {
    setLoading(true);

    await axios
      .get(`https://api.github.com/users/${username}`)
      .then((resp) => {
        const { login, name, avatar_url, html_url } = resp.data;

        setUser({ login, name, avatar_url, html_url });

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setUser({} as UserContextType);
      });
  }, []);

  function reset() {
    setUser({} as UserContextType);
  }

  return (
    <UserContext.Provider value={{ user, loading, getUser, reset }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
