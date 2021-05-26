import React from 'react'
import {Link} from 'react-router-dom'

export default function ListaEs() {
    return (
        <>
            <li><Link to="/">Principal</Link></li>
            <li><Link to="/page/0">Lista de Pokemones</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
        </>)
}
