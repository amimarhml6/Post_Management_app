import { useState } from 'react';

export default function TodoList() {
    const [textinput, settextinput] = useState('');
    const [TaskList, setTaskList] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState(''); 

    const handleText = (e) => settextinput(e.target.value);

    const AddTasks = () => {
        if (textinput.trim() !== '') {
            setTaskList([...TaskList, textinput]);
            settextinput('');
        }
    };

    const RemoveTasks = (indexToRemove) => {
        setTaskList(TaskList.filter((_, index) => index !== indexToRemove));
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditText(TaskList[index]);
    };

    const saveEdit = (index) => {
        const updatedTasks = TaskList.map((task, i) =>
            i === index ? editText : task
        );
        setTaskList(updatedTasks);
        setEditIndex(null);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <div className="text">
                <input type="text" value={textinput} onChange={handleText} />
                <button onClick={AddTasks}>Add</button>
            </div>
            <div className="table">
                {TaskList.map((task, index) => (
                    <div key={index} className="task">
                        <ul style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
                            {editIndex === index ? (
                                <>
                                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                    <button onClick={() => saveEdit(index)}>SaveEdit</button>
                                </>
                            ) : (
                                <>
                                    <li>{task}</li>
                                    <button onClick={() => RemoveTasks(index)}>Remove</button>
                                    <button onClick={() => startEditing(index)}>Modify</button>
                                </>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
