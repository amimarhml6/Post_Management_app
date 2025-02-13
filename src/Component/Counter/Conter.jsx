import {useState} from 'react'
import Buttons from './Buttons'

const Conter=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <h1>{count}</h1>
           <Buttons increment={increment} setCount={() => setCount(count -1)}/>
        </div>
    )
}

export default Conter
