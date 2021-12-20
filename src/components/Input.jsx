import React, { useState } from 'react'

function Input(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }

    return (
        <div className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text" 
                placeholder=" Add Todo" 
                value={input} 
                name="text" 
                className="todo-input"
                onChange={handleChange} 
            />
            <button className="todo-button">Add</button>

        </div>
    )
}

export default Input;
