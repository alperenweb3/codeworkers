import { Arimo } from 'next/font/google'
import { Archivo } from 'next/font/google'
import '@/app/globals.css'

export const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  preload: true,
  display: 'swap',
  variable: '--font-arimo',
})
export const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
})