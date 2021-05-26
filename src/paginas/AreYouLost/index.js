import React from 'react'
import Es from './Es/Es'
import En from './En/En'
import D from './D/D'

const poliglota = {
    'english':<En/>,
    'spanish':<Es/>,
    'german':<D/>
}

export default function index({language}) {
    
    return (
        poliglota[language]
    )
}
