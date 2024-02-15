import React, { useState } from 'react'
import Patrat from './Patrat.jsx'
import './Tabla.css'

export default function Tabla() {
    const [patrate, setPatrate] = useState(Array(9).fill(null))

    function handleClick() {
        const nextPatrate = patrate.slice()
        nextPatrate[0]='X'
        setPatrate(nextPatrate)
    }

    return (
        <div className='tabla'>
            <div className='rand'>
                <Patrat value={patrate[0]} onSquareClick={handleClick} />
                <Patrat value={patrate[1]} onSquareClick={handleClick} />
                <Patrat value={patrate[2]} onSquareClick={handleClick} />
            </div>
            <div className='rand'>
                <Patrat value={patrate[3]} onSquareClick={handleClick} />
                <Patrat value={patrate[4]} onSquareClick={handleClick} />
                <Patrat value={patrate[5]} onSquareClick={handleClick} />
            </div>
            <div className='rand'>
                <Patrat value={patrate[6]} onSquareClick={handleClick} />
                <Patrat value={patrate[7]} onSquareClick={handleClick} />
                <Patrat value={patrate[8]} onSquareClick={handleClick} />
            </div>
        </div>
    )
}
