import React from "react";
import Image from "./components/Image";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <h2>404 not found</h2>
      <div className="hero">
        <Image />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default App;
