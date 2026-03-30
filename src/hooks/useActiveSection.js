import { useState, useEffect } from "react";

function useActiveSection() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const els = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return active;
}

export default useActiveSection;
