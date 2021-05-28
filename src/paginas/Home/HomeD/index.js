import React from 'react'

export default function index() {
    return (
        <div className="home">
            <h1 className="home__title">Willkommen bei Smart Pokemon Go</h1>
            <p className="home__p">Eine App, die nur entwickelt wurde, um dich im Pvp zu verbessern</p>
            <p className="home__p">Finde die Details des Pokemon, das du studieren möchtest, entweder in der Liste der Pokemones im Menü oder suche nach dem Pokemon nach seinem Namen.</p>
            <p className="home__p">In 4 Abschnitten finden Sie viele Informationen über Pokemon. . .</p>
            <ol className="home__list">
                <li>
                Knöpfe mit alles Forms des Pokemon. <span>Entscheidern Sie die form, die Sie studieren möchten</span>
                </li>
                <li>
                Eine Tabelle mit grundlegenden Statistiken.<span>  So bekommst du eine Vorstellung davon, wie stark das Pokemon ist. </span>
                </li>
                <li>
                Eine wählbare Liste von schnellen und geladenen Angriffen. <span> Dies ist einer der 2 grossen Leistungen, die dieser App anbiete. Du kannst alle möglichen Arten der Kombination von Angriffen untersuchen.</span>
                </li>
                <li>
                Eine Tabelle mit Details über die schnellsten Combos, oder geladen Angriff, die den grössten Schaden pro Sekunde anrichten können. <span> Das ist der beste Beitrag, den ich je gemacht habe. Ich hoffe, es gefällt Ihnen.</span>
                </li>
            </ol>
        </div>
    )
}
