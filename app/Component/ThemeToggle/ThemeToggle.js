"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 text-black rounded border-8 border-red-700"
    >
      {theme === 'dark' ? <FaRegSun /> : <FaMoon />}
    </button>
  )
}