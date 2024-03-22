import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  avatar: string;
  login: string;
};

const Card: React.FC<Props> = ({ id, avatar, login }: Props) => {
  return (
    <div className="flex flex-col  items-center gap-2 bg-[#fff] p-3  border-2 border-[#0a1014] rounded-[15px] shadow-[rgba(0,_0,_0,_0.2)_0px_40px_40px_-7px]">
      <Image
        src={avatar}
        alt={avatar}
        width={200}
        height={200}
        className="rounded-md"
      />
      <Link href={{ pathname: `/user/${login}`, query: { username: login } }}>
        <h1 className="text-[#0a1014]">ID: {id}</h1>
      </Link>
    </div>
  );
};
export default Card;
