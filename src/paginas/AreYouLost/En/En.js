import React from 'react'
import {Link} from 'react-router-dom'

export default function En() {
    return (
        <div className="areyoulost">
            <h1>Oops! Are you lost?</h1>
            <h3>The page you are searching for, does not exist or is not available anymore. Recover your path by following any of the links we recommend you:</h3> 
            <Link to="/"><i class="fas fa-home"></i></Link><Link to="/page/0"><i class="fas fa-list-ul"></i></Link><Link to="/about"><i class="fas fa-comment-dots"></i></Link>
        </div>
    )
}
