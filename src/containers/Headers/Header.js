import React from "react";
import { Link } from 'react-router-dom';
// import logo from '../../assets/logos/miu-logo.png';
import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li> <Link to={"/"}> Students </Link></li>
                    <li><Link to={"/add-students"}  >Add Students</Link></li>
                    <li><Link to={"/selected-students"}> Selected Students</Link> </li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;