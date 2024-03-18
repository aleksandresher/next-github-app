import { Suspense } from "react";
import { FullCardSkeleton } from "../ui/FullCardSkeleton";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Suspense fallback={<FullCardSkeleton />}>{children}</Suspense>
    </section>
  );
}
