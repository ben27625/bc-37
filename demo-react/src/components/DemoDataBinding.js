import React, { Component } from "react";
import styles from "./DemoDataBinding.module.css";

export default class DemoDataBinding extends Component {
  fullName = "Trần Sinh";
  age = 23;
  state = {
    isLogin: false,
  };

  showMessage() {
    return "Hello world ";
  }

  showAlert() {
    alert("Warning...");
  }

  showAlert2(message) {
    alert(message);
  }

  showAlert3 = () => {
    alert(this.fullName + this.age);
  };

  handleLogin() {
    // immutable
    this.setState({
      isLogin: true,
    });
  }

  handleLogOut() {
    this.setState({
      isLogin: false,
    });
  }

  renderLogin() {
    if (this.isLogin) {
      return (
        <div>
          <h1>Welcome</h1>
          <button className={styles.btn} onClick={this.handleLogOut}>
            Log out
          </button>
        </div>
      );
    }

    return (
      <div>
        <button className="btn" onClick={this.handleLogin}>
          Log in
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/* <h1>
          {/* dataBinding
          Hello, {this.fullName}. I'm {this.age}
        </h1>
        {this.showMessage()}
        <button onClick={this.showAlert}>Alert 1</button>
        <button
          onClick={() => {
            this.showAlert2("Hello");
          }}
        >
          Alert2
        </button>
        <button onClick={this.showAlert3}>Alert3</button> */}
        <button>Login</button>
        <div>
          <h1>Welcome</h1>
          <button>Log out</button>
        </div>
      </div>
    );
  }
}
