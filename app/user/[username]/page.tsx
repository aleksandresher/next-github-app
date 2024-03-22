import FullCard from "@/app/ui/SingleUser/FullCard";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex justify-center pt-[120px]">
      <Link href="/" className="absolute left-[100px] top-[20px]">
        <button className="bg-[#90e0ef] p-2 rounded-md">Home</button>
      </Link>
      <FullCard />
    </section>
  );
}
