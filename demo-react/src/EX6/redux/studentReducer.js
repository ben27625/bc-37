import { actionType } from "./type";

const initialState = {
  studentList: [],
  isLoading: false,
  selectedStudent: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_STUDENT_LIST:
      state.studentList = action.payload;
      return { ...state };

    case actionType.SHOW_LOADING:
      state.isLoading = true;
      return { ...state };

    case actionType.HIDE_LOADING:
      state.isLoading = false;
      return { ...state };

    case actionType.SET_SELECTED_STUDENT:
      state.selectedStudent = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
