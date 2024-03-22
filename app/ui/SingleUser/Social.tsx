import Image from "next/image";
import Twitter from "../../../public/twitter.svg";
import Location from "../../../public/location.svg";
import Company from "../../../public/company.svg";
import Blog from "../../../public/blog.svg";
import Link from "next/link";
import { UserType } from "@/app/api/actions";

interface SocialProps {
  data: UserType | undefined;
}

export default function Social({ data }: SocialProps) {
  return (
    <div className="flex flex-col gap-4 justify-center row-span-4">
      <div className="flex items-center gap-3">
        <Image src={Twitter} alt="twitter-logo" width={24} height={24} />
        {data?.twitter_username ? (
          <Link
            href={encodeURI(`https://twitter.com/${data.twitter_username}`)}
          >
            {data?.twitter_username}
          </Link>
        ) : (
          <p>Not available</p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <Image src={Location} alt="twitter-logo" width={24} height={24} />
        {data?.location || <p>Not Available</p>}
      </div>
      <div className="flex items-center gap-3">
        <Image src={Company} alt="twitter-logo" width={24} height={24} />
        {data?.company || <p>Not Available</p>}
      </div>
      <div className="flex items-center gap-3">
        <Image src={Blog} alt="twitter-logo" width={24} height={24} />
        {data?.blog ? (
          <Link href={encodeURI(data.blog)}>{data?.blog}</Link>
        ) : (
          <p>Not Available</p>
        )}
      </div>
    </div>
  );
}
