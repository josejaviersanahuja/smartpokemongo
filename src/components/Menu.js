import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="desplegable">
            <ul>
                <li><Link to="/PVP">PVPsmart</Link></li>
                <li><Link to="/CampeonesPVP">Campeones en velocidad de ataques en PVP</Link></li>
            </ul>
        </div>
    )
}
