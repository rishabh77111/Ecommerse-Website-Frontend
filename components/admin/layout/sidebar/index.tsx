import React from 'react'
import SidebarLinks from './links'

const Sidebar = () => {
    return (
        <aside className='w-60 border-r border-gray-300'>
            {/* logo */}
            <div className='h-16'></div>
            {/* */}
            <SidebarLinks />
        </aside >
    )
}

export default Sidebar
