import { Link } from 'react-router-dom';
import useNavButtons from '../hooks/useNavButtons';
import data from "../data/data.json"

const NavButtons = () => {
    const pagePaths = data.pagePaths
    const { leftNavButton, rightNavButton } = useNavButtons()

    return (
        <div className="nav-buttons-div">
            { leftNavButton && (
                <Link to={leftNavButton}>
                    <div className="nav-left-div">
                        <div className="nav-left-arrow-div">
                            <h4>&lsaquo;</h4>
                        </div>
                        
                        <label>{pagePaths[leftNavButton].pageName}</label>
                    </div>
                </Link>
            )}
            { rightNavButton && (
                <Link to={rightNavButton} target={pagePaths.pageName === "Resume" ? "_blank" : "_self"}>
                    <div className="nav-right-div">
                        <div className='nav-right-arrow-div'>
                            <h4>&rsaquo;</h4>
                        </div>
                        
                        <label>{pagePaths[rightNavButton].pageName}</label>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default NavButtons