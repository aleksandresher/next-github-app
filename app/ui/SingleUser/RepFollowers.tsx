import { UserType } from "@/app/api/actions";
import Link from "next/link";

interface RepFollowersType {
  data: UserType | undefined;
}

export default function RepFollowers({ data }: RepFollowersType) {
  return (
    <div className="flex   gap-4  row-span-3 items-start pb-6 justify-center mt-5">
      <div className="flex flex-col items-center">
        <p className="font-medium">Repos</p>
        {data && (
          <Link href={data.html_url}>
            {" "}
            <p>{data?.public_repos}</p>
          </Link>
        )}
      </div>

      <div className="flex flex-col items-center">
        <p className="font-medium">Followers</p>
        <p>{data?.followers}</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="font-medium">Following</p>
        <p>{data?.following}</p>
      </div>
    </div>
  );
}
