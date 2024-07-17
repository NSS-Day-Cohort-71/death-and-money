import React, { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

export const Login = () => {
    const [email, setEmail] = useState("steve@stevebrownlee.com")
    const [password, setPassword] = useState("Admin8*")
    const existDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        const response = await fetch(`http://localhost:8000/users?email=${email}&password=${password}`)
        const matchedUser = await response.json()

        // No account was found, so display a dialog that tells the user
        if (matchedUser.length === 0) {
            existDialog.current.showModal()
            return
        }
        // Account was found, so save the user object to local storage and redirect
        else {
            const user = matchedUser[0]
            localStorage.setItem("death_token", JSON.stringify(user))
            navigate("/")
        }
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="text-4xl mt-7 mb-3">Death &amp; Money Estate Planning</h1>
                    <h2 className="text-xl mb-10">Please sign in</h2>
                    <fieldset className="mb-4">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email" id="inputEmail"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password" id="inputPassword"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                        />
                    </fieldset>
                    <fieldset>
                        <button type="submit" className="button p-3 rounded-md bg-blue-800 text-blue-100">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <div className="loginLinks">
                <section className="link--register">
                    <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" to="/register">Not a member yet?</Link>
                </section>
            </div>
        </main>
    )
}
