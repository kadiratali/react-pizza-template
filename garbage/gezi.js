import React, { useContext } from "react";
import { ContextName } from "../src/index";

export default function Gezi() {
    const context = useContext(ContextName);

    return (
        <>
            <div>{context.name}</div>
            <div>{context.surname}</div>
        </>
    );
}
