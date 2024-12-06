import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerm, searchBarRef }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        ref={searchBarRef}
        placeholder="Procurar Pokémon..."
        className="search-bar"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
