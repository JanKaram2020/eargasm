import React from "react";
import Artist from "./Artists";
import Album from "./Albums";
import Genre from "./Genres";
import Home from "./Home";
import Child from "./Child";
import { Route, Switch } from "react-router-dom";
import Search from "./Search";

const Content = () => {
  return (
    <div className="main">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/artists"
          render={() => {
            return <Artist />;
          }}
        />
        <Route
          exact
          path="/albums"
          render={() => {
            return <Album />;
          }}
        />
        <Route
          exact
          path="/genres"
          render={() => {
            return <Genre />;
          }}
        />
        <Route path="/artists/:name" children={<Child />} />
        <Route path="/albums/:name" children={<Child />} />
        <Route path="/genres/:name" children={<Child />} />
        <Route path="/search/:name" children={<Search />} />
      </Switch>
    </div>
  );
};

export default Content;
