import React, { useRef, useEffect } from "react";
import PokemonItem from "./PokemonItem";
import "./PokemonList.css";

const PokemonList = ({ pokemons, focusedIndex, setFocusedIndex, focusMode, setFocusMode }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const focusedItem = listRef.current.children[focusedIndex];
      if (focusedItem) {
        focusedItem.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    }
  }, [focusedIndex]);

  return (
    <div className="pokemon-list" ref={listRef}>
      {pokemons.map((pokemon, index) => (
        <PokemonItem
          key={pokemon.id}
          pokemon={pokemon}
          isFocused={index === focusedIndex}
          onMouseEnter={() => {
            if (focusMode !== "keyboard") {
              setFocusMode("mouse");
            }
          }}
          onClick={() => {
            setFocusedIndex(index);
            setFocusMode("mouse");
          }}
        />
      ))}
    </div>
  );
};

export default PokemonList;
