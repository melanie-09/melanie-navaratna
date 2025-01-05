import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/work">Work Experience</Link></li>
                <li><Link to="/art">Art</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;