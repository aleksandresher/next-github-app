"use client";
import { useEffect, useState } from "react";
import Card from "./Card";

export type UsersType = {
  total_count: string;
  items: [
    {
      id: string;
      avatar_url: string;
    }
  ];
};
export default function List() {
  const [users, setUsers] = useState<UsersType>({
    total_count: "",
    items: [{ id: "", avatar_url: "" }],
  });
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.github.com/search/users?q=a");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      {users?.items?.map((item) => {
        return (
          <div key={item.id}>
            <Card id={item.id} avatar={item.avatar_url} />
          </div>
        );
      })}
    </div>
  );
}
