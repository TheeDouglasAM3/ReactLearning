import React, { useContext } from "react";
import { ThemeContext } from "./providers/ThemeProvider";
import ExampleDisplay from './components/ExampleDisplay'
const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <div>Hi friend!</div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "dark" : "light"} mode
      </button>
      <ExampleDisplay />
    </div>
  );
};

export default App;