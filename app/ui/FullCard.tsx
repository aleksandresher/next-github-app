import { useState } from "react";
import Image from "next/image";

type UserType = {
  image: string;
  name: string;
  repos: number;
  followers: number;
  following: number;
  bio: string;
};

const FullCard: React.FC = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const fetchUsers = async (): Promise<UserType> => {
    const response = await fetch(` https://api.github.com/users/USERNAME`);
    if (!response.ok) {
      throw new Error("Failed to getch users");
    }
    return response.json();
  };

  return (
    <div>
      {user && <Image src={user?.image} width={200} height={200} alt="" />}
      <div>
        <p>Repos</p>
        <p>30</p>
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
