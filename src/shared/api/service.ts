import { ApolloClient, InMemoryCache, gql} from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

const query = gql`
  query GetAll($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
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
  const pages = response.data.characters.info.pages;
  return { characters, pages };
}

export const generateCharacterIds = (
  currentPage: number,
  perPage: number,
  totalCharacters: number
) => {
  const startId = (currentPage - 1) * perPage + 1;
  const endId = Math.min(currentPage * perPage, totalCharacters);

  return Array.from(
    { length: endId - startId + 1 },
    (_, index) => startId + index
  );
};

export const getCharactersByIds = gql`
  query getCharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      image
      status
      species
      location {
        name
        id
      }
      episode {
        name
        id
      }
    }
  }
`;



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

export const fetchCharactersByIds = async (
  currentPage: number,
  perPage: number,
  totalCharacters: number
) => {
  const ids = generateCharacterIds(currentPage, perPage, totalCharacters);
  console.log(ids);
  try {
    const { data } = await client.query({
      query: getCharactersByIds,
      variables: { ids },
    });
    console.log(data);

    return data.charactersByIds.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
};