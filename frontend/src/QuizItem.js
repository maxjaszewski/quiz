import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuizItem = ({ id, name, onDelete }) => {
  const [inputName, setInputName] = useState(name);

  const handleUpdate = (event) => {
    event.stopPropagation();
    console.log(
      `Updating quiz with id ${id} to have name ${event.target.value}`
    );
    fetch(`http://localhost:5000/api/quiz/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: event.target.value }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    

    setInputName(event.target.value);
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    onDelete();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%', margin: 'auto', textDecoration: 'none', color: 'inherit' }}>
      <input type="text" value={inputName} onClick={(e) => e.stopPropagation()} onChange={handleUpdate} style={{ flex: 9 }} />
      <Link to={`/quiz/${id}`} style={{ flex: 1 }}>Go</Link>
      <button onClick={handleDelete} style={{ flex: 1 }}>Delete</button>
    </div>
  );
};

export default QuizItem;
