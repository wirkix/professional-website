"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A paragraph clamped to 2 lines that reveals a "Mostrar más / Mostrar
 * menos" toggle — but only when the text actually overflows the clamp.
 * Descriptions short enough to already fit in 2 lines render with no
 * button at all, so the toggle never appears as dead UI.
 */
export default function ExpandableText({
  text,
  className = "",
  showMoreLabel = "Mostrar más",
  showLessLabel = "Mostrar menos",
}: {
  text: string;
  className?: string;
  showMoreLabel?: string;
  showLessLabel?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || expanded) return; // clamp is off while expanded — nothing to measure

    const checkOverflow = () => setOverflows(el.scrollHeight > el.clientHeight + 1);
    checkOverflow();

    const observer = new ResizeObserver(checkOverflow);
    observer.observe(el);
    return () => observer.disconnect();
  }, [expanded]);

  return (
    <div>
      <p ref={ref} className={`${className} ${expanded ? "" : "line-clamp-2"}`}>
        {text}
      </p>
      {(overflows || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-xs text-brand-500 hover:text-brand-700 font-medium mt-1"
        >
          {expanded ? showLessLabel : showMoreLabel}
        </button>
      )}
    </div>
  );
}
