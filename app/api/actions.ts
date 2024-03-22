"use server";

export type UserType = {
  avatar_url: string;
  name: string;
  repos: number;
  followers: number;
  following: number;
  bio: string;
  public_repos: number;
  twitter_username: string;
  location: string | null | undefined;
  created_at: Date;
  repos_url: string;
  company: string | null | undefined;
  blog: string;
  id: string;
  login: string;
  html_url: string;
};

type UsersResponseType = {
  total_count: string;
  items: UserType[];
};

export const fetchUsersList = async (
  query: string | undefined,
  perPage: number | undefined
): Promise<UsersResponseType> => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}&per_page=${perPage}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

export const fetchUser = async (username: string | null): Promise<UserType> => {
  const response = await fetch(` https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
};
