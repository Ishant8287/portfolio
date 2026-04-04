import { useEffect, useRef } from "react";

export default function SnakeGame({ onClose }) {
  const cvRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const SZ = 20,
      C = 20,
      R = 20;

    let sn = [{ x: 10, y: 10 }];
    let dir = { x: 1, y: 0 };
    let food = rf();
    let score = 0;
    let alive = true;

    function rf() {
      return {
        x: Math.floor(Math.random() * C),
        y: Math.floor(Math.random() * R),
      };
    }

    intervalRef.current = setInterval(() => {
      if (!alive) return;
      const h = { x: sn[0].x + dir.x, y: sn[0].y + dir.y };
      if (
        h.x < 0 ||
        h.x >= C ||
        h.y < 0 ||
        h.y >= R ||
        sn.some((s) => s.x === h.x && s.y === h.y)
      ) {
        alive = false;
        ctx.fillStyle = "rgba(245,158,11,.9)";
        ctx.font = "bold 20px Barlow,sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Game Over! Score: " + score, cv.width / 2, cv.height / 2);
        return;
      }
      sn.unshift(h);
      if (h.x === food.x && h.y === food.y) {
        score++;
        food = rf();
      } else sn.pop();

      ctx.fillStyle = "#0a0800";
      ctx.fillRect(0, 0, cv.width, cv.height);
      for (let i = 0; i < C; i++)
        for (let j = 0; j < R; j++) {
          ctx.strokeStyle = "rgba(245,158,11,.06)";
          ctx.strokeRect(i * SZ, j * SZ, SZ, SZ);
        }
      sn.forEach((s, i) => {
        ctx.fillStyle = i === 0 ? "#f59e0b" : "#fb923c";
        ctx.beginPath();
        ctx.roundRect(s.x * SZ + 1, s.y * SZ + 1, SZ - 2, SZ - 2, 3);
        ctx.fill();
      });
      ctx.fillStyle = "#4ade80";
      ctx.beginPath();
      ctx.arc(food.x * SZ + SZ / 2, food.y * SZ + SZ / 2, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(245,158,11,.55)";
      ctx.font = "10px IBM Plex Mono,monospace";
      ctx.textAlign = "left";
      ctx.fillText("score: " + score, 5, 12);
    }, 130);

    const onKey = (e) => {
      e.preventDefault();
      if (e.key === "ArrowUp" && dir.y !== 1) dir = { x: 0, y: -1 };
      else if (e.key === "ArrowDown" && dir.y !== -1) dir = { x: 0, y: 1 };
      else if (e.key === "ArrowLeft" && dir.x !== 1) dir = { x: -1, y: 0 };
      else if (e.key === "ArrowRight" && dir.x !== -1) dir = { x: 1, y: 0 };
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <canvas
      ref={cvRef}
      id="sc"
      width={400}
      height={400}
      style={{ border: "1px solid var(--border2)", borderRadius: "8px" }}
    />
  );
}
