import React from 'react'
import {Link} from 'react-router-dom'

export default function ListaEs({handleClick}) {
    return (
        <>
            <Link to="/" onClick={handleClick}><li>Principal</li></Link>
            <Link to="/page/0" onClick={handleClick}><li>Lista de Pokemones</li></Link>
            <Link to="/about" onClick={handleClick}><li>Acerca de</li></Link>
        </>)
}
