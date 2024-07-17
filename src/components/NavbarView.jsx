import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar.jsx"

export const NavbarView = () => {
  return <>
    <NavBar />
    <main>
      <Outlet />
    </main>
  </>
}
