import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";
import Funzone from "./components/Funzone";
import Testimonials from "./components/Testimonials";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/funzone' component={Funzone}/>
        <Route path='/testimonials' component={Testimonials}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;