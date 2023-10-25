import type { Metadata } from 'next'
import './globals.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

export const metadata: Metadata = {
  title: 'Online Courses',
  description: 'A online courses marketplace',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
