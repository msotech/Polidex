import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import PokemonList from "./components/PokemonList";
import SearchBar from "./components/SearchBar";
import "./App.css";
import logo from "./assets/logo.png";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [focusMode, setFocusMode] = useState("keyboard");
  const searchBarRef = useRef(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      const detailedPokemons = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const details = await axios.get(pokemon.url);
          return {
            id: details.data.id,
            name: details.data.name,
            image: details.data.sprites.front_default,
            abilities: details.data.abilities.map((a) => a.ability.name),
            types: details.data.types.map((t) => t.type.name),
          };
        })
      );
      setPokemons(detailedPokemons);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (filteredPokemons.length === 0) return;

      setFocusMode("keyboard");

      switch (e.key) {
        case "ArrowDown":
          setFocusedIndex((prev) => Math.min(prev + 1, filteredPokemons.length - 1));
          break;
        case "ArrowUp":
          setFocusedIndex((prev) => Math.max(prev - 1, 0));
          break;
        case "Enter":
          alert(`Você selecionou: ${filteredPokemons[focusedIndex].name}`);
          break;
        case "/":
          if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            searchBarRef.current?.focus();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredPokemons, focusedIndex]);

  return (
    <div className="app-container">
      {loading ? (
        <p>Carregando Pokémons...</p>
      ) : (
        <>
          <div className="logo-container">
            <img src={logo} alt="Logo Polidex" className="logo" />
          </div>
          <SearchBar setSearchTerm={setSearchTerm} searchBarRef={searchBarRef} />
          <PokemonList
            pokemons={filteredPokemons}
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}
            focusMode={focusMode}
            setFocusMode={setFocusMode}
          />
        </>
      )}
    </div>
  );
};

export default App;
