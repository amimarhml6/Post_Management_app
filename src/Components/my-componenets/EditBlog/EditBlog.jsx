import './EditBlog.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditBlog() {
    const navigate = useNavigate();
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const storedData = JSON.parse(localStorage.getItem("edit"));
        if (storedData) {
            setEditData(storedData);
        } else {
            navigate('/Home'); 
        }
    }, [navigate]);

    const handleChange = (e) => {
        setEditData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setEditData(prevData => ({ ...prevData, imageUrl: reader.result })); 
            };
        }
    };

    const handleSave = () => {
        if (!editData) return;

        const allPosts = JSON.parse(localStorage.getItem("posts")) || [];
    
        const updatedPosts = allPosts.map(post =>
            post.id === editData.id ? editData : post
        );
    
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        navigate('/Home'); 
    };

    if (!editData) {
        return <h2 style={{ color: "white" }}>Loading...</h2>;
    }

    return (
        <div className='edit-blg'>
            <div className="EditPost">
                <form className='editforms'>
                    <h1 style={{ color: "white" }}>Edit Post</h1>
                    <input 
                        className='ed' 
                        type='text' 
                        name="title"
                        value={editData.title || ""} 
                        placeholder='Title of post ...'
                        onChange={handleChange}
                    />
                    <input 
                        className='ed' 
                        type='text' 
                        name="author"
                        value={editData.author || ""} 
                        placeholder='Author Of Post ...'
                        onChange={handleChange}
                    />
                    <textarea 
                        className='ed' 
                        id='txtAria' 
                        name="preview"
                        placeholder='Preview of the Posts ...'
                        value={editData.preview || ""}
                        onChange={handleChange}
                    />
                    
                    <div className="upload">
                        <input 
                            type="file" 
                            id="fileInput" 
                            accept="image/*" 
                            style={{ display: "none" }} 
                            onChange={handleImageChange} 
                        />
                        
                        <button 
                            type="button" 
                            className='uploadIMG' 
                            onClick={() => document.getElementById("fileInput").click()}
                        >
                            <i className='bx bx-upload' style={{ fontSize: "35px", color: "white" }}></i>
                        </button>
                        
                        <input 
                            type='text' 
                            placeholder='URL image' 
                            id='upload-input'
                            value={editData.imageUrl || ""} 
                            onChange={handleChange} 
                            name="imageUrl"
                            style={{ marginRight: "15px" }} 
                        />

                        {editData.imageUrl && (
                            <img 
                                src={editData.imageUrl} 
                                alt="Preview" 
                                style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "15px" }} 
                            />
                        )}

                        <h4 style={{ color: "white" }}>Upload post image</h4>
                    </div>
                </form>

                <button className='edit-Submit' onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}