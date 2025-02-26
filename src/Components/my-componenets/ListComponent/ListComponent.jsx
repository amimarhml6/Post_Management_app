import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import GridItem from "./GridItem";
import "./ListComponent.css";
import { Link } from "react-router-dom";

export default function ListComponent() {
  const [typeList, setTypeList] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  function handleList() {
    setTypeList(!typeList);
  }

  function handleDeletePost(id) {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
    localStorage.setItem("posts", JSON.stringify(newPosts));
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const GridPosts = filteredPosts.map(post => (
    <GridItem
      key={post.id}
      id={post.id}
      title={post.title}
      author={post.author}
      preview={post.preview}
      imageUrl={post.imageUrl}
      onDelete={() => handleDeletePost(post.id)}
    />
  ));

  const ListPosts = filteredPosts.map(post => (
    <ListItem
      key={post.id}
      id={post.id}
      title={post.title}
      author={post.author}
      preview={post.preview}
      imageUrl={post.imageUrl}
      onDelete={() => handleDeletePost(post.id)}
    />
  ));

  const isLoggedIn = localStorage.getItem("Login") === "true";

  return (
    <div className="ListComponents" id="ListComponent">
      <div className="Settings">
        <h1 className="allPosts">All Posts</h1>

        <div className="search">
          <i className="bx bx-search-alt-2"></i>
          <input
            className="in"
            type="text"
            placeholder="Search for your Post ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="elements">
          {isLoggedIn && <Link to="/Create"><i className="bx bxs-message-square-add"></i></Link>}
          <button onClick={handleList} className="btnbtn">
            {typeList ? <i className="bx bxs-grid-alt"></i> : <i className="bx bx-list-ul"></i>}
          </button>
        </div>
      </div>

      <div className="Postss">
        {typeList ? <div className="Lists">{ListPosts}</div> : <div className="Grids">{GridPosts}</div>}
      </div>
    </div>
  );
}
