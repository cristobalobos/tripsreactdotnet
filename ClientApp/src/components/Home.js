import React, { Component } from "react";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Welcome trips manager </h1>
        <p>use this manager for yout trips</p>
        <ul>
          <li>Add new trip</li>
          <li>Update trip</li>
          <li>Delete trip</li>
          <li>Show all trip</li>
        </ul>
      </div>
    );
  }
}
