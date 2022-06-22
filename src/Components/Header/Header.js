import { Link } from "react-router-dom";
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <nav >
                <Link className="nav-link" to='/'>Home</Link>
                <Link  className="nav-link" to='/friends'>Friends</Link>
                <Link className="nav-link" to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;