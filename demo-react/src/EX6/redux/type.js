const sliceName = "student";

// 
// export const actionType = {
//     SHOW_LOADING: `${sliceName}/showLoading`,
//     HIDE_LOADING: `${sliceName}/hideLoading`,
//     SET_STUDENT_LIST: `${sliceName}/setStudentList`,
// } 

export const actionType = {
    SHOW_LOADING: `${sliceName}/showLoading`,
    HIDE_LOADING: `${sliceName}/hideLoading`,
    SET_STUDENT_LIST: `${sliceName}/setStudentList`,
    SET_SELECTED_STUDENT: `${sliceName}/setSelectedStudent`,
} 



//  Object.keys = ["SHOW_LOADING","HIDE_LOADING", "SET_STUDENT_LIST"]

// Object.keys(actionType).forEach((key) => {
//     actionType[key] = sliceName + "/" + actionType[key];
// } );

// console.log(actionType);

// export default actionType;