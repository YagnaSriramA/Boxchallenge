import boxes from './boxes'
import React, {useState} from "react"
import './style.css'
import Boxee from './components/Boxee'


export default function App(props)
{

    const [squares, setSquares] = useState(boxes)

    

    const Boxelements = squares.map((square) =>(
            <Boxee key={square.id} on={square.on} numb={square.id}/>       
    ))

    

    
    
    return(
        <div>
           <span className='only-text'>Boxes will go here</span>
           <div className='container'>{Boxelements}</div>
           <div></div>
        </div>
    )
}

 