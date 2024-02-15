
import './Patrat.css'
import { useState } from 'react'

export default function Patrat({ text }) {
    const [value, setValue] = useState(null)

    function handleClick() {
        setValue('X')
    }
    return (
        <button className='patrat' onClick={handleClick}>{value}</button>
    )
}
