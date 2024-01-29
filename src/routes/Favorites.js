import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavorites } from '../services/favorites';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function Favorites() {
  const [ favorites, setFavorites ] = useState([])

  async function fetchFavorites() {
    const favoritesAPI = await getFavorites()
    setFavorites(favoritesAPI)
  }

  useEffect(() => {
    fetchFavorites()
  })

  return (
    <AppContainer>
      {
        favorites.map(favorite => (
          <p>{favorite.name}</p>
        ))
      }
    </AppContainer>
  );
}

export default Favorites
