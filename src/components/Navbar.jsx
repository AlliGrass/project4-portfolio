import { Switch } from "antd"
import useThemes from "../hooks/useThemes"
import ThemeContext from "../Contexts/ThemeContext";
import { useContext } from "react";


const Navbar = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);


    return (
        <div className="navbar-container-div">
            <nav className="navbar">
                <div className="toggle-theme-div">
                    <Switch checked={isDarkMode} onChange={toggleTheme}
                    style={{ backgroundColor: isDarkMode ? '#f0f0ff' : '#1a1a1d'}}/>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar