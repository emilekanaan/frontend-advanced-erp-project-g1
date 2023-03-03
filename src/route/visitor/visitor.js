import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar'
import "./visitor.css"

function Visitor() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    )
}

export default Visitor