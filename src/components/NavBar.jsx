import { NavLink, useNavigate } from "react-router-dom"
import { isAuthenticated } from "../utilities/auth.js"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item navbar__item--home">
                <NavLink to={"/"}>💀 💰</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to={"/portal"}>Client Portal</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to={"/appointments"}>Appointments</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to={"/testimonials"}>Testimonials</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink to={"/faq"}>FAQ</NavLink>
            </li>
            {
                isAuthenticated ?
                    <li className="navbar__item lastitem">
                        <button className="underline text-blue-600 hover:text-purple-700"
                            onClick={() => {
                                localStorage.removeItem("death_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> : ""
            }
        </ul>
    )
}