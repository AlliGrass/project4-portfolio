import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import NavButtons from "./components/NavButtons"

const Layout = () => {
    return (
        <>
            <Navbar />
            <NavButtons />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout