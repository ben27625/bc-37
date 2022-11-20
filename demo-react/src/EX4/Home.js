import React, { Component } from "react";
import Category from "./Category";
import ProductList from "./ProductList";
import Model from "./Model";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-4 text-center mb-5">Phòng thử đồ</h1>
        <div className="row">
          <div className="col-7">
            <Category />
            <ProductList />
          </div>
          <div className="col-5">
            <Model />
          </div>
        </div>
      </div>
    );
  }
}
