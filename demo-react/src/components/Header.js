import React from "react";
import "./Header.css";

// component là thành phần của giao diện bao gồm : HTML, CSS, JS
class Header extends React.Component {
  render() {
    // return ui của header
    return (
      <div className="header">
        <a className="logo">Logo</a>
        <nav>
          <a>Home</a>
        </nav>
      </div>
    );
  }
}

export default Header;
