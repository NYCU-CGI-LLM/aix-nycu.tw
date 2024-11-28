'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear", duration: 0.3 }}
    >
      {children}
    </motion.main>
  )
}