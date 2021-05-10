import allpokemons_ataques from '../data/pokemons_ataques.json'
import allpokemons from '../data/pokemons.json'
import allataques_rapidos from '../data/ataques_rapidos_PVP.json'
import allataques_cargados from '../data/ataques_cargados_PVP.json'
import allrapidos from '../data/ataques_rapidos.json'

export const listPokemonsYataques =  allpokemons.map(e => {
    let ataques = allpokemons_ataques.filter(elem => e.id === elem.pokemon_id)
    if(ataques.length>0) {
    let obj={
        id:e.id,
        name:e.name,
        ataques:ataques
        }
    
    return obj
    } else {
        return {
            id:e.id,
            name:e.name,
            ataques:[]
            }
    }
})

export function numeroDeFormas({name}) {
    let temp=listPokemonsYataques.filter(e=> e.name===name)
    let formas=  temp[0].ataques.map(el=> el.form)
    if(formas.length>0){
    return formas
    } else {
        return []
    }
}

export function detallesFastMovesPVP(fast_moves = []) {
    
    return fast_moves.map(e=> {
        let temp = allataques_rapidos.filter(el=> el.name===e)
        let temp2 = allrapidos.filter(ele=>ele.name===e)
        let obj=temp[0]
        obj.duration=temp2[0].duration
        return obj
    })
}

export function bestFastMoveToCharge(fast_moves=[]){
    if (fast_moves.length===0) {
        return {vel:0,name:"no ataca", duration:1000000, energy:0}
    } else {
    let temp=fast_moves.map(e=> e.energy_delta*1000/e.duration)
    let index=temp.indexOf(Math.max(...temp))
    if (fast_moves[index].name) {
        let obj = {
            vel:Math.max(...temp),
            name:fast_moves[index].name,
            duration:fast_moves[index].duration,
            energy:fast_moves[index].energy_delta
    }
    return obj
    } }
}

export function detallesChargedMovesPVP(charged_moves = []) {
    
    return charged_moves.map(e=> {
        let temp = allataques_cargados.filter(el=> el.name===e)
        return temp[0]
    })
}

export function fastestChargedMoves(charged_moves=[]){
   if (charged_moves.length!==0) {
    let temp=charged_moves.map(e=> e.energy_delta)
    let index=temp.indexOf(Math.max(...temp))
    let obj= {
        name:charged_moves[index].name,
        energy:Math.max(...temp),
        power: charged_moves[index].power
    }
    return obj   
   } else {
       return {name:"N/S", energy:-100000}
   }
    
}

export function campeonesVelocidad() {

    let campeones=[]

    listPokemonsYataques.forEach(element => {
        let pok={
            id:0,
            name:"",
            forma:"",
            ataque_rapido:"",
            ataque_cargado:"",
            poder_ataque_cargado:0,
            numTurnos:10,
            tiempo:10
        }
        pok.id=element.id
        pok.name=element.name
        let forms=numeroDeFormas(element)
        if (forms.length!==0) {
          
            forms.forEach(f=> {
                pok.forma=f
                let index=forms.indexOf(f)
                const fast_moves=detallesFastMovesPVP(element.ataques[index].fast_moves)
                
                const charged_moves=detallesChargedMovesPVP(element.ataques[index].charged_moves)
                const bestToCharge=bestFastMoveToCharge(fast_moves)
                
                const fastestCharged=fastestChargedMoves(charged_moves)
                pok.ataque_rapido=bestToCharge.name
                pok.ataque_cargado=fastestCharged.name
                pok.numTurnos=Math.trunc((-fastestCharged.energy/bestToCharge.energy)+1)
                pok.tiempo=pok.numTurnos*bestToCharge.duration/1000
                pok.power=fastestCharged.power
                //console.log(element.id);
            })

            if (pok.forma!=="Shadow"&&pok.tiempo<3.3) {
                campeones.push(pok)
            }
        }

    });

    return campeones
}