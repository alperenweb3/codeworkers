import { Roboto } from 'next/font/google'
import { Archivo } from 'next/font/google'
import '@/app/globals.css'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  preload: true,
  display: 'swap',
  variable: '--font-roboto',
})
export const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})