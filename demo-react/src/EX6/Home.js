import React, { Component } from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import { connect } from "react-redux";
import { fetchStudentsAction } from './redux/action';

export class Home extends Component {
      fetchStudent = async () => {
        this.props.dispatch(fetchStudentsAction)
     } 


  render() {
    return (
      <div>
        <h1 className='text-center'>Student Management</h1>
        <StudentForm fetchStudent= {this.fetchStudent}/>
        <StudentList/>
      </div>
    )
  }

  componentDidMount() {
    this.fetchStudent();
  }
}

export default connect() (Home);
