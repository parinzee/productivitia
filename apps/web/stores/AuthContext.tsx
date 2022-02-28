import NetlifyIdentityWidget from "netlify-identity-widget";
import * as React from "react";

interface AuthContextInterface {
  user: NetlifyIdentityWidget.User | null;
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
  const [user, setUser] = React.useState<AuthContextInterface["user"]>(null);
  const [authReady, setAuthReady] = React.useState(false);

  const login: AuthContextInterface["login"] = (tabName?) => {
    NetlifyIdentityWidget.open(tabName);
    NetlifyIdentityWidget.on("login", (user) => {
      setUser(user);
      // Redirect to our page for installing extension.
      window.location.href = "https://productivitia.netlify.app/app/onboarding";
    });
  };

  const logout = () => {
    NetlifyIdentityWidget.logout();
    setUser(null);
    NetlifyIdentityWidget.close();
  };

  // Initialize
  React.useEffect(() => {
    NetlifyIdentityWidget.init({
      APIUrl: "https://productivitia.netlify.app/.netlify/identity",
    });
    setAuthReady(true);
    setUser(NetlifyIdentityWidget.currentUser());
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, authReady }}>
      {children}
    </AuthContext.Provider>
  );
}
