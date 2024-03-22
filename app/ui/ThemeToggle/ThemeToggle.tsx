// "use client";
// import { useContext } from "react";
// import { AppContext } from "@/app/context/ContextProvider";
// import Sleep from "../../../public/sleep-mode.png";
// import Sun from "../../../public/sun.png";
// import Image from "next/image";

// export default function ThemeToggle() {
//   const context = useContext(AppContext);
//   const theme = context?.theme;
//   console.log(theme);
//   const changeTheme = context!?.changeTheme;
//   return (
//     <div className="absolute right-[300px] top-[30px]">
//       {theme === "light" ? (
//         <Image
//           width={24}
//           height={24}
//           src={Sun}
//           alt="sun"
//           onClick={() => changeTheme("dark")}
//         />
//       ) : (
//         <Image
//           width={24}
//           height={24}
//           src={Sleep}
//           alt="moon"
//           onClick={() => changeTheme("light")}
//         />
//       )}
//     </div>
//   );
// }
