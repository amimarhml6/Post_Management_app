import './InfoCard.css'

export default function InfoCard({Name , Role , Age }){
    return(
        <div className="infocard">
            <p>Hello {Name}</p>
            <p>Your Role is {Role}</p>
            <p>Your Age is {Age} years old</p>
        </div>
    );
};