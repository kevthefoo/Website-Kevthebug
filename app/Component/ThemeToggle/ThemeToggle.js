"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";

import './themetoggle.css'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    // <button
    //   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    //   className=""
    // >
    //   {theme === 'dark' ? <FaRegSun /> : <FaMoon />}
    // </button>
    <>
      <input type="checkbox" id="darkmode-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
      <label for="darkmode-toggle"></label>
    </>


  )
}