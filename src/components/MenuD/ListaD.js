import React from 'react'
import {Link} from 'react-router-dom'

export default function ListaEs() {
    return (
        <>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/page/0">Liste von Pokemon</Link></li>
            <li><Link to="/about">Über</Link></li>
        </>)
}
