import React, { useState, useEffect, useRef } from 'react';

import api from '../../services/api';

import Character from '../Character';
import CharacterHeader from '../CharacterHeader';

import {
  Container,
  CharactersListContainer
} from './styles';

const Characters: React.FC = () => {
  const characterListRef = useRef(null);

  const [heroes, setHeroes] = useState([]);
  const [villains, setVillains] = useState([]);
  const [antheroes, setAntHeroes] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [humans, setHumans] = useState([]);

  useEffect(() => {

    const loadCharacters = async () => {
      const heroes = await api.get("/heroes");
      setHeroes(heroes.data);

      // const villains = await api.get("/villains");
      // setVillains(villains.data);


      // const antHeroes = await api.get("/antiHeroes");
      // setAntHeroes(antHeroes.data);


      // const aliens = await api.get("/aliens");
      // setAliens(aliens.data);


      // const humans = await api.get("/humans");
      // setHumans(humans.data);

    }

    loadCharacters();
  }, [api])


  return (
    <Container>
      <CharacterHeader />
      <CharactersListContainer
        ref={characterListRef}
        data={heroes}
        keyExtractor={(character: any) => character.id}
        renderItem={({ item }: { item: any }) =>
          <Character
            name={item.name}
            alterEgo={item.alterEgo}
            imagePath={item.imagePath}
          />
        }
      />
    </Container>
  )
}

export default Characters;