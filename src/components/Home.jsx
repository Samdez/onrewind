import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GET_VIDEOS_QUERY } from './GraphQL/Queries';
import NavButtons from './NavButtons';



const Home = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_VIDEOS_QUERY, {
    variables: {
      limit: 5,
    }
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  if (loading || isLoadingMore) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <NavButtons data={data} isLoadingMore={isLoadingMore} setIsLoadingMore={setIsLoadingMore} fetchMore={fetchMore} />
      <HomeContainer>
        {data.allVideos.items.map(video => (
          <Card key={video.id} to={`/${video.id}`}>
              <img 
              src={video.poster ? video.poster : 'https://pbs.twimg.com/profile_images/452961105522872320/eFX_I4Nt.jpeg'} 
              alt="card-poster" 
              />
              <p>{video.name}</p>
              {video.Tags.map(tag => <p key={tag.name}>#{tag.name}</p>
              )}
          </Card>
        )
        )
        }
      </HomeContainer>
    </>
  );
}

export const HomeContainer = styled.div`
  min-height: 80vh;
  padding: 0 1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export const Card = styled(Link)`
  height: 40vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  min-width: 300px;
  flex: 1;
  /* background-color: #e3dfdf; */
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
  overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      max-height: 50%;
    }
`

export default Home;
