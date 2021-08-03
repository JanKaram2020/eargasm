import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
