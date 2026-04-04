import { useState, useCallback } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(true);

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.setAttribute("data-theme", next ? "" : "light");
      return next;
    });
  }, []);

  return { dark, toggle };
}
