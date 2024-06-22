import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'lightgray' }}>
            <nav>
                <ul className="my-list">
                    <li>
                        <Link to="/quiz">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;