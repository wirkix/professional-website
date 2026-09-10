"use client";

import { useState } from "react";

/**
 * A row of tech-stack pills showing only the first `initialCount` by
 * default, with a "+N" pill that expands to reveal the rest (and
 * collapses back to "−" on click) -- same progressive-disclosure idea as
 * ExpandableText, so a project with a long real stack (Pulso de Ecobici
 * CDMX has 13 tags) doesn't blow out card height for every other project
 * in the grid, while the complete list stays one click away instead of
 * silently dropping past the 4th tag the way `technologies.slice(0, 4)`
 * used to.
 */
export default function TechTags({
  technologies,
  initialCount = 4,
  pillClassName = "px-2 py-0.5 bg-brand-100 text-brand-500 rounded text-xs",
  className = "flex flex-wrap gap-1",
}: {
  technologies: string[];
  initialCount?: number;
  pillClassName?: string;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = technologies.length - initialCount;
  const visible = expanded ? technologies : technologies.slice(0, initialCount);

  return (
    <div className={className}>
      {visible.map((tech, i) => (
        <span key={i} className={pillClassName}>
          {tech}
        </span>
      ))}
      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className={`${pillClassName} hover:bg-brand-200 transition cursor-pointer font-medium`}
          aria-label={expanded ? "Mostrar menos tecnologías" : `Mostrar ${hiddenCount} tecnologías más`}
        >
          {expanded ? "−" : `+${hiddenCount}`}
        </button>
      )}
    </div>
  );
}
