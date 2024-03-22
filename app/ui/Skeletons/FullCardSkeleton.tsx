export function FullCardSkeleton() {
  return (
    <div className="w-[700px] h-[500px] bg-white-400 p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  animate-pulse   rounded-[10px] grid grid-cols-2 grid-rows-2 gap-4">
      <div className="flex items-center self-start animate-pulse w-[200px] h-[200px]  ">
        <svg
          className="w-full h-full text-gray-200 dark:text-gray-600 rounded-[30%]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center animate-pulse rounded-sm">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      </div>
      <div className="w-full pt-8 gap-2 flex flex-col">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      </div>

      <div className="flex mt-6 gap-4  row-span-4 items-end pb-6 animate-pulse bg-gray-200 h-[100px] rounded-sm">
        <div className="flex flex-col items-center bg-white animate-pulse">
          <p className="font-medium"></p>
          <p></p>
        </div>

        <div className="flex flex-col items-center animate-pulse bg-white ">
          <p className="font-medium"></p>
          <p></p>
        </div>

        <div className="flex flex-col items-center animate-pulse bg-white ">
          <p className="font-medium"></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
