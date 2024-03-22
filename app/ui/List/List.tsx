"use client";
import Card from "../Card/Card";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import ListSkeleton from "../Skeletons/ListSkeleton";
import { fetchUsersList } from "../../api/actions";

export default function List() {
  const context = useContext(AppContext);
  const query = context?.search;
  const perPage = context?.perPage;

  const { data, isLoading } = useQuery({
    queryKey: ["users", query],
    queryFn: () => fetchUsersList(query, perPage),
    enabled: !!query,
  });
  if (isLoading) {
    return <ListSkeleton gridNum={perPage} />;
  }

  return (
    <div className="grid grid-cols-4 gap-10 mt-8 p-7 pl-12 pr-12 w-full items-center">
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
