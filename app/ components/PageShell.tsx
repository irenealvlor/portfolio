// app/components/PageShell.tsx
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <div
        className="
          w-full max-w-[1440px]
          px-[var(--space-page-x)]
          pt-[var(--space-page-y)] pb-[var(--space-page-y)]
        "
      >
        {children}
      </div>
    </div>
  );
}