import { Link } from "react-router-dom"
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div>Portfolio</div>
            <div className="details">
                <Link to="/about" className="navbardetails">AboutMe</Link>
                <Link to="/contact" className="navbardetails">ContactMe</Link>
                <Link to="/skill" className="navbardetails">Skills</Link>
            </div>
        </div>
    );
}

export default Navbar;
