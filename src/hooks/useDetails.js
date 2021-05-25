import {useState} from 'react'

export default function useDetails({datapokByform}) {
    let fastObj={}
    datapokByform.fast_moves.map(e=> fastObj[e]=false)
    const fastCheckInicial=fastObj
    
    let chargedObj={}
    datapokByform.charged_moves.map(e=> chargedObj[e]=false)
    const chargedCheckInicial=chargedObj
    
    const [fastCheck, setfastCheck] = useState(fastCheckInicial)
    const [chargedCheck, setchargedCheck] = useState(chargedCheckInicial)
    
    const handleChangeFast = (ev) => {
        const fastkey=ev.target.value;
        let newState={}
        datapokByform.fast_moves.map(e=> newState[e]=false)
        newState[fastkey]= true
        setfastCheck(newState)
    }
    const handleChangeCharged = (ev) => {
        const chargedkey=ev.target.value;
        let newState={}
        datapokByform.charged_moves.map(e=> newState[e]=false)
        newState[chargedkey]= true
        setchargedCheck(newState);
    }
    const findTrueElement = ()=>{
        const fastTrue=Object.keys(fastCheck).filter(key=> fastCheck[key]===true)
        
        const chargedTrue=Object.keys(chargedCheck).filter(key=> chargedCheck[key]===true)
        return {fastTrue, chargedTrue}
    }

   return {fastCheck, chargedCheck, handleChangeFast, handleChangeCharged, findTrueElement}
}
