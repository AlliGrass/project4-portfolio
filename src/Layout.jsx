import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import NavButtons from "./components/NavButtons"
import useCurrentPage from "./hooks/useCurrentPage"
import Footer from './components/Footer'

const Layout = () => {
    const currentPage = useCurrentPage()


    return (
        <>
            {currentPage !== '/' && <Navbar /> } 
            
            <NavButtons />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout