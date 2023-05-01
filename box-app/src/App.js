import boxes from './boxes'
import React, { useState } from "react"
import './style.css'


export default function App()
{

    const [squares, setSquares] = useState(boxes)
    
    const Boxelements = squares.map((square) =>(
        <div>{square.id}</div>
    ))
    
    return(
        <div>
           <Boxelements/>
        </div>
    )
}

 