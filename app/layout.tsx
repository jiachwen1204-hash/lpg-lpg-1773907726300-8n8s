import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ["400","700","800"],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  weight: ["300","400"],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: "WEQ",
  description: "We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driv",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"Organization","name":"WEQ","description":"We are an innovative AI Technology Platform company that empowers businesses to transform the way they operate through intelligent automation and data-driven solutions. Our platform integrates advanced artificial intelligence, scalable cloud infrastructure, and seamless system integration to help organizations build smarter applications, optimize workflows, and unlock new growth opportunities.\r\n\r\nFrom predictive analytics to intelligent agents, we make AI accessible, practical, and powerful — enabling companies to move faster, reduce costs, and stay ahead in a rapidly evolving digital world.","email":"jiachwen99@gmail.com","address":"854 TAMPINES STREET 82\r\n12-227"}` }} />
      {children}</body>
    </html>
  )
}
