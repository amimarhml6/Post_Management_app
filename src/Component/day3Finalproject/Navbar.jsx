import './Navbar.css'
export default function Navbar(){
    return(

        <div className="Home">
            <div className="text">
                <h1 style={{color:'white'}}>Dev<span style={{color:'green'}}>Up</span></h1>
            </div>
            <div className="nav">
                <ul>
                    <li><a href='./Home'>Home</a></li>
                    <li><a href='./Create'>Create</a></li>
                </ul>
            </div>
        </div>
    )
}