import React from "react";
import "./App.css";
import Home from "./EX6/Home";
import DemoUseState from './EX10/DemoUseState'
import DemoUseEffect from "./EX10/DemoUseEffect";


class App extends React.Component {
  render() {
    return (
      <div>
      <Home/>
     
      {/* <DemoUseState/>
      <DemoUseEffect/> */}
      </div>
    );
  }
}

export default App;