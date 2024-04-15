import { useState , useEffect} from "react";

function Card({name, img, onClick}) {
  return (
    <div className="card_grid" onClick={() => onClick(name)}>
      <img src={img} alt={name} />
    </div>
  )
}

function Game({currentScore, highestScore, setCurrentScore, setHighestScore}) {
  const pokemonList = ["charizard", "gengar", "arcanine", "bulbasaur", "eevee", "dragonite", "squirtle", "ninetales", "snorlax", "blastoise"];
  const [pokemonImgList, setPokemonImgList] = useState([]);
  const [clickedList, setClickedList] = useState([]);

  useEffect(() => {
    async function getImgs() {
      const responses = await Promise.all(pokemonList.map(pokemonName => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)));
      const data = await Promise.all(responses.map(response => response.json()));
      const img_list = data.map(item => {return {name: item.species.name, img: item.sprites.front_default}});
      setPokemonImgList(img_list);
    }
    getImgs();
  }, [])

  function shuffle(array) {
    var temp = [...array];
    let currentIndex = temp.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [temp[currentIndex], temp[randomIndex]] = [
        temp[randomIndex], temp[currentIndex]];
    }
    return temp;
  }

  function handleClick(name) {
    const newPokemonList = shuffle(pokemonImgList);
    setPokemonImgList(newPokemonList);
    var newCurrentScore = 0;
    var newHighestScore = 0;
    if (clickedList.includes(name)) {
      alert("Opps, try again!");
      setClickedList([]);
      newCurrentScore = 0;
      newHighestScore = Math.max(currentScore, highestScore);
    } else {
      setClickedList(
        [
          ...clickedList,
          name
        ]
      )
      newCurrentScore = currentScore + 1;
      newHighestScore = Math.max(newCurrentScore, highestScore);
    }
    setCurrentScore(newCurrentScore);
    setHighestScore(newHighestScore);
  }

  return (
    <div className="game">
      <h2>Game</h2>
      <div className="card_container">
        {pokemonImgList.map(({name, img}) => <Card key={name} name={name} img={img} onClick={handleClick}></Card>)}
      </div>
    </div>
  )
}

export default Game;