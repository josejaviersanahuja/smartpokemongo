import React from 'react'
import {Link} from 'react-router-dom'

export default function ListaEn({handleClick}) {
    return (
        <>
            <Link to="/" onClick={handleClick}><li >Home</li></Link>
            <Link to="/page/0" onClick={handleClick}><li>Pokemons's list</li></Link>
            <Link to="/about" onClick={handleClick}><li>About</li></Link>
        </>)
}
