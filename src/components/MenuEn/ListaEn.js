import React from 'react'
import {Link} from 'react-router-dom'

export default function ListaEn() {
    return (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page/0">Pokemons's list</Link></li>
            <li><Link to="/about">About</Link></li>
        </>)
}
