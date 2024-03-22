"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import { FullCardSkeleton } from "../Skeletons/FullCardSkeleton";
import { fetchUser } from "../../api/actions";
import Social from "./Social";
import RepFollowers from "./RepFollowers";
import Error from "@/app/user/[username]/error";

const FullCard: React.FC = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(username),
    retry: 2,
  });

  if (isLoading) return <FullCardSkeleton />;
  if (isError) return <Error error={error} reset={refetch} />;

  return (
    <div className="w-[700px] h-[500px] bg-white-400 p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]    rounded-[10px] grid grid-cols-2 grid-rows-2">
      <div className="flex items-center self-start ">
        {data && (
          <Image
            src={data?.avatar_url}
            width={200}
            height={200}
            alt={data.name}
            className="rounded-[50%]"
          />
        )}
      </div>
      <div className="flex flex-col gap-5 items-center justify-center mb-3">
        <h1 className="text-lg font-bold">{data?.name}</h1>
        <p className="font-medium">{data?.bio}</p>
      </div>
      <Social data={data} />
      <RepFollowers data={data} />
    </div>
  );
};
export default FullCard;
