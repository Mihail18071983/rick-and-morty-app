import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../shared/api/service';

import { Character } from '../components/CardList';

export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      const character = await getCharacterById(id!);
      setCharacter(character);
      setLoading(false);
    };
    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Location: {character.location.name}</p>
      <p>Episodes: <span>{character.episode[0].name}</span></p>
    </div>
  );
}