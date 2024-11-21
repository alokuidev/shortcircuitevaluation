import { useEffect, useState } from "react";
import './Pokemon.css';
export const Pokemon = () =>{
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("")
    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    const fetchPokemon = () =>{
        fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setApiData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }

    useEffect(() =>{
        fetchPokemon();    
    },[])

    return(
    
    <> 
    {loading && !error? 'Loading...' : ''}
    {error ? 'Error:' + error.message : ''}
    {!loading ? ( 
    <div className="card-container">
    <div className="pokemon-card">
      <div className="card-header">
        <h2>Pikachu</h2>
        <span>#025</span>
      </div>
      <div className="card-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu"/>
      </div>
      <div className="card-details">
        <p><strong>Type:</strong> Electric</p>
        <p><strong>HP:</strong> 35</p>
      </div>
    </div>
    <div className="pokemon-card">
      <div className="card-header">
        <h2>Charmander</h2>
        <span>#004</span>
      </div>
      <div className="card-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="Charmander"/>
      </div>
      <div className="card-details">
        <p><strong>Type:</strong> Fire</p>
        <p><strong>HP:</strong> 39</p>
      </div>
    </div>
    <div className="pokemon-card">
      <div className="card-header">
        <h2>Bulbasaur</h2>
        <span>#001</span>
      </div>
      <div className="card-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur"/>
      </div>
      <div className="card-details">
        <p><strong>Type:</strong> Grass/Poison</p>
        <p><strong>HP:</strong> 45</p>
      </div>
    </div>
    <div className="pokemon-card">
      <div className="card-header">
        <h2>Squirtle</h2>
        <span>#007</span>
      </div>
      <div className="card-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png" alt="Squirtle"/>
      </div>
      <div className="card-details">
        <p><strong>Type:</strong> Water</p>
        <p><strong>HP:</strong> 44</p>
      </div>
    </div>
    {/* <!-- Add more Pokémon cards as needed --> */}
  </div>
    ) : ''}
      
     </> 
    )
}