import React, { Component } from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import axios from "axios"
import { connect } from "react-redux";


export class Home extends Component {
      fetchStudent = async () => {
       try {
        this.props.dispatch({
          type: "student/ShowLoading",
        })
        const res = await axios({
            method: "GET",
            url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students?fbclid=IwAR3W32Dvi-tnY9SE0iKYOrc7uPOXtUJqXxyc76_ROdEp3hsX818FvoN23nQ"
            
        });
       this.props.dispatch({
        type:"student/setStudentList",
        payload: res.data,
       })
       } catch (error) {
        console.log(error);
       } finally {
        this.props.dispatch({
          type: "student/hideLoading",
        });
       }
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
