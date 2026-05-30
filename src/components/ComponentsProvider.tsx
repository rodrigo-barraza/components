"use client";

import { createContext, useContext, type ReactNode } from "react";

/**
 * ComponentsContext — Global configuration for @rodrigo-barraza/components-library.
 *
 * Wrap your app with <ComponentsProvider> to enable features like
 * spatial audio feedback on interactive components.
 *
 * @example
 *   import { ComponentsProvider } from "@rodrigo-barraza/components-library";
 *
 *   <ComponentsProvider sound>
 *     <App />
 *   </ComponentsProvider>
 */

export interface ComponentsContextValue {
  sound: boolean;
  userMenu?: ReactNode;
}

const ComponentsContext = createContext<ComponentsContextValue>({
  sound: false,
});

interface ComponentsProviderProps {
  /** Enable procedural audio feedback */
  sound?: boolean;
  /** Global user avatar menu/dropdown widget to display in header sections */
  userMenu?: ReactNode;
  children: ReactNode;
}

export function ComponentsProvider({ sound = false, userMenu, children }: ComponentsProviderProps) {
  return (
    <ComponentsContext.Provider value={{ sound, userMenu }}>
      {children}
    </ComponentsContext.Provider>
  );
}

/**
 * Hook to access library-wide configuration.
 */
export function useComponents(): ComponentsContextValue {
  return useContext(ComponentsContext);
}
