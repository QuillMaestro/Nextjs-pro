import CrispChat from './components/Crips';
import './globals.css'
import { Mulish } from 'next/font/google';

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap'
})


export const metadata = {
  title: 'nextpro',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <CrispChat />
      <body>
      {children}
      </body>
    </html>
  )
}
