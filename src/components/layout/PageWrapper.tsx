import { cn } from "@/lib/utils";
import PageTransition from "./PageTransition";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <PageTransition>
      <main className={cn("min-h-screen pt-14 md:pt-16", className)}>
        {children}
      </main>
    </PageTransition>
  );
}
