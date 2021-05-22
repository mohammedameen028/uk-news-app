import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Display from '../Display';
import Search from '../Search';

//Home component has the different routes in place
//Search - Search based on keyword
//display - to display the latest UK news  @todo - renaming the components
const Home = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/search" component={Search} />
      <Route path="/display" component={Display} />
      <Route component={Display} />
    </Switch>
  </BrowserRouter>
);

export default Home;
