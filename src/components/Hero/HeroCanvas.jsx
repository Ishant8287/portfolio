import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const cvRef = useRef(null);

  useEffect(() => {
    const cv = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const mob = window.innerWidth < 900;
    let W,
      H,
      mox = 0,
      moy = 0,
      t = 0;
    let animId;

    function resize() {
      W = cv.width = cv.offsetWidth;
      H = cv.height = cv.offsetHeight;
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(cv);

    const onMouseMove = (e) => {
      const r = cv.getBoundingClientRect();
      mox = (e.clientX - r.left) / W - 0.5;
      moy = (e.clientY - r.top) / H - 0.5;
    };
    cv.addEventListener("mousemove", onMouseMove);

    function proj(x, y, z, rx, ry) {
      const cx = Math.cos(rx),
        sx = Math.sin(rx),
        cy = Math.cos(ry),
        sy = Math.sin(ry);
      let nx = x * cy - z * sy,
        nz = x * sy + z * cy,
        ny = y * cx - nz * sx;
      nz = y * sx + nz * cx;
      const s = 390 / (nz + 720);
      return { x: nx * s + W / 2, y: ny * s + H / 2, z: nz };
    }

    function faceF(ps, r, g, b, br, a) {
      ctx.beginPath();
      ctx.moveTo(ps[0].x, ps[0].y);
      ps.slice(1).forEach((p) => ctx.lineTo(p.x, p.y));
      ctx.closePath();
      const f = 0.28 + br * 0.62;
      ctx.fillStyle = `rgba(${Math.round(r * f)},${Math.round(g * f)},${Math.round(b * f)},${a})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(245,158,11,${a * 0.2})`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    }

    function cube(ox, oy, oz, sz, rx, ry, col, a) {
      const V = [
        [-1, -1, -1],
        [1, -1, -1],
        [1, 1, -1],
        [-1, 1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        [1, 1, 1],
        [-1, 1, 1],
      ].map((v) =>
        proj(ox + v[0] * sz, oy + v[1] * sz, oz + v[2] * sz, rx, ry),
      );
      const F = [
        { f: [0, 1, 2, 3], n: [0, 0, -1] },
        { f: [4, 5, 6, 7], n: [0, 0, 1] },
        { f: [0, 1, 5, 4], n: [0, -1, 0] },
        { f: [2, 3, 7, 6], n: [0, 1, 0] },
        { f: [0, 3, 7, 4], n: [-1, 0, 0] },
        { f: [1, 2, 6, 5], n: [1, 0, 0] },
      ];
      const L = [0.55, 0.72, 0.52];
      F.sort((a2, b2) => {
        const ca = a2.f.reduce((s, i) => s + V[i].z, 0) / 4;
        const cb = b2.f.reduce((s, i) => s + V[i].z, 0) / 4;
        return cb - ca;
      }).forEach(({ f: fi, n }) => {
        const d = Math.max(0, n[0] * L[0] + n[1] * L[1] + n[2] * L[2]);
        faceF(
          fi.map((i) => V[i]),
          ...col,
          d,
          a,
        );
      });
    }

    function orbiter(r, spd, tilt, ph, rx, ry, col, gs) {
      const a = t * spd + ph;
      const x = Math.cos(a) * r,
        y = Math.sin(a) * r * Math.cos(tilt),
        z = Math.sin(a) * r * Math.sin(tilt);
      const p = proj(x, y, z, rx, ry);
      const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, gs * 2.2);
      grd.addColorStop(0, `rgba(${col[0]},${col[1]},${col[2]},.38)`);
      grd.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(p.x, p.y, gs * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(p.x, p.y, gs * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},.95)`;
      ctx.fill();
      ctx.beginPath();
      for (let k = 0; k < 55; k++) {
        const ta = a - k * 0.07;
        const tx = Math.cos(ta) * r,
          ty = Math.sin(ta) * r * Math.cos(tilt),
          tz = Math.sin(ta) * r * Math.sin(tilt);
        const tp = proj(tx, ty, tz, rx, ry);
        k === 0 ? ctx.moveTo(tp.x, tp.y) : ctx.lineTo(tp.x, tp.y);
      }
      ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},.1)`;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }

    function orbitRing(r, tilt, rx, ry) {
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2; a += 0.055) {
        const x = Math.cos(a) * r,
          y = Math.sin(a) * r * Math.cos(tilt),
          z = Math.sin(a) * r * Math.sin(tilt);
        const p = proj(x, y, z, rx, ry);
        a === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
      }
      ctx.closePath();
      ctx.strokeStyle = "rgba(245,158,11,.07)";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    function hexPlate(rx, ry, bob, R, alpha, phase) {
      const sides = 6;
      for (let i = 0; i < sides; i++) {
        const a1 = (i / sides) * Math.PI * 2 + t * 0.4 + phase;
        const a2 = ((i + 1) / sides) * Math.PI * 2 + t * 0.4 + phase;
        const p0 = proj(0, bob, 0, rx, ry);
        const p1 = proj(
          Math.cos(a1) * R,
          Math.sin(a1) * R * 0.35 + bob,
          0,
          rx,
          ry,
        );
        const p2 = proj(
          Math.cos(a2) * R,
          Math.sin(a2) * R * 0.35 + bob,
          0,
          rx,
          ry,
        );
        const bright = 0.5 + 0.4 * Math.sin(t * 1.2 + i);
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();
        ctx.fillStyle = `rgba(245,${Math.round(140 + 60 * bright)},20,${alpha * 0.45})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(245,158,11,${alpha * 0.5})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }

    function frame() {
      ctx.clearRect(0, 0, W, H);
      t += mob ? 0.005 : 0.0085;
      const rx = -0.26 + moy * 0.16,
        ry = t * 0.14 + mox * 0.22,
        bob = Math.sin(t * 1.25) * 7;
      for (let gx = -5; gx <= 5; gx++)
        for (let gy = -5; gy <= 5; gy++) {
          const p = proj(gx * 36, gy * 36, 0, rx, ry);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,158,11,${0.03 + 0.025 * Math.sin(t + gx + gy)})`;
          ctx.fill();
        }
      orbitRing(108, 0.2, rx, ry);
      orbitRing(82, 0.42, rx, ry);
      orbitRing(138, 0.62, rx, ry);
      hexPlate(rx, ry, bob, 78, 0.55, 0);
      cube(0, bob, 0, 55, rx, ry, [200, 100, 18], 0.95);
      cube(0, bob, 0, 27, rx, ry, [253, 200, 50], 0.9);
      orbiter(108, 0.42, 0.2, 0, rx, ry, [245, 158, 11], 7);
      orbiter(82, 0.36, 0.42, Math.PI * 0.72, rx, ry, [251, 146, 60], 5.5);
      orbiter(138, 0.28, 0.62, Math.PI * 1.38, rx, ry, [253, 211, 77], 6);
      const cp = proj(0, bob, 0, rx, ry);
      const cg = ctx.createRadialGradient(cp.x, cp.y, 0, cp.x, cp.y, 58);
      cg.addColorStop(0, "rgba(245,158,11,.15)");
      cg.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, 58, 0, Math.PI * 2);
      ctx.fillStyle = cg;
      ctx.fill();
      animId = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(animId);
      cv.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="hr2">
      <canvas
        ref={cvRef}
        id="hc"
        style={{ width: "100%", height: "100%", cursor: "none" }}
      />
    </div>
  );
}
