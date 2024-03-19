"use client";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Twitter from "../../public/twitter.svg";
import Location from "../../public/location.svg";
import Company from "../../public/company.svg";
import Blog from "../../public/blog.svg";
import Link from "next/link";
import { FullCardSkeleton } from "./Skeletons/FullCardSkeleton";
import Loading from "../user/[username]/loading";

type UserType = {
  avatar_url: string;
  name: string;
  repos: number;
  followers: number;
  following: number;
  bio: string;
  public_repos: number;
  twitter_username: string;
  location: string;
  created_at: Date;
  repos_url: string;
  company: string;
  blog: string;
};

const FullCard: React.FC = () => {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  const [user, setUser] = useState<UserType | null>(null);
  const fetchUsers = async (): Promise<UserType> => {
    try {
      const response = await fetch(` https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("Failed to getch users");
      }
      const userData = await response.json();
      setUser(userData);
      return userData;
    } catch (error) {
      console.log("Error fetching users:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-[700px] h-[500px] bg-black p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]    rounded-[10px] grid grid-cols-2 grid-rows-2">
        <div className="flex items-center self-start ">
          {user && (
            <Image
              src={user?.avatar_url}
              width={200}
              height={200}
              alt={user.name}
              className="rounded-[50%]"
            />
          )}
        </div>

        <div className="flex flex-col gap-5 items-center justify-center">
          <Suspense fallback={<FullCardSkeleton />}>
            <h1 className="text-lg font-bold">{user?.name}</h1>
            <p className="font-medium">{user?.bio}</p>
          </Suspense>
        </div>

        <div className="flex   gap-4  row-span-3 items-end pb-6">
          <div className="flex flex-col items-center">
            <p className="font-medium">Repos</p>
            <p>{user?.public_repos}</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-medium">Followers</p>
            <p>{user?.followers}</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-medium">Following</p>
            <p>{user?.following}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center row-span-4">
          <div className="flex items-center gap-3">
            <Image src={Twitter} alt="twitter-logo" width={24} height={24} />
            {user?.twitter_username ? (
              <Link
                href={encodeURI(`https://twitter.com/${user.twitter_username}`)}
              >
                {user?.twitter_username}
              </Link>
            ) : (
              <p>Not available</p>
            )}
          </div>
          <div className="flex items-center gap-3">
            <Image src={Location} alt="twitter-logo" width={24} height={24} />
            {user?.location && <p>Not Available</p>}
          </div>
          <div className="flex items-center gap-3">
            <Image src={Company} alt="twitter-logo" width={24} height={24} />
            {user?.company && <p>Not Available</p>}
          </div>
          <div className="flex items-center gap-3">
            <Image src={Blog} alt="twitter-logo" width={24} height={24} />
            {user?.blog ? (
              <Link href={encodeURI(user.blog)}>{user?.blog}</Link>
            ) : (
              <p>Not Available</p>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default FullCard;
