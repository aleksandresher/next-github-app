"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type UserType = {
  avatar_url: string;
  name: string;
  repos: number;
  followers: number;
  following: number;
  bio: string;
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
    <div>
      {user && <Image src={user?.avatar_url} width={200} height={200} alt="" />}
      <div>
        <p>Repos</p>
        <p>{user?.name}</p>
      </div>
      <div>
        <p>Followers</p>
        <p>30</p>
      </div>
      <div>
        <p>Following</p>
        <p>30</p>
      </div>
    </div>
  );
};
export default FullCard;
