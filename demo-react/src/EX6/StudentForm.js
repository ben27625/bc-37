import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

export class StudentForm extends Component {
  state = {
    formData: {
      fullName: "",
      studentId: "",
      email: "",
      dob: "",
      course: "",
      math: "",
      physic: "",
      chemistry: "",
    },
  };

  // props đổi state thay đổi
  // lifecycle chạy khi component được update

  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      !nextProps.selectedStudent ||
     currentState.formData.selectedStudent ===
        nextProps.selectedStudent.studentId
    ) {
      return currentState;
    }
    return {
      formData: nextProps.selectedStudent,
    };
  }

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
    console.log([e.target.name], e.target.value);
  };

  handleSubmit = async (e) => {


    // console.log(this.state.formData)
    e.preventDefault();

    if(this.props.selectedStudent) {
      // call api update
      // call api fetch student List
      // dispatch action lên store để reset 
    }
    // block event default action
    try {
      await axios({
        method: "POST",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students?fbclid=IwAR3W32Dvi-tnY9SE0iKYOrc7uPOXtUJqXxyc76_ROdEp3hsX818FvoN23nQ",
        data: this.state.formData,
      });
      this.props.fetchStudent();
    } catch (error) {
      console.log(error);
    }
    //
  };

  render() {
    return (
      <div>
        <div className="card-body">
          <form
            onSubmit={this.handleSubmit}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}
          >
            <input
              onChange={this.handleChange}
              value={this.state.formData.fullName}
              name="fullName"
              type="text"
              className="form-control"
              placeholder="Full name"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.studentId}
              name="studentId"
              type="text"
              className="form-control"
              placeholder="Student ID "
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.email}
              name="email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.dob}
              name="dob"
              type="date"
              className="form-control"
              placeholder=""
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.course}
              name="course"
              type="text"
              className="form-control"
              placeholder="course"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.math}
              name="math"
              type="text"
              className="form-control"
              placeholder="math"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.physic}
              name="physic"
              type="text"
              className="form-control"
              placeholder="physic"
            />
            <input
              onChange={this.handleChange}
              value={this.state.formData.chemistry}
              name="chemistry"
              type="text"
              className="form-control"
              placeholder="chemistry"
            />
            <button className="btn btn-success">Submit </button>
            <button className="btn btn-success">Cancel </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStudent: state.student.selectedStudent,
  };
};

export default connect(mapStateToProps)(StudentForm);
