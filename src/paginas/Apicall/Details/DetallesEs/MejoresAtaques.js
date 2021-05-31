import React from 'react'
import useMejoresAtaques from '../../../../hooks/useMejoresAtaques'
import TablaMejorAtaqueCargado from './TablaMejorAtaqueCargado'
import TablaMejorAtaqueRapido from './TablaMejorAtaqueRapido'
/* ambos estados tienen esta forma
mejorCombo={
    addEnergyAmount: 9
    addEnergySpeed: 9
    energyrequired: -40
    howlongtocharge: 5
    howmanypunches: 5
    namecharged: "Fire Punch"
    namefast: "Psycho Cut"
    powercharged: 55
    powerfast: 3
    turn: 2
    typeFast: "Psychic"
    typecharged: "Fire"
}
*/
export default function MejoresAtaques({ datapokByform, dataToPost, datapok }) {
    const { mejorComboPoder, mejorComboRapido, allCombos } = useMejoresAtaques({ fast_moves: datapokByform.fast_moves, charged_moves: datapokByform.charged_moves })
    /*
    dataToPost={
        id:datapok[0].id,
        name:datapok[0].name,
        base_attack:datapok[0].base_attack,
        base_defense:datapok[0].base_defense,
        base_stamina:datapok[0].base_stamina,
        forms:[],
        nodata:false
    }
    */
    const handlePush = () => {
        let detailsByForm = [{
            form: datapokByform.form,
            fast_moves: datapokByform.fast_moves,
            charged_moves: datapokByform.charged_moves,
            all_combos: allCombos(),
            fastest_combo: mejorComboRapido,
            power_combo: mejorComboPoder
        }]
        let newForms = dataToPost.forms.map(e=>e)
        
        dataToPost.forms=newForms.concat(detailsByForm) // no consigio que el array crezca 
        console.log(dataToPost, '--push');
    }

    const handleReset = () => {
        dataToPost = {
            id: datapok[0].id,
            name: datapok[0].name,
            base_attack: datapok[0].base_attack,
            base_defense: datapok[0].base_defense,
            base_stamina: datapok[0].base_stamina,
            forms: [],
            nodata:false
        }
        console.log(dataToPost, '--reset');
    }

    const handlePost = () => {
        console.log(dataToPost, '--intro');
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify(dataToPost);
        console.log(raw);
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }; 

        fetch("http://localhost:3002/api/combos", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); 
    }

    //console.log(datapokByform, '-- obj a devolver? mejores ataques');
    return (
        <div className="contenedor">
            <button onClick={handlePost}>Intro</button> <button onClick={handleReset}>Reset</button>
            <button onClick={handlePush}>PushForm</button>
            <div className="details__combos">
                <table >
                    <caption> Los mejores ataques: </caption>
                    {mejorComboPoder && mejorComboRapido ?
                        <thead>
                            <tr >
                                <th className="tabla__fila1"></th>
                                <th className="tabla__fila1">Nombre del ataque</th>
                                <th className="tabla__fila1" >Poder del ataque</th>
                                <th className="tabla__fila1">Tiempo de ataque / Tiempo de Carga</th>
                                <th className="tabla__fila1">Golpes por segundo/Golpes antes de carga</th>
                                <th className="tabla__fila1">Tipo</th>
                            </tr>
                        </thead> : null}
                    <tbody>
                        {mejorComboRapido ? <TablaMejorAtaqueRapido mejorComboRapido={mejorComboRapido} /> : null}
                        {mejorComboPoder ? <TablaMejorAtaqueCargado mejorComboPoder={mejorComboPoder} /> : null}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
