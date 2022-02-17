import NetlifyIdentityWidget from "netlify-identity-widget";
import * as React from "react";

interface AuthContextInterface {
  user: null;
  authReady: boolean;
  login: (tabName?: "signup" | "login") => void;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = React.createContext<AuthContextInterface | null>(
  null
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  //Initialize the objects in the context
  const [user, setUser] = React.useState(null);
  const [authReady, setAuthReady] = React.useState(false);
  const login: AuthContextInterface["login"] = (tabName?) => {
    NetlifyIdentityWidget.open(tabName);
  };
  const logout = () => {
    NetlifyIdentityWidget.logout();
  };

  // Initialize the object
  React.useEffect(() => {
    NetlifyIdentityWidget.init({
      APIUrl: "https://productivitia.netlify.app/.netlify/identity",
    });
    setAuthReady(true);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, authReady }}>
      {children}
    </AuthContext.Provider>
  );
}
