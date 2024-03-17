import Image from "next/image";

type Props = {
  id: string;
  avatar: string;
};

const Card: React.FC<Props> = ({ id, avatar }: Props) => {
  return (
    <div>
      <h1>{id}</h1>
      <Image src={avatar} alt={avatar} width={200} height={200} />
    </div>
  );
};
export default Card;
