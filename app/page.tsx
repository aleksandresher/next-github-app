import Search from "./ui/Search";
import List from "./ui/List";
import PerPageSelect from "./ui/PerPageSelect";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex w-full items-center">
        <Search />
      </div>

      <List />
    </>
  );
}

