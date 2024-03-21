"use client";

import { createContext, useState, Dispatch, SetStateAction } from "react";

type AppContextType = {
  perPage: number;
  search: string;
  updatePerPage: (perPage: number) => void;
  updateSearch: (search: string) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export default function ContextProvider({ children }: ContextProviderProps) {
  const [context, setContext]: any = useState<AppContextType>({
    perPage: 5,
    search: "",
    updatePerPage: (perPage: number) =>
      setContext((prev: AppContextType) => ({ ...prev, perPage })),
    updateSearch: (search: string) =>
      setContext((prev: AppContextType) => ({ ...prev, search })),
  });
  console.log(context);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
