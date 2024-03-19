import React from "react";

type Props = {
  gridNum: number | undefined;
};

const ListSkeleton = ({ gridNum }: Props) => {
  return (
    <div className="grid grid-cols-5 gap-5 mt-8 p-7">
      {[...Array(gridNum)].map((_, index) => (
        <div key={index} className="border rounded-md p-4">
          <div className="animate-pulse h-32 bg-gray-200 mb-4"></div>
          <div className="flex justify-between items-center">
            <div className="h-8 w-full bg-gray-200 rounded-sm"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListSkeleton;
