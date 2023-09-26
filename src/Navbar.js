import { Link } from "react-router-dom"
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/about">AboutMe</Link>
            <Link to="/contact">ContactMe</Link>
            <Link to="/skill">Skills</Link>
        </div>
    );
}

export default Navbar;
