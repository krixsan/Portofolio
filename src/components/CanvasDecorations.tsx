import { type ReactNode } from "react";
import { motion } from "motion/react";

/**
 * 1. Collaborator Cursor + Colored Label Pill (Signature Onlines / Figma element)
 */
export function CollaboratorCursor({
  label,
  color,
  className = "",
  delay = 0,
  direction = "right"
}: {
  label: string;
  color: string;
  className?: string;
  delay?: number;
  direction?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ y: [0, -5, 0] }}
      transition={{
        opacity: { duration: 0.45, delay },
        scale: { duration: 0.45, delay },
        y: { duration: 3.6 + (delay % 1.5), repeat: Infinity, ease: "easeInOut" }
      }}
      className={`pointer-events-none select-none z-20 flex flex-col ${
        direction === "left" ? "items-end" : "items-start"
      } ${className}`}
    >
      <svg
        width="15"
        height="17"
        viewBox="0 0 22 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`drop-shadow-xs ${direction === "left" ? "scale-x-[-1] -mr-1" : "-ml-1"}`}
      >
        <path
          d="M6.47 17.12L4.01 2.59C3.94 2.18 4.38 1.87 4.74 2.07L17.52 9.06C17.94 9.29 17.83 9.92 17.35 9.99L11.01 10.91C10.85 10.94 10.72 11.03 10.64 11.18L7.41 17.27C7.19 17.69 6.55 17.59 6.47 17.12Z"
          fill={color}
          stroke="white"
          strokeWidth="1.75"
        />
      </svg>
      <span
        className={`${
          direction === "left" ? "mr-2.5" : "ml-2.5"
        } -mt-1 px-2.5 py-0.5 rounded-md text-[10px] font-sans font-bold text-white shadow-sm whitespace-nowrap tracking-tight`}
        style={{ backgroundColor: color }}
      >
        {label}
      </span>
    </motion.div>
  );
}

/**
 * 2. Onlines Floating Comment Bubble (Avatar "•_" + Author + Timestamp + Note)
 */
export function CanvasCommentBubble({
  author,
  time,
  text,
  className = "",
  delay = 0.15
}: {
  author: string;
  time: string;
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`pointer-events-none select-none onlines-floating-card rounded-2xl px-3.5 py-2.5 flex items-start gap-2.5 max-w-[265px] z-10 ${className}`}
    >
      <div className="w-6 h-6 rounded-full bg-ink text-paper flex items-center justify-center font-mono text-[9px] font-bold shrink-0 mt-0.5">
        •_
      </div>
      <div className="text-left">
        <p className="text-[10px] text-ink leading-none">
          <strong className="font-bold">{author}</strong>{" "}
          <span className="text-ink-soft font-normal">{time}</span>
        </p>
        <p className="text-[11px] text-ink font-medium mt-1 leading-snug">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/**
 * 3. Floating Squircle Tool / Formula Badge (like VSCode/Figma/Notion squircles on Onlines)
 */
export function FloatingSquircleBadge({
  children,
  className = "",
  rotate = 0,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        opacity: { duration: 0.4, delay },
        y: { duration: 4.2 + (delay % 1.5), repeat: Infinity, ease: "easeInOut" }
      }}
      className={`pointer-events-none select-none w-11 h-11 rounded-2xl onlines-floating-card flex items-center justify-center font-mono text-[10px] font-extrabold text-ink z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * 4. Figma Selection Box Wrapper for Section Titles (Dashed frame + 4/6 corner handles)
 */
export function FigmaSelectionTitle({
  children,
  badge,
  className = ""
}: {
  children: ReactNode;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block px-4 py-2.5 figma-selection-box ${className}`}>
      <span className="figma-handle figma-handle--tl" />
      <span className="figma-handle figma-handle--tc" />
      <span className="figma-handle figma-handle--tr" />
      <span className="figma-handle figma-handle--bl" />
      <span className="figma-handle figma-handle--bc" />
      <span className="figma-handle figma-handle--br" />
      {children}
      {badge && (
        <span className="absolute -bottom-5 right-0 bg-[#007AFF] text-white font-mono text-[8px] font-bold px-1.5 py-0.5 rounded-xs tracking-wider uppercase pointer-events-none">
          {badge}
        </span>
      )}
    </div>
  );
}

/**
 * 5. Decorative Illuminated Grid Cells ("Kotak-kotak menyala" pada background grilla Onlines)
 */
export function GridLitSquares({
  cells
}: {
  cells: { top?: string; bottom?: string; left?: string; right?: string; count?: "single" | "l-shape" | "pair" }[];
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0" aria-hidden="true">
      {cells.map((cell, idx) => (
        <div
          key={idx}
          style={{
            top: cell.top,
            bottom: cell.bottom,
            left: cell.left,
            right: cell.right
          }}
          className="absolute"
        >
          <div className="w-[60px] h-[60px] bg-ink/[0.025] dark:bg-white/[0.03] border border-dashed border-ink/10 dark:border-white/10" />
          {cell.count === "pair" && (
            <div className="w-[60px] h-[60px] ml-[60px] bg-ink/[0.02] dark:bg-white/[0.025] border border-dashed border-ink/10 dark:border-white/10" />
          )}
          {cell.count === "l-shape" && (
            <div className="flex">
              <div className="w-[60px] h-[60px] bg-ink/[0.018] dark:bg-white/[0.02] border border-dashed border-ink/10 dark:border-white/10" />
              <div className="w-[60px] h-[60px] bg-ink/[0.03] dark:bg-white/[0.035] border border-dashed border-ink/10 dark:border-white/10" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * 6. Mini Tilted Wireframe / Spec Card for Section Margins
 */
export function MiniWireframeCard({
  title,
  lines,
  className = "",
  rotate = -4
}: {
  title: string;
  lines: { label: string; value: string; accent?: string }[];
  className?: string;
  rotate?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className={`pointer-events-none select-none w-48 onlines-floating-card rounded-xl p-2.5 z-10 ${className}`}
    >
      <div className="flex items-center gap-1 pb-1.5 mb-1.5 border-b border-line">
        <span className="w-1.5 h-1.5 rounded-full bg-line-hover" />
        <span className="w-1.5 h-1.5 rounded-full bg-line-hover" />
        <span className="w-1.5 h-1.5 rounded-full bg-line-hover" />
        <span className="ml-auto font-mono text-[7px] text-ink-soft truncate max-w-[100px]">
          {title}
        </span>
      </div>
      <div className="space-y-1 font-mono text-[9px]">
        {lines.map((l, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-paper-soft/90 px-2 py-0.5 rounded"
          >
            <span className="text-ink-soft">{l.label}</span>
            <span className="font-bold" style={{ color: l.accent || "var(--ink)" }}>
              {l.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

