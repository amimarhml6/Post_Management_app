import './CreateBlog.css';
import { useState, useEffect } from "react";

export default function CreateBlog() {
    const [upload, setUpload] = useState(false);
    const [fileKey, setFileKey] = useState(Date.now());  
    const [Data, setData] = useState({
        id: null,
        title: "",
        author: "",
        preview: "",
        imageUrl: "",  
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (Data.imageUrl) {
            setUpload(true);
        }
    }, [Data.imageUrl]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setData(prevData => ({ ...prevData, imageUrl: reader.result })); 
            };
        }
    };
    

    function handleClick(e) {
        e.preventDefault();
        console.log(Data.title, Data.author, Data.preview, Data.imageUrl);

        if (!Data.title || !Data.author || !Data.preview || !Data.imageUrl) {
            return;
        }

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
        let lastId = parseInt(localStorage.getItem('lastId')) || 0;
        const newId = lastId + 1;

        const newPost = {
            id: newId,
            title: Data.title,
            author: Data.author,
            preview: Data.preview,
            imageUrl: Data.imageUrl
        };

        const updatedPosts = [...existingPosts, newPost];

        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        localStorage.setItem('lastId', newId);

       
        setData({ id: null, title: "", author: "", preview: "", imageUrl: "" });
        setUpload(false);
        setFileKey(Date.now());  
    }

    return (
        <div className='create-blg'>
            <div className="newPost">
                <form className='forms'>
                    <h1 style={{ color: "white" }}>New Post</h1>
                    <input 
                        className='in' 
                        type='text' 
                        placeholder='Title of post ...' 
                        value={Data.title} 
                        onChange={(e) => setData({ ...Data, title: e.target.value })} 
                        required 
                    />
                    <input 
                        className='in' 
                        type='text' 
                        placeholder='Author Of Post ...' 
                        value={Data.author} 
                        onChange={(e) => setData({ ...Data, author: e.target.value })} 
                        required 
                    />
                    <textarea 
                        className='in' 
                        id='txtAria' 
                        placeholder='Preview of the Posts ...' 
                        value={Data.preview} 
                        onChange={(e) => setData({ ...Data, preview: e.target.value })} 
                        required 
                    />

                    <div className="upload">
                        <input 
                            type="file" 
                            id="fileInput" 
                            accept="image/*" 
                            key={fileKey}  
                            style={{ display: "none" }} 
                            onChange={handleImageChange} 
                        />

                        <button 
                            type="button" 
                            className='uploadIMG' 
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("fileInput").click();
                            }}
                        >
                            <i className='bx bx-upload' style={{ fontSize: "35px", color: "white" }}></i>
                        </button>

                        {Data.imageUrl && (
                            <img 
                                src={Data.imageUrl} 
                                alt="Preview" 
                                style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "15px" }} 
                            />
                        )}

                        <h4 style={{ color: "white" }}>Upload post image</h4>
                    </div>
                </form>

                {(!Data.author || !Data.title || !Data.preview || !Data.imageUrl) ? (
                    <p style={{ color: "red" }}>Please complete all the fields</p>
                ) : (
                    <button className='create-Submit' onClick={handleClick}>Submit</button>
                )}
            </div>
        </div>
    );
}
