import React from 'react'

export default function HomeEs() {
    
    return (<>
        <div className="home">
            <h1 className="home__title">Bienvenido a Smart Pokemon Go</h1>
            <p className="home__p">Una app creada únicamente para ayudarte a mejorar en el pvp</p>
            <p className="home__p">Busca los detalles del pokemon al que deseas estudiar, ya sea en la lista de pokemones del menú, o busca al pokemon por su nombre.</p>
            <p className="home__p">Encontrarás muchos datos del pokemon en 4 secciones...</p>
            <ol className="home__list">
                <li>
                     Botones con cada forma del pokemon.  <span>Escoge la forma que deseas estudiar</span>
                </li>
                <li>
                    Un cuadro de estadísticas básicas.<span> Esto te permitirá tener una idea de cuan fuerte es el pokemon.</span>
                </li>
                <li>
                    Una lista seleccionable de ataques rápidos y cargados.<span> Esta es una de los 2 grandes aportes que ofrezco con esta App. Puedes estudiar todas las formas posibles de combinar ataques.</span>
                </li>
                <li>
                    Una tabla con detalles de los combos más rápidos o del ataque cargado que más daño por segundo puede hacer. <span> Esta es la guinda del pastel. Es el mejor aporte que he podido crear. Espero que les guste.</span>
                </li>
            </ol>
        </div>
</>
    )
}
