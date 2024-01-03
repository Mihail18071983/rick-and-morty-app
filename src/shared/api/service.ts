import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const query = gql`
  query GetAll($page: Int!) {
    characters(page: $page) {
        info {
      count
    }
      results {
        id
        name
        image
        status
        species
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;

export async function getAllCharacters(page: number) {
  const response = await client.query({ query, variables: { page } });
  console.log("response", response);
  const characters = response.data.characters.results;
  const total=response.data.characters.info.count;
  return { characters, total };
}



const getCharacterByIdQuery = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      name
      image
      status
      species
      location {
        name
      }
      episode {
        name
      }
    }
  }
`;

export async function getCharacterById(id: string) {
  const response = await client.query({
    query: getCharacterByIdQuery,
    variables: { id },
  });
  const character = response.data.character;
  console.log(character);
  return character;
}
