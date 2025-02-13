import {useState} from 'react'

const Buttons=({increment , setCount})=>{

    return(
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={setCount}>Decrement</button>
        </div>
    )
}

export default Buttons
