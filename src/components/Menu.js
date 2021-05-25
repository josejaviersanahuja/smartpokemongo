import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="desplegable">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page/0">Lista de Pokemones</Link></li>
            </ul>
        </div>
    )
}
