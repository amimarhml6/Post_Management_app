import Post from './day3Finalproject/Post'
import { useState, useEffect } from 'react'
import './Posts.css'


export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        //process of adding...
        setPosts(storedPosts);
    }, []);


    function handleDeletePost(id) {
        const newPosts = posts.filter((post, i) => i !== id)
        setPosts(newPosts)
        localStorage.setItem('posts', JSON.stringify(newPosts));

    }

    const [startEditid, setstartEditid] = useState(null)
    const [editPost, setEditPost] = useState({ title: "", author: "", preview: "" })

    function startEdits(index) {
        setstartEditid(index);
        setEditPost({ ...posts.find((post, i) => i === index) })
    }
    function saveEdits(index) {
        const updatedPosts = posts.map((post, i) =>
            i === index ? editPost : post
        );
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setstartEditid(null);
    }


    const PostList = posts.map((post, index) => {
        return (
            <div key={index} className="posthome">
                <div className="postss">
                    <Post title={post.title} author={post.author} preview={post.preview} />
                </div>
                <div className="buttons">
                    {(startEditid === index) ? (
                        <>
                            <input type="text" value={editPost.title} onChange={(e) => { setEditPost({ ...editPost, title: e.target.value }) }} />
                            <input type="text" value={editPost.author} onChange={(e) => { setEditPost({ ...editPost, author: e.target.value }) }} />
                            <input type="text" value={editPost.preview} onChange={(e) => { setEditPost({ ...editPost, preview: e.target.value }) }} />
                            <button onClick={() => { saveEdits(index) }}>save</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => { startEdits(index) }}>Edit</button>
                            <button onClick={() => { handleDeletePost(index) }}>Delete</button>
                        </>
                    )

                    }

                </div>
            </div>

        )
    })

    return (

        <div className="home">
            <div className="posts">
                {PostList}
            </div>





        </div>


    )
}