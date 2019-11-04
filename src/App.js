/* eslint-disable no-lone-blocks */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const LocalData = [
  {
    id: "b9277c30-8989-4f11-a005-437fc7854247",
    description: "Actors to help with your Medival parties!",
    title: "Fort Knights",
    url: null,
    votes: 222,
    avatarUrl: "./images/avatars/daniel.jpg",
    bulletinImageUrl: "./images/products/image-aqua.png"
  },
  {
    id: "2f616e97-f848-4893-b36c-b747760d0bd1",
    description: "Turning your car from blah to bling!",
    title: "Drop Top Customs",
    url: null,
    votes: 19,
    avatarUrl: "../../images/avatars/steve.jpg",
    bulletinImageUrl: "../../images/products/image-steel.png"
  },
  {
    id: "6161c1b6-d530-4b6b-9cd7-cbbedb4b1c3a",
    description: "Fashionable headwear for the conspiracy theorist in you!",
    title: "Tin Foil Hats",
    url: null,
    votes: 13,
    avatarUrl: "../../images/avatars/jenny.jpg",
    bulletinImageUrl: "../../images/products/image-rose.png"
  },
  {
    id: "9c7205d7-93f9-4bb4-bc32-c951fdc886ea",
    description: "The best food in the kingdom, brought to your door!",
    title: "Gilded Rose Catering",
    url: null,
    votes: 21,
    avatarUrl: "../images/avatars/kristy.png",
    bulletinImageUrl: "../images/products/image-yellow.png"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



{/* <div className="item">
      <div className="image">
        <img />
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a>
            <i className="large caret up icon" />
          </a>
        </div>
        <div className="description">
          <a></a>
          <p></p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" />
        </div>
      </div>
    </div> */}
