import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastContainer theme="colored" position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
