"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroClient({ Badge, Button }) {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
      {/* background blobs etc... keep your same markup */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-24 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Badge className="mb-3">Vision shapes the next leap.</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Learning that <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">builds engineers</span>
          </h1>
          {/* ...rest of your left column content... */}
        </motion.div>

        {/* right column (your Quick facts card etc.) can stay here unchanged */}
      </div>
    </section>
  );
}
