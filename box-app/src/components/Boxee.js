 
import React, {useState} from "react"
import '../style.css'

function Boxee(props)
{

    const [secsquare,setSecSquare] = useState(props.on)


    function switchItUp()
    {
        setSecSquare(!secsquare)
    }
    console.log(secsquare)

    
    const styles={
        backgroundColor: secsquare ? "#223222" : "transparent"
    }
    

    return(
        <div className='box' style={styles} onClick={switchItUp}></div>
    )
}

export default Boxee