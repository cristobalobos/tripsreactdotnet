import React, { Component } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Importación correcta
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Trips } from "./components/Trips/Trips";
import { Create } from "./components/Trips/Create";
import { Update } from "./components/Trips/Update";
import { Delete } from "./components/Trips/Delete";
import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </Layout>
    );
  }
}
