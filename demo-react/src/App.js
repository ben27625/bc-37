import React from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DemoDataBinding from "./components/DemoDataBinding";
import Home from "./EX4/Home";
import ProductList from "./components/ProductList";
import MovieList from "./components/MovieList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
