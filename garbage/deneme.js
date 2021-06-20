import React from "react";
import Blog from "./blog";
import Gezi from "./gezi";

export default function Deneme(props) {
    return (
        <div>
            Kadir
            <Blog isim={props.name} />
            <Gezi />
        </div>
    );
}
