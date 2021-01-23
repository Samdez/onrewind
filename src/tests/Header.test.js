import Header from '../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

const { render, screen } = require("@testing-library/react");

it('renders without crashing', () => {
  render(
    <Router>
      <Header></Header>
    </Router>)
  const header = <Header></Header>
  expect(header).not.toBeNull()
})

it('renders the funzone link', () => {
  render(
    <Router>
      <Header></Header>
    </Router>)
  const funzoneText = screen.getByText(/Funzone/)
  expect(funzoneText).toBeInTheDocument();
})

it('renders the testimoniales link', () => {
  render(
    <Router>
      <Header></Header>
    </Router>)
    const testimonialesText = screen.getByText(/Testimoniales/)
    expect(testimonialesText).toBeInTheDocument();
})

it('render the home logo', () => {
  render(
    <Router>
      <Header></Header>
    </Router>)
  const logo = screen.getByTestId('home-logo')
  expect(logo).not.toBeNull()
})

