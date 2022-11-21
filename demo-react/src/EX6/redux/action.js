import axios from "axios"
import actionType  from "./type";


//  async action 
export const fetchStudentsAction = async (next) => {
    try {
        next({
          type: actionType.SHOW_LOADING,
        })

        // side-effect / action gián tiếp ảnh hưởng tới state

        const res = await axios({
            method: "GET",
            url: process.env.REACT_APP_API_URL + "",
            
        });
       next({
        type:actionType.SET_STUDENT_LIST,
        payload: res.data,
       })
       } catch (error) {
        console.log(error);
       } finally {
        next({
          type: actionType.HIDE_LOADING,
        });
       } 
}

export const fetchStudentDetailAction = (id) => {
    return  async (next) => {
        try {
            const res = await axios({
              method: "GET",
              url:
                "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/students?fbclid=IwAR3W32Dvi-tnY9SE0iKYOrc7uPOXtUJqXxyc76_ROdEp3hsX818FvoN23nQ" +id,
            });
            console.log(res.data)
            next({
              type: actionType.SET_SELECTED_STUDENT,
              payload: res.data,
            });
          } catch (error) {
            console.log(error);
          }
    }
}