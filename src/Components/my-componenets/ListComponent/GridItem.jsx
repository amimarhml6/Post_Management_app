import "./GridItem.css";
import { Link } from "react-router-dom";

export default function GridItem({ id,title, author, preview, imageUrl, onDelete }) {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const isLoggedIn = localStorage.getItem("Login") === "true"; 

  function handleClick(){
    const EditPost={id:id,title:title, author:author, preview:preview, imageUrl:imageUrl}
    localStorage.setItem("edit", JSON.stringify(EditPost));
  }

  return (
    <div className="grid-item">
      <img src={imageUrl} alt="Post" className="grid-image" />
      <div className="grid-content">
        <h2 className="title">{title}</h2>
        <p className="date">
          {currentDate} By <span className="author">{author}</span>
        </p>
        <p className="preview">{preview}</p>

         
        {isLoggedIn && (
          <div className="buttons">
            <Link to="/edit" className="edit" onClick={handleClick} >Edit</Link>
            <button className="delete" onClick={onDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}
