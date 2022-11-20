import React, { Component } from "react";
import styles from "./ProductList.module.css";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  products = [
    { id: 1, name: "iphone 14", price: 1400 },
    { id: 2, name: "Samsung ZFlip 4", price: 1000 },
    {
      id: 3,
      name: "Apple Watch S8",
      price: 500,
    },
  ];

  // [{}, {}, {}] => [div.col, div.col, div.col]
  renderProducts = () => {
    const html = this.products.map((item) => {
      return (
        <div key={item.id} className={styles.col}>
          <ProductItem prod={item}/>
        </div>
      );
    });
    return html;
  };

  render() {
    return (
      <div>
        <h1>Danh sách sản phẩm</h1>
        <div className={styles.row}>
          {this.renderProducts()}
          
        </div>
      </div>
    );
  }
}
