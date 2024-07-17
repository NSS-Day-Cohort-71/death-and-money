import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthorizedRoute } from "./AuthorizedRoute.jsx"
import { Login } from "../views/Login.jsx"
import { Register } from '../views/Register.jsx'
import { Home } from '../views/Home.jsx'
import { NavbarView } from './NavbarView.jsx'
import { FAQ } from '../views/FAQ.jsx'


export const ViewRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<NavbarView />}>
                <Route path="/" element={ <Home /> } />
                <Route path="/faq" element={ <FAQ /> } />
            </Route>

            <Route element={<AuthorizedRoute />}>
                <Route path="/portal" element={ <h1>Your Activity and Assets</h1> } />
                <Route path="/appointments" element={ <h1>Appointment Calendar and Form</h1> } />
                <Route path="/testimonials" element={ <h1>Testimonials</h1> } />
            </Route>

        </Routes>
    </BrowserRouter>
}