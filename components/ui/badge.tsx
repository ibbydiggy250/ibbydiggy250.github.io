import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-md border border-zinc-700/80 bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        className,
      )}
      {...props}
    />
  );
}
