'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { descriptions } from '@/app/data/descriptions'

export function Description() {
  const [currentDescription, setCurrentDescription] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDescription((prevDescription) => {
        if (currentDescription === descriptions.length - 1) return 0
        else return prevDescription + 1
      })
    }, 6000)

    return () => clearInterval(intervalId)
  }, [currentDescription])

  return (
    <div className="w-full min-h-[200px] max-sm:min-h-[500px] mt-6 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentDescription}
          className="text-6xl text-white text-center px-8 font-semibold w-full max-sm:text-left"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{ duration: 2 }}
        >
          {descriptions[currentDescription]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
