import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path, { replace: true });
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">Daniel Boxall</Link>
                </div>
                <ul className="nav-links">
                    <li>
                        <button onClick={() => handleLinkClick('/Projects')}>Projects</button>
                    </li>
                    <li>
                        <button onClick={() => handleLinkClick('/ContactMe')}>Contact Me</button>
                    </li>
                </ul>
            </nav>
        </>
  );
}


export default Navbar;