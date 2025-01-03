import Banner from "@/components/banner"
import { Header } from "@/components/header"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Banner />
      <Header />
      {children}
    </>
  )
}
export default Layout
