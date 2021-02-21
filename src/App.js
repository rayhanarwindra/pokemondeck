import './App.css';
import PokeCard from './PokeCard';

function App() {

  const pokemons = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ];

  const pokeCards = pokemons.map (p => 
        <PokeCard key={p.id} name = {p.name} type = {p.type} experience = {p.base_experience}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
        >
        </PokeCard>
        )

  return (
    <div className="App">
      <h1>My Pokedex</h1>
      <div className="App-PokeCards">
        {pokeCards}
      </div>
    </div>
  );
}

export default App;
