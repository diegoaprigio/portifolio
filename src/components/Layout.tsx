import type { ReactNode } from 'react'
import { Constellation } from './Constellation'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Constellation />
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </>
  )
}
