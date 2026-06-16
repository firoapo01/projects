import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  as?: "section" | "aside" | "div";
}

export default function Section({
  children,
  className,
  innerClassName,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag className={cn("px-5 py-16 md:px-8 md:py-24 lg:py-32", className)}>
      <div className={cn("mx-auto max-w-xl", innerClassName)}>{children}</div>
    </Tag>
  );
}
