import { Navigate } from "react-router-dom"
import { NavbarView } from "./NavbarView.jsx"

export const AuthorizedRoute = () => {
  if (localStorage.getItem("death_token")) {
    return <NavbarView />
  }
  return <Navigate to='/login' replace />
}
