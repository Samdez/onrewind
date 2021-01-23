import { screen } from "@testing-library/react"
import Home from "../components/Home"
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
const { render } = require("@testing-library/react");

const mocks = []

it('displays nav buttons', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home></Home>
    </MockedProvider>
  )
  const navButtons = screen.getAllByTestId('nav-button')
  expect(navButtons).toBeGreaterThanOrEqual(1)
})