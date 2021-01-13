import React, { useContext } from "react";
import "./searchBar.scss";
import SearchSVG from "./searchBar.svg";
import DataAreaContext from "../../utils/dataAreaContext.js";

function Search() {
    const context = useContext(DataAreaContext);
    return (
        <>
            <div className="search-container">
                <img src={SearchSVG} className="searchIcon" alt="Search" />
                <input
                    type="text"
                    className="search"
                    placeholder="Search"
                    onChange={(e) => context.handleSearchChange(e)}
                ></input>
            </div>
        </>
    );
}

export default Search;