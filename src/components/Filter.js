import React from "react";
import Item from "./Item";


function Filter({ onCategoryChange }) {
    return (
        <div>
            <select onChange={onCategoryChange}></select>
        </div>

    );
}

export default Filter;
