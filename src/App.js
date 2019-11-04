import React from "react";
import Header from "./Components/Header/Header";
import BulletinList from "./Components/Bulletin/BulletinList";
import BulletinListFC from "./Components/Bulletin/BullteinListFC";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BulletinListFC />
    </div>
  );
}

export default App;
