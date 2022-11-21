import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentDetailAction } from "./redux/action";

export class StudentList extends Component {
  fetchStudentDetail = async (id) => {
    this.props.dispatch(fetchStudentDetailAction(id)) 
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h4>Student List</h4>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Full name</th>
                <th>Email</th>
                <th>Dob</th>
                <th>Course</th>
                <th>GPA</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!this.props.isLoading &&
                this.props.students.map((item) => {
                  const {
                    studentId,
                    fullName,
                    email,
                    dob,
                    course,
                    math,
                    physic,
                    chemistry,
                  } = item;
                  return (
                    <tr key={studentId}>
                      <td>{studentId}</td>
                      <td>{fullName}</td>
                      <td>{email}</td>
                      <td>{dob}</td>
                      <td>{course}</td>
                      <td>{(math + physic + chemistry) / 3}</td>
                      <td>
                        <button className="btn btn-danger me-3"> Delete</button>
                        <button
                          className="btn btn-info me-3"
                          onClick={() => {
                            this.fetchStudentDetail(studentId);
                          }}
                        >
                          {" "}
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {this.props.isLoading && (
            <div className="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.student.studentList,
    isLoading: state.student.isLoading,
  };
};

export default connect(mapStateToProps)(StudentList);
