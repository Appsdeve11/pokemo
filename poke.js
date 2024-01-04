function Pokecard({ pokemon }) {
    const { name, id, type } = pokemon;
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
    return (
      <div className="pokecard">
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
        <p>Type: {type}</p>
      </div>
    );
  }
  
  function Pokedex({ pokemonList }) {
    return (
      <div className="pokedex">
        {pokemonList.map((pokemon) => (
          <Pokecard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }
  
  
  const pokemonList = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 4, name: "Charmander", type: "Fire" },
    { id: 7, name: "Squirtle", type: "Water" },
  ];
  
  
  ReactDOM.render(<Pokedex pokemonList={pokemonList} />, document.getElementById("root"));