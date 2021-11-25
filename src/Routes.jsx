import React, { Suspense, lazy } from 'react';
import {
  Route, Redirect, Switch, useHistory, useLocation,
} from 'react-router-dom';
import queryString from 'query-string';
import { Container } from './shared/Flexi';

const Home = lazy(() => import('./pages/Home'));
const Cast = lazy(() => import('./pages/Cast'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Movie = lazy(() => import('./pages/Movie'));
const NotFound = lazy(() => import('./pages/NotFound'));
const WatchList = lazy(() => import('./pages/WatchList'));
const MoviesInGenre = lazy(() => import('./pages/MoviesInGenre'));
const SearchResults = lazy(() => import('./pages/SearchResults'));

// readable routes linter
/* eslint react/jsx-max-props-per-line: 0 */

const Routes = () => {
  return (
    <Container>
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          <Redirect exact path="/" to="/discover/popular" />
          <Redirect exact path="/discover" to="/discover/popular" />
          <Route exact path={['/discover/:discoverID(popular|top-rated|upcoming)']} component={Home} />

          <Route exact path="/genre/:genreID" component={MoviesInGenre} />
          <Route exact path="/movie/:movieID" component={Movie} />
          <Route exact path="/cast/castID" component={Cast} />

          <Route exact path="/search" component={SearchResults} />

          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/watch-list" component={WatchList} />
          {/* 404 PAGE */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default Routes;
