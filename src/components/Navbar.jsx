import { Switch } from "antd"
import useThemes from "../hooks/useThemes"


const Navbar = () => {
    const { checkDarkMode, toggleTheme, theme } = useThemes();


    return (
        <div className="navbar-container-div">
            <nav className="navbar">
                <div className="toggle-theme-div">
                    <Switch checked={checkDarkMode} onChange={toggleTheme}
                    style={{ backgroundColor: theme === 'dark-theme' ? '#f0f0ff' : '#1a1a1d'}}/>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar