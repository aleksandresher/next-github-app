"use client";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../context/ContextProvider";

export type UsersType = {
  id: string;
  login: string;
  avatar_url: string;
};

type UsersResponseType = {
  total_count: string;
  items: UsersType[];
};

export default function List() {
  const context = useContext(AppContext);
  const query = context?.search;
  const perPage = context?.perPage;
  const fetchUsers = async (): Promise<UsersResponseType> => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error("Failed to getch users");
    }
    return response.json();
  };

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    enabled: !!query,
  });

  return (
    <div className="grid grid-cols-5 gap-5 mt-8 p-7">
      {data?.items?.map((item) => {
        return (
          <div key={item.id}>
            <Card login={item.login} avatar={item.avatar_url} id={item.id} />
          </div>
        );
      })}
    </div>
  );
}
