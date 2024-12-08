"use client";

import Foter from "@/components/static/Foter";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation"; // Import to get current pathname
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { initIntercom, shutdownIntercom } from "../utils/intercom"; // Adjust the path based on your utils location
import * as amplitude from "@amplitude/analytics-node";

/*
export const metadata = {
  title: "TieBreaker",
  description: "Generated by Next.js",
};
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Hook to get current pathname

  useEffect(() => {
    // Conditionally initialize Intercom on the landing page and Home page
    if (pathname === "/" || pathname === "/app/(main)/Home") {
      initIntercom();
    }

    // Cleanup Intercom on unmount or when navigating away
    return () => {
      shutdownIntercom();
    };
  }, [pathname]); // Re-run effect when the pathname changes

  amplitude.init("b770130e4c71a5a4fa0667e2dd19e316", {
    serverZone: amplitude.Types.ServerZone.EU,
  });

  return (
    <html lang="en">
      <body>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Foter />
      </body>
    </html>
  );
}
