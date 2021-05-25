import {useState, useEffect, useCallback} from 'react'
import useAllCharged from '../data/ataques_cargados_PVP.json'
import useAllFast from '../data/ataques_rapidos_PVP.json'



/*
fast_moves=["ataqueR1", "ataqueR2", "ataqueR3"]
charged_moves=["ataqueC1", "ataqueC2", "ataqueC3"]
*/
export default function useMejoresAtaques({fast_moves, charged_moves}) {
    const [mejorComboRapido, setmejorComboRapido] = useState(false)
    const [mejorComboPoder, setmejorComboPoder] = useState(false)
    const allFast= useAllFast
    const allCharged=useAllCharged    
    /*
    arrayDeFastMoves=[...{
    energy_delta: 6
    move_id: 234
    name: "Zen Headbutt"
    power: 8
    turn_duration: 3
    type: "Psychic"
    }...]
    arrayDeChargedMoves=[...{
    energy_delta: -35
    move_id: 131
    name: "Body Slam"
    power: 60
    turn_duration: 1
    type: "Normal"}...]
    */
   

    const allCombos = useCallback(
        () =>{
            let arrayDeFastMoves =  fast_moves.map(e=> allFast.find(ataque => ataque.name === e) )
           let arrayDeChargedMoves= charged_moves.map(e=> allCharged.find(ataque=> ataque.name === e))
  
          let arrayAllCombos = []
          arrayDeFastMoves.forEach(element => {
                  let temp=element 
                  
              arrayDeChargedMoves.forEach(eleCharged=> {
                  let combo= {}
                  combo.namefast=temp.name
                  combo.powerfast=temp.power
                  combo.addEnergyAmount=temp.energy_delta
                  combo.turn=temp.turn_duration
                  combo.addEnergySpeed=temp.energy_delta/(temp.turn_duration*0.5)
                  combo.typeFast=temp.type
                  combo.namecharged=eleCharged.name
                  combo.typecharged=eleCharged.type
                  combo.powercharged = (eleCharged.type===combo.typeFast)? eleCharged.power*1.2 : eleCharged.power
                  combo.energyrequired=eleCharged.energy_delta
                  combo.howmanypunches=Math.ceil(-combo.energyrequired/combo.addEnergyAmount)
                  combo.howlongtocharge=combo.howmanypunches*combo.turn*0.5
                  arrayAllCombos.push(combo)
              })
          });
          // console.log(arrayDeFastMoves, arrayDeChargedMoves, arrayAllCombos);
          return arrayAllCombos
      } ,
        [allCharged,allFast,fast_moves,charged_moves],
    )

     const fastestCombo = useCallback(
         () => {
            let arrayAllCombos=allCombos()
            let arrayAllresults= arrayAllCombos.map( e => e.howlongtocharge)
            let time= Math.min(...arrayAllresults) 
            let fastestindex=arrayAllresults.indexOf(time)
            let result = arrayAllCombos[fastestindex]
            return result
         },
         [allCombos],
     )
    const mostPowerfulCombo = useCallback(
        () => {
            let arrayAllCombos=allCombos()
            let arrayAllresults= arrayAllCombos.map( e => e.powercharged/e.howlongtocharge)
            let maxdps= Math.max(...arrayAllresults)
            let powerindex = arrayAllresults.indexOf(maxdps)
            let result= arrayAllCombos[powerindex]
            console.log(arrayAllCombos);
            return result
        },
        [allCombos],
    )
    useEffect(() => {
        setmejorComboRapido(fastestCombo())
        setmejorComboPoder(mostPowerfulCombo())
        return () => {
            
        }
    }, [fastestCombo, mostPowerfulCombo])
    
     

        return { mejorComboPoder, mejorComboRapido}
}
