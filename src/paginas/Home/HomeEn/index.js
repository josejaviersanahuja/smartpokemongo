import React from 'react'

export default function index() {
    return (
        <div className="home">
        <h1 className="home__title">Welcome to Smart Pokemon Go</h1>
        <p className="home__p">An app created only to help you improve your pvp</p>
        <p className="home__p">Look for the details of the pokemon you want to study, either in the pokemon list in the menu or search for the pokemon by name.</p>
        <p className="home__p">You will find a lot of Pokemon data in 4 sections...</p>
        <ol className="home__list">
            <li>
                 Buttons with each shape of the Pokemon. <span>Choose the shape you want to study</span>
            </li>
            <li>
                A table of basic stadistics.<span> This will give you an idea of how strong the pokemon is.</span>
            </li>
            <li>
                A selectable list of fast, and charged attacks.<span> This is one of the two great contributions this App provides. You can study all possible ways to combine attacks.</span>
            </li>
            <li>
            A table with details of the fastest combo or charged attack that can do the most damage per second. <span> This is the icing on the cake. It’s the best contribution I’ve been able to create I hope you like it.</span>
            </li>
        </ol>
    </div>
    )
}
