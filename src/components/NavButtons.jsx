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