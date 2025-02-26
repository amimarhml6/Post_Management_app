import "./ListItem.css";
import { Link } from "react-router-dom";

export default function ListItem({ id,title, author, preview, imageUrl, onDelete }) {
  const today = new Date().toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const isLoggedIn = localStorage.getItem("Login") === "true"; 
  
  function handleClick(){
    const EditPost={id:id,title:title, author:author, preview:preview, imageUrl:imageUrl}
    localStorage.setItem("edit", JSON.stringify(EditPost));
  }
  


  return (
    <div className="post-container">
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-meta">
          {today} By <span className="author">{author}</span>
        </p>
        <textarea className="post-preview" readOnly value={preview}></textarea>

         
        {isLoggedIn && (
          <div className="buttons">
            <Link to="/edit" className="edit-btn" onClick={handleClick}>Edit</Link>
            <button className="remove-btn" onClick={onDelete}>Remove</button>
          </div>
        )}
      </div>

      <div className="post-image">
        <img src={imageUrl} alt="Post" />
      </div>
    </div>
  );
}
