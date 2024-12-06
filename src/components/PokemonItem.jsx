import React, { useEffect, useRef } from "react";
import "./PokemonItem.css";
import typeColors from "../utils/typeColors";

const PokemonItem = ({ pokemon, isFocused, onMouseEnter, onClick }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    if (isFocused && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "nearest",
      });
    }
  }, [isFocused]);

  const primaryType = pokemon.types[0];
  const avatarBackground = typeColors[primaryType] || "#f0f0f0";

  return (
    <div
      ref={itemRef}
      className={`pokemon-item ${isFocused ? "focused" : ""}`}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
    >
      <div
        className="pokemon-avatar"
        style={{
          backgroundColor: avatarBackground,
        }}
      >
        {pokemon.image ? (
          <img src={pokemon.image} alt={pokemon.name} />
        ) : (
          <span className="avatar-fallback">
            {pokemon.name.charAt(0).toUpperCase()}
          </span>
        )}
      </div>
      <div className="pokemon-details">
        <h3 className="pokemon-name">{pokemon.name}</h3>
        <div className="pokemon-types">
          {pokemon.types.map((type, index) => (
            <span
              key={index}
              className="type-badge"
              style={{
                backgroundColor: typeColors[type],
              }}
            >
              {type}
            </span>
          ))}
        </div>
        <div className="pokemon-abilities">
          {pokemon.abilities.map((ability, index) => (
            <span key={index} className="ability-badge">
              {ability}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonItem;
