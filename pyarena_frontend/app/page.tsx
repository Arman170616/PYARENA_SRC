"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-6">Welcome to PyArena</h1>
        <p className="text-xl mb-8">Master Programming, Web Development, AI/ML, and DevOps</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Why Choose PyArena?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Expert-led courses</li>
            <li>Hands-on projects</li>
            <li>Flexible learning schedule</li>
            <li>Industry-recognized certifications</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Top Courses</h2>
          <ul className="space-y-2">
            <li>Python Programming</li>
            <li>Full-Stack Web Development</li>
            <li>Machine Learning Fundamentals</li>
            <li>DevOps Essentials</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <Button asChild size="lg">
          <Link href="/courses">Explore Courses</Link>
        </Button>
      </motion.div>
    </div>
  )
}

