import Search from "./ui/Search/Search";
import List from "./ui/List/List";

export default async function Home() {
  return (
    <>
      <div className="flex w-full items-center">
        <Search />
      </div>
      <List />
    </>
  );
}

