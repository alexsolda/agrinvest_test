'use client'

import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from '@/context/ThemeContext'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NextUIProvider>
  )
}
