import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import NavButtons from "./components/NavButtons"
import useCurrentPage from "./hooks/useCurrentPage"

const Layout = () => {
    const currentPage = useCurrentPage()


    return (
        <>
            {currentPage !== '/main' && <Navbar /> }
            <NavButtons />
            
            
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout