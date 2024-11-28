import { Switch } from "antd"
import ThemeContext from "../Contexts/ThemeContext";
import { useContext } from "react";

import data from "../data/data.json"


const HeroNavbar = () => {
    const pages = data.pagePaths
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);



    return (
        <div className="hero-navbar-container-div">
            <nav className="hero-navbar">
                <div className="logo-div">
                    <img className="logo-img" src={isDarkMode ? "/assets/initialLogoDark.png": "/assets/initialLogoLight.png" }  alt="" />
                </div>
                <div className="navbar-rightside-div">
                    <div className="navbar-navigation-div">
                        <ul className="navbar-navigation-ul">
                            {Object.entries(pages).map(([pageLink, pageDetails]) => {
                                return(
                                    <li>
                                        <a href={pageLink} >{pageDetails.pageName}</a>  
                                    </li> 
                                )
                            })}
                        </ul>
                    </div>
                    <div className="toggle-theme-div">
                        <Switch checked={isDarkMode} onChange={toggleTheme}
                        style={{ backgroundColor: isDarkMode ? '#f0f0ff' : '#1a1a1d'}}/>
                    </div>
                </div>
                
            </nav>
        </div>
        
    )
}

export default HeroNavbar