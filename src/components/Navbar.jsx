import { Switch } from "antd"
import useThemes from "../hooks/useThemes"


const Navbar = () => {
    const { checkDarkMode, toggleTheme } = useThemes();
    return (
        <div className="navbar-container-div">
            <nav className="navbar">
                <div className="toggle-theme-div">
                    <Switch checked={checkDarkMode} onChange={toggleTheme}
                    checkedChildren="Dark" unCheckedChildren="Light"
                    style={{
                        color: checkDarkMode ? '#1a1a1d' : '#f0f0ff',  // Change background color based on state
                        // borderColor: isDarkMode ? '#f0f0ff' : '#1a1a1d'
                        }}/>
                </div>
            </nav>
        </div>
        
    )
}

export default Navbar