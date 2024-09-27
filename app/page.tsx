"use client";

import Confetti from "@/components/Confetti";
import PinkiePromise from "@/components/PinkiePromise";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  GiBowTieRibbon,
  GiCupcake,
  GiFlamingo,
  GiHeartKey,
  GiLipstick,
  GiTeapot,
} from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import { PiHighHeelFill } from "react-icons/pi";

// icon background
const icons = [
  GiBowTieRibbon,
  GiFlamingo,
  GiCupcake,
  GiLipstick,
  GiTeapot,
  PiHighHeelFill,
  GiHeartKey,
  IoSunny,
];
const numberOfIcons = 120;
const spacing = 23;

// generate positions in a grid-like pattern
const generateIconPositions = () => {
  return Array.from({ length: numberOfIcons }, (_, i) => ({
    // adjust denominator for more or fewer icons per row
    top: `${Math.floor(i / 10) * spacing}%`,
    left: `${(i % 10) * spacing}%`,
  }));
};

export default function Home() {
  // track whether to fire confetti
  const [fireConfetti, setFireConfetti] = useState(false);
  // track icon positions
  const [iconPositions] = useState(generateIconPositions());

  return (
    <div className="min-h-screen capture font-mickey bg-pink-50 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="z-0">
        {/* animated icons */}
        {iconPositions.map((position, i) => {
          // select icon based on index
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={i}
              className="absolute text-pink-300"
              style={{
                top: position.top,
                left: position.left,
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Icon size={32} />
            </motion.div>
          );
        })}
      </div>

      {/* confetti component to cover the entire page */}
      <Confetti fireConfetti={fireConfetti} />

      {/* centred rounded block */}
      <div className="max-w-md w-full bg-pink-100 rounded-3xl shadow-lg p-8 relative text-gray-500">
        <PinkiePromise setFireConfetti={setFireConfetti} />
      </div>
    </div>
  );
}
