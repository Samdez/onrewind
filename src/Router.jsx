import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/funzone' />
        <Route path='/testimonials' />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;