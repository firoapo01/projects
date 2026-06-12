import { cn } from "@/lib/utils";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("min-h-screen pt-14 md:pt-16", className)}>
      {children}
    </main>
  );
}
