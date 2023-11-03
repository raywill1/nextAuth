
import { AuthProvider } from './Providers'
import Nav from './components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Auth',
  description: 'A Next Authentification app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
            <Nav />
        </AuthProvider>
      
          {children}
         
          </body>
    </html>
  )
}
