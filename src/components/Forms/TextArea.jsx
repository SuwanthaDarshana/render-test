import React, { useState } from 'react';

const TextArea = () => {

    const[text,SetText] = useState("");

    const handleChange = (e) =>{
        SetText(e.target.value);
    }

    return (
        <div>
            <h3>TextArea</h3>
            <form>
                <label>Write Here: </label>
                <textarea rows="2" cols="50" placeholder="Type your text here..." onChange={handleChange}></textarea>
                <p>Current Value:{text}</p>
            </form>
        </div>
    );
}

export default TextArea;
