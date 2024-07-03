import { createContext, useState, ReactNode, useEffect } from "react";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  hashed_password: string;
}

interface AppContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const cachedUser = localStorage.getItem("user");
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
      setLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{ loading, setLoading, user, setUser, isEditing, setIsEditing }}
    >
      {children}
    </AppContext.Provider>
  );
};
