"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className=" w-full h-full flex flex-col gap-5 justify-center absolute top-0 items-center">
      <h2 className="font-bold">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="bg-green-400 p-3 w-[120px] rounded-sm"
      >
        Try again
      </button>
    </div>
  );
}
