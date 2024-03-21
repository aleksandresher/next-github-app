import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

export default function PerPageSelect() {
  const perPage = useContext(AppContext);

  return (
    <Select onValueChange={(value) => perPage?.updatePerPage(Number(value))}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder="Users to display"
          defaultValue={perPage?.perPage}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="10">10</SelectItem>
        <SelectItem value="20">20</SelectItem>
        <SelectItem value="30">30</SelectItem>
      </SelectContent>
    </Select>
  );
}
