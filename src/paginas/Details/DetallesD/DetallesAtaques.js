import React from 'react'
import Spinner from '../../../components/Spinner'
import useAttackDetails from '../../../hooks/useAttackDetails'
import AtaqueCargado from './AtaqueCargado'
import AtaqueRapido from './AtaqueRapido'
/*
fastTrue = ["nombreDeAtaqueRapido"] || [] cuando no hay radio seleccionado
chargedTrue = ["nombreDeAtaqueCargado"] || [] cuando no hay radio seleccionado

fastAttack= false (cuando esta cargando el fetch) ||{
    energy_delta: 6
    move_id: 234
    name: "Zen Headbutt"
    power: 8
    turn_duration: 3
    type: "Psychic"
}

chargedAttack= false (cuando esta cargando el fetch) ||{
    energy_delta: -35
    move_id: 131
    name: "Body Slam"
    power: 60
    turn_duration: 1
    type: "Normal"
}
*/
export default function DetallesAtaques({fastTrue, chargedTrue}) {
   
    const {fastAttack, chargedAttack}=useAttackDetails({fastTrue, chargedTrue})
    
    return (<>
        {fastAttack? <AtaqueRapido fastAttack={fastAttack}/>: <Spinner/>}
        {chargedAttack? <AtaqueCargado chargedAttack={chargedAttack}/> : <Spinner/>}
    </>)
}
