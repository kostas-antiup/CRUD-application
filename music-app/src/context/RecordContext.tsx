"use client";

import "reflect-metadata";
import { createContext, useContext } from "react";
import { RecordModel } from "@/model/RecordModel";
import { container } from "tsyringe";

interface DIProviderProps {
  children: React.ReactNode;
}

const DIContext = createContext<{ container: typeof container } | null>(null);

export const DIProvider: React.FC<DIProviderProps> = ({ children}) => {
  container.registerInstance(RecordModel, new RecordModel(process.env.NEXT_PUBLIC_BACKEND_URL));

  return (
    <DIContext.Provider value={{ container }}>
      {children}
    </DIContext.Provider>
  );
};

export const useRecordModel = () => {
  const context = useContext(DIContext);

  if (!context) {
    throw new Error("useRecordModel must be used within a DIProvider");
  }

  return context.container.resolve(RecordModel);
};