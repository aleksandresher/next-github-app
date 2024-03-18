export function FullCardSkeleton() {
  return (
    <div className="w-[700px] h-[500px] p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-gradient-to-tl from-slate-300 to-orange-600  rounded-[10px] grid grid-cols-3 grid-rows-2">
      <div className="flex items-center self-start "></div>

      <div className=""></div>

      <div className="flex  gap-4 justify-between">
        <div className="flex flex-col"></div>

        <div className="flex flex-col"></div>

        <div className="flex flex-col"></div>
      </div>

      <div className="flex items-center gap-2"></div>
    </div>
  );
}
