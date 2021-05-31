import React from 'react'
import {Link} from 'react-router-dom'

export default function ListaEs({handleClick}) {
    return (
        <>
            <Link to="/" onClick={handleClick}><li >Homepage</li></Link>
            <Link to="/page/0" onClick={handleClick}><li>Liste von Pokemon</li></Link>
            <Link to="/about" onClick={handleClick}><li>Über</li></Link>
            <Link to="/apicall" onClick={handleClick}><li>ZitrojjDev</li></Link>
        </>)
}
