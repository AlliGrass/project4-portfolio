import { Switch } from "antd"
import { useEffect, useState } from "react"


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const currentTheme = localStorage.getItem('darkMode')
        return currentTheme ? JSON.parse(currentTheme) : false
    })

    const toggleTheme = (checked) => {
        document.documentElement.classList.toggle('pageTheme')
        setIsDarkMode(checked)
    }

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
        
        document.body.className = isDarkMode ? 'dark-mode' : 'light-mode'
    }, [isDarkMode])

    return (
        <div className="navbar-container-div">
            <nav className="navbar">
                <div>
                    {/* Name Logo */}
                    <img src="https://fakeimg.pl/50x50?text=PfP" alt="" />
                </div>
                <div className="toggle-theme-div">
                    <Switch checked={isDarkMode} onChange={toggleTheme}/>
                </div>
                <div className="">
                    {/* Navigation Links */}
                    <ul>
                        <a href="">nav</a>
                        <a href="">nav</a>
                        <a href="">nav</a>
                    </ul>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar