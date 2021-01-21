import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <h1>Card Details</h1>
      <p>{data.video.name}</p>
    </div>
   );
}
 
export default CardDetails;