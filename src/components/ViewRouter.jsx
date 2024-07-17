import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from '../views/Login.jsx'
import { Register } from '../views/Register.jsx'
import { FAQ } from '../views/FAQ.jsx'
import { NavBar } from './NavBar.jsx'
import { Home } from '../views/Home.jsx'
import { AuthorizedRoute } from './AuthorizedRoute.jsx'
import { NavbarView } from './NavbarView.jsx'

/*
    We need the following routes:
    - /login -> Render the Login component
    - /register -> Render the Register component
    - /portal -> Render a component that says "Your Activity and Assets"
    - /appointments -> Render a component that says "Appointment Calendar and Form"
    - /testimonials -> Render a component that says "Testimonials"
    - /faq -> Render the FAQ component
    - / -> Render the Home component
*/


export const ViewRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<AuthorizedRoute />}>
                <Route path="/appointments" element={<h1>Book an Appointment</h1>} />
                <Route path="/portal" element={<h1>Your Activity and Assets</h1>} />
                <Route path="/testimonials" element={<h1>Testimonials</h1>} />
            </Route>

            <Route path="/" element={<NavbarView />}>
                <Route index element={ <Home /> } />
                <Route path="/faq" element={ <FAQ /> } />
            </Route>
        </Routes>
    </BrowserRouter>
}