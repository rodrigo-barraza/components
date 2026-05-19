"use client";

import { useRef, useEffect } from "react";
import styles from "./SparklineComponent.module.css";

/**
 * SparklineComponent — GPU-composited Canvas sparkline area chart.
 *
 * Renders a smooth, filled line chart suitable for inline metrics
 * (CPU %, memory usage, etc.). Uses monotone cubic interpolation for
 * visually-pleasant curves, a gradient fill under the line, a glow
 * effect on the stroke, and a trailing "current value" dot.
 *
 * @param {number[]} data — Array of numeric samples (newest last)
 * @param {string} [color="#10b981"] — Line/fill color (hex or CSS var())
 * @param {number} [maxValue=100] — Y-axis ceiling (data is clamped to this)
 * @param {number} [height=48] — Canvas CSS height in px
 * @param {number} [historyMax=60] — Total slots in the X axis (controls density)
 * @param {boolean} [showGrid=false] — Show faint grid lines behind the sparkline
 * @param {string} [className] — Extra class for the wrapper div
 */
export default function SparklineComponent({
  data,
  color = "#10b981",
  maxValue = 100,
  height = 48,
  historyMax = 60,
  showGrid = false,
  className,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    // ── Optional grid background ──
    if (showGrid) {
      ctx.save();
      ctx.strokeStyle = "rgba(128, 128, 128, 0.15)";
      ctx.lineWidth = 0.5;

      // Horizontal grid lines (3 evenly spaced)
      const hLines = 3;
      for (let i = 1; i <= hLines; i++) {
        const y = (h / (hLines + 1)) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Vertical grid lines — every ~15 sample slots
      const vStep = Math.max(15, Math.round(historyMax / 5));
      for (let i = vStep; i < historyMax; i += vStep) {
        const x = (i / (historyMax - 1)) * w;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      ctx.restore();
    }

    if (data.length < 2) return;

    // Resolve CSS variable to actual color value
    const resolvedColor = color.startsWith("var(")
      ? getComputedStyle(document.documentElement)
          .getPropertyValue(color.slice(4, -1))
          .trim() || "#10b981"
      : color;

    // Parse hex/rgb to extract RGB components for alpha variations
    const parseColor = (c) => {
      if (c.startsWith("#")) {
        const hex = c.slice(1);
        return [
          parseInt(hex.slice(0, 2), 16),
          parseInt(hex.slice(2, 4), 16),
          parseInt(hex.slice(4, 6), 16),
        ];
      }
      const match = c.match(/(\d+)/);
      return match ? [+match[1], +match[1], +match[1]] : [16, 185, 129];
    };
    const [r, g, b] = parseColor(resolvedColor);

    const padding = { top: 2, bottom: 2, left: 0, right: 0 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const clampedMax = Math.max(maxValue, 1);

    // Map data points to coordinates — always draw across full width
    const points = data.map((val, i) => ({
      x: padding.left + (i / (historyMax - 1)) * chartW,
      y:
        padding.top +
        chartH -
        (Math.min(val, clampedMax) / clampedMax) * chartH,
    }));

    // Build smooth path using monotone cubic interpolation (Catmull-Rom)
    const buildPath = () => {
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[Math.max(0, i - 1)];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[Math.min(points.length - 1, i + 2)];
        const tension = 0.3;
        const cp1x = p1.x + (p2.x - p0.x) * tension;
        const cp1y = p1.y + (p2.y - p0.y) * tension;
        const cp2x = p2.x - (p3.x - p1.x) * tension;
        const cp2y = p2.y - (p3.y - p1.y) * tension;
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
      }
    };

    // ── Gradient fill ──
    ctx.beginPath();
    buildPath();
    ctx.lineTo(points[points.length - 1].x, h);
    ctx.lineTo(points[0].x, h);
    ctx.closePath();

    const gradient = ctx.createLinearGradient(0, padding.top, 0, h);
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.25)`);
    gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, 0.08)`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0.01)`);
    ctx.fillStyle = gradient;
    ctx.fill();

    // ── Line stroke with glow ──
    ctx.beginPath();
    buildPath();
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, 0.9)`;
    ctx.lineWidth = 1.5;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
    ctx.shadowBlur = 4;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // ── Current value dot ──
    if (points.length > 0) {
      const last = points[points.length - 1];
      ctx.beginPath();
      ctx.arc(last.x, last.y, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 1)`;
      ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`;
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }, [data, color, maxValue, height, historyMax, showGrid]);

  return (
    <div
      ref={containerRef}
      className={`${styles.sparklineContainer} ${className || ""}`}
    >
      <canvas ref={canvasRef} className={styles.sparklineCanvas} />
    </div>
  );
}
