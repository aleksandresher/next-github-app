"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  avatar: string;
  login: string;
};

const Card: React.FC<Props> = ({ id, avatar, login }: Props) => {
  return (
    <div className="flex flex-col  items-center gap-2 bg-[#252323] p-3 rounded-sm">
      <Image
        src={avatar}
        alt={avatar}
        width={200}
        height={200}
        className="rounded-md"
      />
      <Link href={{ pathname: `/user/${login}`, query: { username: login } }}>
        <h1 className="text-white">ID: {id}</h1>
      </Link>
    </div>
  );
};
export default Card;
