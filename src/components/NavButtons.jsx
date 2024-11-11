import { useState, useEffect } from "react"
import { useLocation, Link } from 'react-router-dom';
import pagePaths from "../assets/pagePaths";

const NavButtons = () => {
    const urlPath = useLocation()
    const [leftNavButton, setLeftNavButton] = useState()
    const [rightNavButton, setRightNavButton] = useState()

    useEffect(() => {
        const currentPage = urlPath.pathname

        if (pagePaths[currentPage]) {
            setLeftNavButton(pagePaths[currentPage].leftNavPath)
            setRightNavButton(pagePaths[currentPage].rightNavPath)
        }
    } , [urlPath]) 

    return (
        <div className="nav-buttons-div">
            { leftNavButton && (
                <Link to={leftNavButton}>
                    <div className="nav-left-div">
                        <button className="nav-left-button">&larr;</button>
                        <span>{pagePaths[leftNavButton].pageName}</span>
                    </div>
                </Link>
            )}
            { rightNavButton && (
                <Link to={rightNavButton}>
                    <div className="nav-right-div">
                        <button className="nav-right-button">&rarr;</button>
                        <span>{pagePaths[rightNavButton].pageName}</span>
                    </div>
                </Link>
            )}
            
            
            
            
        </div>
    )
}

export default NavButtons