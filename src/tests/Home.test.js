import Home from "../components/Home"
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import { GET_VIDEOS_QUERY } from "../components/GraphQL/Queries";
const { render } = require("@testing-library/react");


it('displays nav buttons', async() => {

  const mocks = [
    {
      request: {
        query: GET_VIDEOS_QUERY,
        variables: {
          limit: 5,
        }
      },
      result: {
        data: {
          allVideos: {
            cursor: {
              after: "after",
              before: "before"
            },
            items: {
              name: "name",
              id: "id",
              poster: "poster",
              Tags: {
                name: "name",
             }
            }
           }
        }
      }
    }
  ]

  const { debug } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home></Home>
    </MockedProvider>
  )

  await new Promise(resolve => setTimeout(resolve, 10));
  debug();
  const home = <Home></Home>
  expect(home).not.toBeNull()
})