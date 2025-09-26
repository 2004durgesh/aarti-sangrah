import * as React from "react";
import { cn } from "@/lib/utils";

interface AartiBlockProps {
  children: string;
  className?: string;
}

function AartiBlock({ children, className, ...props }: AartiBlockProps) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col",
        "bg-card text-card-foreground",
        "border border-border rounded-md p-4",
        "shadow-sm",
        className
      )}
      {...props}
    >
      <div className="prose prose-sm max-w-none">
        <p className="text-foreground leading-relaxed whitespace-pre-line">
          {children}
        </p>
      </div>
    </div>
  );
}

export { AartiBlock };
