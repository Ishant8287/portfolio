import { useEffect } from "react";

export default function useCursor() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const rng = document.getElementById("rng");
    if (!cur || !rng) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + "px";
      cur.style.top = my + "px";
    };

    document.addEventListener("mousemove", onMove);

    const interval = setInterval(() => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      rng.style.left = rx + "px";
      rng.style.top = ry + "px";
    }, 16);

    const expand = () => {
      cur.style.width = "18px";
      cur.style.height = "18px";
      rng.style.width = "50px";
      rng.style.height = "50px";
      rng.style.borderColor = "rgba(245,158,11,.75)";
    };
    const shrink = () => {
      cur.style.width = "10px";
      cur.style.height = "10px";
      rng.style.width = "34px";
      rng.style.height = "34px";
      rng.style.borderColor = "rgba(245,158,11,.38)";
    };

    const bindHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", expand);
        el.addEventListener("mouseleave", shrink);
      });
    };
    bindHover();

    return () => {
      document.removeEventListener("mousemove", onMove);
      clearInterval(interval);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);
}
