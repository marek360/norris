"use strict"
let color = []
const button = document.getElementById("button")

const quotes = [
    `Chuck Norris ne ment pas, c'est la vérité qui se trompe.`,
    `Chuck Norris est en couleur sur les photos Noir et Blanc..`,
    `Un jour Chuck Norris a dit "Va voir la-bas si j'y suis"... et il y était....`,
    `Chuck Norris a déjà compté jusqu'à l'infini. Deux fois..`,
    `Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo..`,
    `Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.`,
    `Chuck Norris peut encercler ses ennemis. Tout seul.`,
    `Chuck Norris sait parler le braille..`,
    `Chuck Norris peut monter en bas.`,
    `Chuck Norris peut monter en bas..`
]


function generateQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)]
}

function generateColor() {

    for (let i = 0 ; i < 3 ; i++)
        color.push(Math.floor(Math.random() * 256))
    return color
}


function display() {
    let text = document.getElementById("quote")
    text.textContent = generateQuote()
    
}

button.addEventListener("click", display)



