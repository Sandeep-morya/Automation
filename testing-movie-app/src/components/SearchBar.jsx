import icon from "./search-outline.svg"
import { useState } from "react";

const SearchBar = () => {
    return (
        <div className="search_bar">
            <input 
            placeholder="Enter Movie Name eg: 'Spiderman' "/>
            <img
                src={icon}
                alt="icon"
            />
           
        </div>
    )
}

export default SearchBar