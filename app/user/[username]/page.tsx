import FullCard from "@/app/ui/FullCard";
import { Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  return (
    <section className="flex justify-center h-screen bg-gradient-to-br from-slate-900 to-gray-900 pt-[120px]">
      <Suspense fallback={<Loading />}>
        <FullCard />
      </Suspense>
    </section>
  );
}
