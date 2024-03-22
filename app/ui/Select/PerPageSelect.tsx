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
        <SelectItem value="4">4</SelectItem>
        <SelectItem value="8">8</SelectItem>
        <SelectItem value="16">16</SelectItem>
        <SelectItem value="28">28</SelectItem>
      </SelectContent>
    </Select>
  );
}
