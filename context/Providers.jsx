"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";

export default function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) { // 👈 Prevents rendering until client mounts
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}
