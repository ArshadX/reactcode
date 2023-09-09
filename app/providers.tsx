"use client";

import { ThemeProvider } from "next-themes";
import ErrorPage from "./error/page";
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}

