import { cn } from "@/lib/utils";

export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 font-body text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-eyebrow)]",
        className
      )}
    >
      {children}
    </p>
  );
}
