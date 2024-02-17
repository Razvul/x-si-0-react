import React, { useState } from 'react'
import Patrat from './Patrat.jsx'
import './Tabla.css'



export default function Tabla() {
    const [patrate, setPatrate] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)

    function handleClick(i) {
        if (patrate[i] || calculeazaCastigator(patrate)) return // daca un patrat este != null atunci nu va mai modifica valoarea patratului

        const nextPatrate = patrate.slice() // aici avem o copie de la patrate
        if (xIsNext) {
            nextPatrate[i] = 'X'
        }
        else {
            nextPatrate[i] = 'O'
        }
        setPatrate(nextPatrate)
        setXIsNext(!xIsNext)
    }

    const castigator = calculeazaCastigator(patrate)
    let status
    if (castigator) {
        status = `Castigator: ${castigator}`
    }
    else {
        status = `Urmatorul jucator: ${xIsNext ? "X" : "O"}`
    }

    return (
        <div className='tabla'>
            <div className='status'>{status}</div>
            <div className='rand'>
                <Patrat value={patrate[0]} onSquareClick={() => handleClick(0)} />
                <Patrat value={patrate[1]} onSquareClick={() => handleClick(1)} />
                <Patrat value={patrate[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='rand'>
                <Patrat value={patrate[3]} onSquareClick={() => handleClick(3)} />
                <Patrat value={patrate[4]} onSquareClick={() => handleClick(4)} />
                <Patrat value={patrate[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='rand'>
                <Patrat value={patrate[6]} onSquareClick={() => handleClick(6)} />
                <Patrat value={patrate[7]} onSquareClick={() => handleClick(7)} />
                <Patrat value={patrate[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
        // handleClick(i) in props va chema functie la render si cum functia este chemata v-a mai face inca o data render
        // we are passing the function as a prop instead of calling the function
    )
}

function calculeazaCastigator(patrate) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (patrate[a] && patrate[a] === patrate[b] && patrate[a] === patrate[c]) {
            return patrate[a];
        }
    }
    return null;
}