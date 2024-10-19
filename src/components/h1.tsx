"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h1
      initial={{ y: -10 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={cn("text-lg font-bold", className)}
    >
      {children}
    </motion.h1>
  );
}
