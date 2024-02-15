
import './Patrat.css'
import { useState } from 'react'

export default function Patrat({ text, onSquareClick }) {
    return (
        <div className='patrat' onClick={onSquareClick}>{text}</div>
    )
}
