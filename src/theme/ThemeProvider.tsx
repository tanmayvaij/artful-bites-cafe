import { createContext, useContext, useState, ReactNode, FC } from "react";

type theme = "light" | "dark";

interface ContextProps {
  theme: theme;
  toggleTheme: () => void;
}

const Context = createContext<ContextProps | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<theme>("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(Context);

  if (!context)
    throw new Error("useTheme must be wrapped within a ThemeProvider");

  return context;
};
