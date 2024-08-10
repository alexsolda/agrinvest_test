'use client'

import Spinner from '@/components/Spinner'
import { useTheme } from '@/context/ThemeContext'
import React, { ReactElement, useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggleButton = (): ReactElement => {
  const { theme, toggleTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) {
    return <Spinner />
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center bg-gray-300 dark:bg-neutral-800 rounded-full w-12 h-7 transition-colors duration-300 focus:outline-none"
    >
      <div
        className={`flex items-center justify-center w-6 h-6 bg-green rounded-full shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme !== 'dark' ? (
          <FaSun className="text-white" />
        ) : (
          <FaMoon className="text-gray-800 dark:text-gray-200" />
        )}
      </div>
    </button>
  )
}

export default ThemeToggleButton
