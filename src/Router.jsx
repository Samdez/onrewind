import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Header from "./components/Header";
import Funzone from "./components/Funzone";
import Testimonials from "./components/Testimonials";
import CardDetails from "./components/CardDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/funzone' component={Funzone}/>
        <Route path='/testimonials' component={Testimonials}/>
        <Route path='/:id' component={CardDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;