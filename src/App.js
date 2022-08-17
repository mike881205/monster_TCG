import { React, useState, useEffect } from "react";
import './App.css';
import Constants from "./constants";
import { Container } from "react-bootstrap";
// import MonsterCard from './components/MonsterCard';
import Bench from "./components/Bench";

const App = () => {

  const { Monsters, Types, Stages, Rarities } = Constants;

  const [Pokemon, setPokemon] = useState(null);
  const [test, setTest] = useState(null)

  useEffect(() => {
    const monsters = Monsters.map((pokemon, i) => {
      pokemon.id = i;
      return pokemon;
    });
    setPokemon(monsters);
    setTest([monsters[0], monsters[1], monsters[2], monsters[3], monsters[4], monsters[5], monsters[6], monsters[7], monsters[8]])
  }, [])

  return (
    <div className="App">
      <Container style={{minWidth: '100%', minHeight: '100%'}}>
        {
          !Pokemon ?
            <div></div>
            :
          <Bench
            Pokemon={test}
          />
        }
      </Container>
    </div>
  );
};

export default App;
