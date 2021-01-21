import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GET_SINGLE_VIDEO_QUERY } from "./GraphQL/Queries";

const CardDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_VIDEO_QUERY, {
    variables: {
      id: id
    }
  })
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <CardDetailsPage>
      <CardDetailsContainer>
        <img src={data.video.poster} alt="" />
        <p>{data.video.name}</p>
        <TagsList>
        {data.video.Tags.map(tag => (
          <p key={tag.name}>{tag.name}</p>
          ))}
          </TagsList>
      </CardDetailsContainer>
    </CardDetailsPage>
  );
}

const CardDetailsPage = styled.div`
height: 100vh;
display: flex;
justify-content: center;
`

const CardDetailsContainer = styled.div`
  height: 80vh;
  max-width: 100%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  overflow: hidden;
    img{
      height: 80%;
      max-width: 100%;
      object-fit: contain;
      margin-top: 0;
    }
`

const TagsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`

export default CardDetails;