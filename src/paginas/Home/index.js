import React from 'react'
import HomeEs from './HomeEs'
import HomeEn from './HomeEn'
import HomeD from './HomeD'
import useSEO from '../../hooks/useSEO'

const poliglota = {
    'english':<HomeEn/>,
    'spanish':<HomeEs/>,
    'german':<HomeD/>
}

export default function Home({language}) {
    const title=`Smart Pokemon GO || by ZitrojjDev`
    useSEO({title})
    
    return (<>
        {poliglota[language]}
        </>
    )
}
