'use client'

import React, { useState, useEffect, ReactElement } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const BtToggleTheme = (): ReactElement => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center bg-gray-300 dark:bg-slate-900 rounded-full w-12 h-7 transition-colors duration-300 focus:outline-none"
    >
      <div
        className={`flex items-center justify-center w-6 h-6 bg-yellow-500 dark:bg-slate-500 rounded-full shadow-md transform transition-transform duration-300 ${
          darkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {!darkMode ? (
          <FaSun className="text-white" />
        ) : (
          <FaMoon className="text-gray-800 dark:text-gray-200" />
        )}
      </div>
    </button>
  )
}

export default BtToggleTheme
