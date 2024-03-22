"use client";
import PerPageSelect from "../Select/PerPageSelect";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/ContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import useDebounce from "@/utils/useDebounce";
import SearchIcon from "../../../public/search.png";
import Image from "next/image";

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
      <form className="flex w-1/2 justify-center items-center gap-5  p-6  pt-5 rounded-[10px]">
        <label htmlFor="search"></label>
        <div className="flex gap-3  w-1/2 p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#f7f1f1] placeholder-gray-700  ">
          <Image src={SearchIcon} width={24} height={24} alt="search icon" />
          <input
            className="bg-inherit text-lg focus:border-green-600 outline-none"
            placeholder="Search for users"
            value={search?.search}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <PerPageSelect />
      </form>
    </section>
  );
}
