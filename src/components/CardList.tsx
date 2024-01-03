import styled from "@emotion/styled"
import { Box, ListItem, List } from "@mui/material";
import { Link } from "react-router-dom";

export interface Character {
  id: string;
  image: string;
  name: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
  episode: { name: string }[];
}

interface CardListProps {
  characters: Character[];
}

export default function CardList({ characters }: CardListProps) {
  return (
    <StyledList>
      {characters.map((character) => (
        <ListItem sx={{ border: "1px solid red" }} key={character.id}>
          <img
            width={229}
            height={220}
            src={character.image}
            alt={character.name}
          />
          <Box>
            <Box>
              <Link to={`/character/${character.id}`}>
                <p>{character.name}</p>
              </Link>
              <p>
                <span>{character.status}</span>-<span>{character.species}</span>
              </p>
            </Box>
            <Box>
              <h2>Last known location:</h2>
              <p>{character.location.name}</p>
            </Box>
            <Box>
              <h2>First seen in:</h2>
              <p>{character.episode[0].name}</p>
            </Box>
          </Box>
        </ListItem>
      ))}
    </StyledList>
  );
}

const StyledList =styled(List)`
  display:grid;
  grid-template-columns:1fr 1fr;
`
