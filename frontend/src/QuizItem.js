import React, { useEffect, useState } from 'react';

const QuizItem = ({ id, name, handleClick, handleDelete }) => {

    const [inputName, setInputName] = useState(name);

    const handleUpdate = (event) => {
        console.log(`Updating quiz with id ${id} to have name ${event.target.value}`)
        fetch(`http://localhost:5000/api/quiz/${id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: event.target.value })
        })
        .then(response => response.json())
        .catch(error => console.error(error));

        setInputName(event.target.value);
    }


    return (
        <div>
            <input type="text" value={inputName} onChange={handleUpdate} />
            <button onClick={handleClick}>Click</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default QuizItem;