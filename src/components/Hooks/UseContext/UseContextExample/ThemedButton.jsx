import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px 20px",
        border: "1px solid",
        marginTop: "10px",
      }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
};

export default ThemedButton;
