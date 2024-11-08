import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
