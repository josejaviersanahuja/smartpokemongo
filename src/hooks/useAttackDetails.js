import {useState, useEffect} from 'react'
import getChargedAttacks from '../services/getChargedAttacks'
import getFastAttacks from '../services/getFastAttacks'

export default function useAttackDetails({fastTrue, chargedTrue}) {
    const [fastAttack, setfastAttack] = useState(false)
    const [chargedAttack, setchargedAttack] = useState(false)
    
    useEffect(() => {
        
        setfastAttack(false)
         getFastAttacks({fastTrue})
            .then(fast => {
                setfastAttack(fast)
            })
        
        return () => {
        
        }
    }, [fastTrue])

    useEffect(() => {
        setchargedAttack(false)
        getChargedAttacks({chargedTrue})
            .then(charged => {
                setchargedAttack(charged)
            })
        return () => {
            
        }
    }, [chargedTrue])

    return {fastAttack, chargedAttack}
}

