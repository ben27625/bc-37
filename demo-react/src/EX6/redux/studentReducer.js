const initialState = {
  studentList: [],
  isLoading: false,
  selectedStudent: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "student/setStudentList":
      state.studentList = action.payload;
      return { ...state };

    case "student/showLoading":
      state.isLoading = true;
      return { ...state };

    case "student/hideLoading":
      state.isLoading = false;
      return { ...state };
      case "student/setSelectedStudent":
        state.selectedStudent = action.payload;
        return {...state}
    default:
      return state;
  }
};

export default reducer;
