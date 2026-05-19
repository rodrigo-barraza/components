"use client";

import styles from "./ToolCardComponent.module.css";

/**
 * ToolCardComponent — Reusable card for displaying a tool schema.
 *
 * Renders an emoji + tool name header, domain badge, truncated description,
 * and an optional footer slot for badges (agents, labels, param counts).
 *
 * @param {string}            name        — Machine-readable tool name (e.g. "get_weather")
 * @param {string}            description — Human-readable description
 * @param {string}            [emoji]     — Emoji character displayed left of the name
 * @param {string}            [domain]    — Domain category badge (e.g. "Weather & Environment")
 * @param {() => void}        [onClick]   — Card click handler
 * @param {React.ReactNode}   [children]  — Footer slot for badges, meta, etc.
 * @param {string}            [className] — Additional class names
 */

export interface ToolCardComponentProps {
  name: string;
  description: string;
  emoji?: string | null;
  domain?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export default function ToolCardComponent({
  name,
  description,
  emoji,
  domain,
  onClick,
  children,
  className,
}: ToolCardComponentProps) {
  const classes = [styles.toolCard, className].filter(Boolean).join(" ");

  return (
    <div className={classes} onClick={onClick}>
      <div className={styles.header}>
        {emoji && <span className={styles.emoji}>{emoji}</span>}
        <div className={styles.titleBlock}>
          <span className={styles.name}>{name}</span>
          {domain && <span className={styles.domain}>{domain}</span>}
        </div>
      </div>
      <div className={styles.description}>{description}</div>
      {children && <div className={styles.footer}>{children}</div>}
    </div>
  );
}
