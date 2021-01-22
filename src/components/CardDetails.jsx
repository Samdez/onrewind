import { useQuery } from "@apollo/react-hooks";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "../animations";
import { GET_SINGLE_VIDEO_QUERY } from "./GraphQL/Queries";
import Loader from './Loader';

const CardDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SINGLE_VIDEO_QUERY, {
    variables: {
      id: id
    }
  })
  console.log(data);
  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;
  return (
    <CardDetailsPage>
      <CardDetailsContainer
      variants={fadeIn}
      initial='hidden'
      animate='show'
      >
        <img src={data.video.poster ? data.video.poster : 'https://pbs.twimg.com/profile_images/452961105522872320/eFX_I4Nt.jpeg'} alt='card-detail' />
        <h4>{data.video.name}</h4>
        <TagsList>
        {data.video.Tags.map(tag => (
          <p key={tag.name}>#{tag.name}</p>
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

const CardDetailsContainer = styled(motion.div)`
  height: 90vh;
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
  font-size: 1.5rem;
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