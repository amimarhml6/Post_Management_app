import './CreatePost.css';
import { useState } from 'react';

export default function CreatePost () {
    
    const [titleInput, setTitleInput] = useState('')
    const [authorInput, setAuthorInput] = useState('')
    const [previewInput, setPreviewInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
    
        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    
        const newPost = {
            title: titleInput,
            author: authorInput,
            preview: previewInput
        };
    
        const updatedPosts = [...existingPosts, newPost];
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
    
        setTitleInput("");
        setAuthorInput("");
        setPreviewInput("");
    }

    return (
        <div className='div1'>
                <h1 style={{color:"rgb(5, 109, 255)"}}>Create <span style={{color:"green"}}>Post</span></h1>
            <form >
                <div className='div2' style={{gap: "30px"}}>
                    <label>Title:</label>
                    <input type="text" value={titleInput} onChange={(e)=>{setTitleInput(e.target.value)}}/>
                </div>


                <div className='div2' style={{gap: "13px"}}>
                    <label>Author:  </label>
                    <input type="text" value={authorInput} onChange={(e)=>{setAuthorInput(e.target.value)}}/>
                </div>


                <div className='div2' style={{gap: "10px"}}>
                    <label>Preview:  </label>
                    <input type="text" value={previewInput} onChange={(e)=>{setPreviewInput(e.target.value)}}/>
                </div>

            </form>
                {
                    (titleInput === "" || authorInput === "" || previewInput === "") ? (
                        <p style={{color: "red"}}>Please fill all the fields</p>
                    ) : 
                    (<button type="submit" onClick={handleSubmit}>Submit</button>)
                }
                
        </div>
    )
}