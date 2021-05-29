import React from 'react'
import Es from './Es/Es'
import En from './En/En'
import D from './D/D'
import useSEO from '../../hooks/useSEO'

const poliglota = {
    'english':<En/>,
    'spanish':<Es/>,
    'german':<D/>
}

export default function AreYouLost({language}) {
    const title=`Smart Pokemon Go a tool to improve your PVP record`
    useSEO({title})
    
    return (
        poliglota[language]
    )
}
