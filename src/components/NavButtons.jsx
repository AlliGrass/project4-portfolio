import { Link } from 'react-router-dom';
import pagePaths from "../constants/pagePaths";
import useNavButtons from '../hooks/useNavButtons';

const NavButtons = () => {
    const { leftNavButton, rightNavButton } = useNavButtons()

    return (
        <div className="nav-buttons-div">
            { leftNavButton && (
                <Link to={leftNavButton}>
                    <div className="nav-left-div">
                        <div className="nav-left-arrow-div">
                            <p >&lsaquo;</p>
                        </div>
                        
                        <label>{pagePaths[leftNavButton].pageName}</label>
                    </div>
                </Link>
            )}
            { rightNavButton && (
                <Link to={rightNavButton}>
                    <div className="nav-right-div">
                        <div className='nav-right-arrow-div'>
                            <p>&rsaquo;</p>
                        </div>
                        
                        <label>{pagePaths[rightNavButton].pageName}</label>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default NavButtons