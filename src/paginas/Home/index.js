import React from 'react'
import HomeEs from './HomeEs'
import HomeEn from './HomeEn'
import HomeD from './HomeD'

const poliglota = {
    'english':<HomeEn/>,
    'spanish':<HomeEs/>,
    'german':<HomeD/>
}

export default function Home({language}) {
  
    
    return (<>
        {poliglota[language]}
        </>
    )
}
