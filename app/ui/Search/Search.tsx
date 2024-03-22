"use client";
import PerPageSelect from "../Select/PerPageSelect";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/ContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import useDebounce from "@/utils/useDebounce";

export default function Search() {
  const queryClient = useQueryClient();
  const search = useContext(AppContext);

  const debouncedSearch = useDebounce(search?.search, 300);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search?.updateSearch(e.target.value);
  };

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["users"] });
  }, [debouncedSearch]);

  return (
    <section className="w-full flex justify-center p-2 ">
      <form className="flex w-1/2 justify-center items-center gap-5  p-6  bg-[#b4ebca] pt-5 rounded-[10px]">
        <label htmlFor="search"></label>
        <input
          className="block w-1/3 p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-700 focus:border-green-600 outline-none"
          placeholder="Search for users"
          value={search?.search}
          onChange={(e) => handleChange(e)}
        />
        <PerPageSelect />
      </form>
    </section>
  );
}
