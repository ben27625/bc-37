import React, { Component } from "react";
import "./Model.css";

export default class Model extends Component {
  render() {
    return (
      <div
        className="contain"
        style={{
          backgroundImage: "url(./images/background/background_998.jpg)",
        }}
      >
        <div
          className="body"
          style={{ backgroundImage: "url(images/allbody/bodynew.png)" }}
        />
        <div
          className="model"
          style={{
            backgroundImage: "url(images/model/1000new.png)",
          }}
        />
        <div
          className="bikinitop"
          style={{
            backgroundImage: "url(images/allbody/bikini_branew.png)",
          }}
        />
        <div
          className="bikinitop top-cloth"
          style={{
            backgroundImage: "url(images/clothes/topcloth2.png)",
          }}
        />
        <div
          className="bikinibottom"
          style={{
            backgroundImage: " url(images/allbody/bikini_pantsnew.png)",
          }}
        />
        <div
          className="bikinitop bot-cloth"
          style={{
            backgroundImage: " url(images/clothes/botcloth1.png)",
          }}
        />
        <div
          className="feetleft"
          style={{
            backgroundImage: "url(images/allbody/feet_high_leftnew.png)",
          }}
        />
        <div
          className="feetright"
          style={{
            backgroundImage: "url(images/allbody/feet_high_rightnew.png)",
          }}
        />
        <div
          className="shoes"
          style={{
            backgroundImage: " url(images/shoes/shoes1.png)",
          }}
        />
      </div>
    );
  }
}
