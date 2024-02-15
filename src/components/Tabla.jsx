import React from 'react'
import Patrat from './Patrat.jsx'
import './Tabla.css'

export default function Tabla() {

    return (
        <div className='tabla'>
            <div className='rand'>
                <Patrat  />
                <Patrat  />
                <Patrat  />
            </div>
            <div className='rand'>
                <Patrat  />
                <Patrat  />
                <Patrat  />
            </div>
            <div className='rand'>
                <Patrat  />
                <Patrat  />
                <Patrat  />
            </div>
        </div>
    )
}
