"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Framer() {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      className="mx-auto my-auto"
    >
      <Link href="/" className="text-lg font-medium">
        Home
      </Link>
    </motion.div>
  );
}
