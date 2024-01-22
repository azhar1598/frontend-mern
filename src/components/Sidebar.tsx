import React from 'react'
import { sidebarData } from '../data'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='w-[15%] h-screen bg-red-500'>
            <ul>
                {sidebarData.map(s =>
                    <li className='leading-10'>
                        <NavLink to={`${s.url}`} className={({ isActive }) =>
                            isActive ? "text-yellow" : "text-green"
                        }>{s.title}</NavLink>
                    </li>
                )}

            </ul>
        </div>
    )
}

export default Sidebar