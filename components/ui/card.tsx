import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <article
      className={cn(
        "rounded-lg border border-zinc-800/80 bg-zinc-950/72 shadow-[0_16px_50px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-[1.025] hover:border-sky-300/45 hover:bg-zinc-950/90 hover:shadow-[0_28px_90px_rgba(0,0,0,0.34),0_0_40px_rgba(125,211,252,0.08)]",
        className,
      )}
      {...props}
    />
  );
}
