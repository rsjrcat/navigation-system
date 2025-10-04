import React, { useRef, useEffect } from "react";

const GRID_COLS = 300;
const GRID_ROWS = 200;
const CELL_SIZE = 20;
const COLORS = [
  "#f97316", "#facc15", "#22d3ee", "#a78bfa", "#f472b6",
  "#34d399", "#60a5fa", "#f87171", "#fbbf24",
];
const INITIAL_COLORS = ["#1a1a1a", "#2a2a2a", "#3a3a3a", "#4a4a4a"];

export default function BackgroundBoxes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    // Generate initial cell positions with grey/black colors
    const cells = Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => {
      const x = (i % GRID_COLS) * CELL_SIZE;
      const y = Math.floor(i / GRID_COLS) * CELL_SIZE;
      return { 
        x, 
        y, 
        color: INITIAL_COLORS[Math.floor(Math.random() * INITIAL_COLORS.length)],
        initialColor: INITIAL_COLORS[Math.floor(Math.random() * INITIAL_COLORS.length)],
        scale: 1,
        hovered: false
      };
    });

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();

      // Apply isometric transform
      ctx.translate(width / 2, height / 4);
      ctx.transform(1, 0, -0.5, 1, 0, 0);
      ctx.scale(0.675, 0.675);

      cells.forEach(cell => {
        ctx.fillStyle = cell.color;
        ctx.fillRect(cell.x, cell.y, CELL_SIZE * cell.scale, CELL_SIZE * cell.scale);
      });

      ctx.restore();
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 4;

      cells.forEach(cell => {
        const cx = cell.x - 0.5 * cell.y;
        const cy = cell.y;
        const dist = Math.hypot(cx - mouseX, cy - mouseY);

        if (dist < 40) {
          cell.scale = 1.5;
          if (!cell.hovered) {
            cell.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            cell.hovered = true;
          }
        } else {
          cell.scale = 1;
          if (cell.hovered) {
            cell.color = cell.initialColor;
            cell.hovered = false;
          }
        }
      });

      draw();
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      draw();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}