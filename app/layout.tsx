import Navbar from 'app/(shared)/Navbar'
import Footer from 'app/(shared)/Footer'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const OpenSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Osiris',
  description: 'Discover the divine realm of knowledge and wisdom with Osiris, the ancient Egyptian god of the afterlife. Dive into a captivating blog experience that transcends time, where the power of the written word reigns supreme. Explore thought-provoking articles, insightful musings, and engaging discussions that illuminate the path to enlightenment. Unleash your inner scribe and join the Osiris community, where we honor the art of writing and embrace the eternal pursuit of knowledge. Unveil the secrets of the ancient gods and embark on a transformative journey through the realms of Osiris, where every word has the power to shape destinies and unlock hidden truths. Are you ready to delve into the sacred scrolls of wisdom and unravel the mysteries of the divine?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={OpenSans.className} lang="en">

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
