import Search from "./ui/Search";
import List from "./ui/List";

export default function Home() {
  return (
    <>
      <div className="flex w-full items-center">
        <Search />
      </div>

      <List />
    </>
  );
}

