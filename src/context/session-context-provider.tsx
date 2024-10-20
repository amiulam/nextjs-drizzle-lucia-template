"use client";

import { createContext, useContext } from "react";
import { SessionValidationResult } from "@/lib/auth/session";

type SessionProviderProps = SessionValidationResult & {};

const SessionContext = createContext<SessionProviderProps>(
  {} as SessionProviderProps,
);

export const SessionContextProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: SessionProviderProps;
}) => {
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const sessionContext = useContext(SessionContext);

  if (!sessionContext) {
    throw new Error("useSession must be used within a SessionContextProvider");
  }

  return sessionContext;
};
