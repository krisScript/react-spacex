import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Loader from './Loader'
// const  Home = lazy(() => import('./Home') )
import Home from './Home';
const LaunchDetails = lazy(() => import('./Launches/LaunchDetails'));
const Launches = lazy(() => import('./Launches/Launches'));
const Missions = lazy(() => import('./Missions'));
const Router = () => (
  <BrowserRouter>
    <>
      <Navbar />
      <Switch>
        <Route
          path="/missions"
          render={() => (
            <Suspense fallback={<Loader/>}>
              <Missions />
            </Suspense>
          )}
        />
        <Route
          path="/launches"
          
          render={() => (
            <Suspense fallback={<Loader/>}>
              <Launches />
            </Suspense>
          )}
        />
        <Route
          path="/launch/:flightNumber"
          render={(props) => (
            <Suspense fallback={<Loader/>}>
              <LaunchDetails {...props} />
            </Suspense>
          )}
        />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
