import React, { Component } from "react";
import axios from "axios";
import {connect} from "react-redux"

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
  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.name },
    });
  };

  handlleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students?fbclid=IwAR3W32Dvi-tnY9SE0iKYOrc7uPOXtUJqXxyc76_ROdEp3hsX818FvoN23nQ",
        data: this.state.formData,
      });
      this.props.fetchStudent();
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    return (
      <div>
        <div className="card-body">
          <form
            onSubmit={this.handlleSubmit}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}
          >
            <input
              onChange={this.handleChange}
              name="fullName"
              type="text"
              className="form-control"
              placeholder="Full name"
            />
            <input
              onChange={this.handleChange}
              name="studentId"
              type="text"
              className="form-control"
              placeholder="Student ID "
            />
            <input
              onChange={this.handleChange}
              name="email"
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <input
              onChange={this.handleChange}
              name="dob"
              type="date"
              className="form-control"
              placeholder=""
            />
            <input
              onChange={this.handleChange}
              name="course"
              type="text"
              className="form-control"
              placeholder="course"
            />
            <input
              onChange={this.handleChange}
              name="math"
              type="text"
              className="form-control"
              placeholder="math"
            />
            <input
              onChange={this.handleChange}
              name="physic"
              type="text"
              className="form-control"
              placeholder="physic"
            />
            <input
              onChange={this.handleChange}
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
  
}

export default connect() (StudentForm);
