import React from 'react'
import {Link} from 'react-router-dom'

export default function Es() {
    return (
        <div className="areyoulost">
            <h1>Oops! ¿Te has perdido?</h1>
            <h3>La página que buscas, no existe o no es válida. Recupera el camino siguiendo los links que recomendamos:</h3> 
            <Link to="/"><i class="fas fa-home"></i></Link><Link to="/page/0"><i class="fas fa-list-ul"></i></Link><Link to="/about"><i class="fas fa-comment-dots"></i></Link>
        </div>
    )
}
