import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    console.log(this.props.categoryList);
    return (
      <div className="btn-group d-flex justify-content-center mt-5">
        {this.props.categoryList.map((item) => {
          return (
            <button key={item.tabName} className="btn btn-secondary">
              {item.showName}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // key : value
    // Key : tên prop của component
    //  value: dữ liệu lấy từ store
    categoryList: state.category.categories,
  };
};

export default connect(mapStateToProps)(Category);

// connect() => (function(Category) => <Component> <Category></Category></Component>)
