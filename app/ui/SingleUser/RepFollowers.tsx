import { UserType } from "@/app/api/actions";

interface RepFollowersType {
  data: UserType | undefined;
}

export default function RepFollowers({ data }: RepFollowersType) {
  return (
    <div className="flex   gap-4  row-span-3 items-end pb-6">
      <div className="flex flex-col items-center">
        <p className="font-medium">Repos</p>
        <p>{data?.public_repos}</p>
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
