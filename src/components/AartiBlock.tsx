import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "fumadocs-ui/components/card";

interface AartiBlockProps {
  children: string;
  className?: string;
}

function AartiBlock({ children, className, ...props }: AartiBlockProps) {
  return (
    <Card
      title=""
      className={cn(
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
    </Card>
  );
}

export { AartiBlock };
