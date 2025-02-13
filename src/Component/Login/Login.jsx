import {useState , useEffect} from 'react'

export default function Login(){
    const [Login , setLogin] = useState(false)
    const changeLog =()=>{
        setLogin(prev =>!prev)
    }

    useEffect(()=>{
        if (Login) {
            console.log("fetched")
        }  
    },[Login])

    const [data,setdata]=useState([])

    const handlefetch = async()=>{
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json()
        setdata(data.fact)
    }
        return(
        <div>
            
            {(Login)?(
                <>
                    <h1>Login in</h1>
                    <div>
                        <button onClick={changeLog} style={{fontSize:'20px',position:'fixed'}}>Login</button>
                        <button onClick={handlefetch} style={{fontSize:'20px',position:'fixed',margin:'20px'}}>fetch</button>
                    </div>
                    
                    
                    <h1 style={{marginTop:'60px'}}>Data:</h1>
                    <p>{data}</p>
                </> 
                ):(
                <>
                    <h1>logged</h1>
                    <button onClick={changeLog} style={{fontSize:'20px',position:'fixed'}}>Login</button>
                </>
            )}
                <br></br>
            
            
        </div>
    )
}