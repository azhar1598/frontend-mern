import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

function Layout() {
    return (
        <div className='flex'>
            <Sidebar />
            <div>
                <Header />
                <Outlet />
                <Footer />
            </div>

        </div >
    )
}

export default Layout