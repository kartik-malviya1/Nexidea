import { Header } from "@/components/header"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect("/")

  return (
    <>
      <Header />
      {children}
    </>
  )
}
export default Layout
