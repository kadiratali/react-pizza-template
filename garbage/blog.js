import React, { useEffect, useRef, useState } from "react";

export default function Blog(props) {
    const inputEl = useRef(null);

    const onButtonClick = () => {
        inputEl.current.click();
    };

    const handlerClick = () => {
        console.log("sa");
    };

    return (
        <div>
            <br />
            <br />

            <button ref={inputEl} onClick={handlerClick}>
                ButtonHandle
            </button>
            <button onClick={onButtonClick}>Focus the input</button>

            <br />
            <br />
        </div>
    );
}
