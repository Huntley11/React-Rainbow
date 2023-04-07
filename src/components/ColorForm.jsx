import React, { useState } from "react";

function ColorForm(props) {
    let [ inputColor, setInputColor] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        let { addToColors } = props;
        if (inputColor) {
            addToColors(inputColor)
        }
    }

    return <div className="color-form">
        <form onSubmit={onSubmit}>
            <input type="text" 
            onChange={ e => setInputColor(e.target.value)}
            />
            <button type="submit">Subimt!</button>
        </form>
    </div>

}

export default ColorForm