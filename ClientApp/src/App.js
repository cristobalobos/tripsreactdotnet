import React, { Component, createContext } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Trips } from "./components/Trips/Trips";
import { Create } from "./components/Trips/Create";
import { Update } from "./components/Trips/Update";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/trips" component={Trips} />
        <Route path="/update/:id" component={Update} />
      </Layout>
    );
  }
}
