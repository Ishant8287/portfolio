import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-1 border rounded"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
