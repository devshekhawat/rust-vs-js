import React, { useState } from "react";

function Form({ onSubmit }) {
    const [size, setSize] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(parseInt(size));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Data size:
                <input
                    type="number"
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                />
            </label>
            <button type="submit">Generate</button>
        </form>
    );
}

export default Form;
