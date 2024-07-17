import { Link, NavLink, useNavigate } from "react-router-dom"
import { isAuthenticated } from "../utilities/auth.js"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link to={"/"}>💀 💰</Link>
            </li>
            <li className="navbar__item">
                <Link to={"/portal"}>Client Portal</Link>
            </li>
            <li className="navbar__item">
                <Link to={"/testimonials"}>Testimonials</Link>
            </li>
            <li className="navbar__item">
                <Link to={"/appointments"}>Appointments</Link>
            </li>
            <li className="navbar__item">
                <Link to={"/faq"}>FAQs</Link>
            </li>
            {
                isAuthenticated() ?
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