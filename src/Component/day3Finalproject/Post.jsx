import './Post.css'

export default function Post({title, author, preview}){
    return(

        <div className="post">
            <div className="text">
                <h1>{title}</h1>
                <h1>{author}</h1>
                <p>{preview}</p>
            </div>
            
            
        </div>
    )
}