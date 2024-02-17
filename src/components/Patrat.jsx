import './Patrat.css'

export default function Patrat({ value, onSquareClick }) {
    return (
        <div className='patrat' onClick={onSquareClick}>{value}</div>
    )
}
