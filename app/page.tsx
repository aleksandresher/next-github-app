import Search from "./ui/Search";
import List from "./ui/List";
import { Suspense } from "react";
import ListSkeleton from "./ui/Skeletons/ListSkeleton";
import Loading from "./loading";

export default async function Home() {
  return (
    <>
      <div className="flex w-full items-center">
        <Search />
      </div>
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    </>
  );
}

