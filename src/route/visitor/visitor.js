import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/sidebar'
import "./visitor.css"
// import ToggleColorMode from '../../components/dark'

function Visitor() {
    return (
        <div className='visitor'>
         
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Visitor