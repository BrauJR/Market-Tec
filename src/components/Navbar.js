import React from "react";
import {Link, Routes, Route} from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                    Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/quienes-somos">
                    Quiénes somos
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                    Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;