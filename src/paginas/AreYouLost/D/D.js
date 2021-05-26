import React from 'react'
import {Link} from 'react-router-dom'

export default function D() {
    return (
        <div className="areyoulost">
            <h1>Oops! Haben Sie sich verlaufen??</h1>
            <h3>Die Seite, die Sie suchen, existiert nicht oder ist nicht mehr verfügbar. Finden Sie Ihren Weg zurück, indem Sie einen der Links folgen, die wir Ihnen empfehlen:</h3> 
            <Link to="/"><i class="fas fa-home"></i></Link><Link to="/page/0"><i class="fas fa-list-ul"></i></Link><Link to="/about"><i class="fas fa-comment-dots"></i></Link>
        </div>
    )
}
