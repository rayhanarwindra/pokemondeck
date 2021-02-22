import './App.css';
import PokeCard from './PokeCard';

function App() {

  const [pokeDeck1, exp1] = generatePokemon();
  const [pokeDeck2, exp2] = generatePokemon();

  const firstDeckWin = exp1 > exp2 ? true : false; 

  const [winText, loseText] = [<h1 className="App-Win">You win!</h1> , <h1 className="App-Lose">You lose!</h1>]

  return (
    <div className="App">
      <h1>Pokemon Battle</h1>
      <h1>Deck 1</h1>
      <div className="App-PokeCards">
        {pokeDeck1}
      </div>
        {firstDeckWin ? winText : loseText}
        <hr></hr>
        <h1>Deck 2</h1>
        <div className="App-PokeCards">
          {pokeDeck2}
        </div>
        {!firstDeckWin ? winText : loseText}
    </div>
  );
}

const generatePokemon = () => {

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

  const pokeCards = [];

  let exp = 0;
  
  for (let i = 0 ; i < pokemons.length / 2 ; i++){
    let idx = Math.floor(Math.random() * pokemons.length);
    let  p = pokemons[idx];
    pokeCards[i] = <PokeCard key={i} name = {p.name} type = {p.type} experience = {p.base_experience}
    img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
  >
  </PokeCard>
    exp += p.base_experience;
  }

  return [pokeCards, exp];
}

export default App;
