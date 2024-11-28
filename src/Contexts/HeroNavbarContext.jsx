import { createContext, useState } from "react";

export const HeroNavbarContext = createContext ({})

const HeroNavbarProvider = ({ children }) => {
    const [navbar, setNavbar] = useState("navbar")

    const toggleNavbar = () => {
        setNavbar(navbar === "navbar" ? "hero-navbar" : "navbar");
    };

    const value = {
        navbar,
        toggleNavbar
    }

    return (
        <HeroNavbarContext.Provider value={value}>
            {children}
        </HeroNavbarContext.Provider>
    )
}

export default HeroNavbarProvider