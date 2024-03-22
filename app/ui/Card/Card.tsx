import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  avatar: string;
  login: string;
};

const Card: React.FC<Props> = ({ id, avatar, login }: Props) => {
  return (
    <div className="flex flex-col  items-center gap-2 bg-[#b5e48c] p-3 rounded-sm border-4 border-[#ffd500]">
      <Image
        src={avatar}
        alt={avatar}
        width={200}
        height={200}
        className="rounded-md"
      />
      <Link href={{ pathname: `/user/${login}`, query: { username: login } }}>
        <h1 className="text-[#023047]">ID: {id}</h1>
      </Link>
    </div>
  );
};
export default Card;
