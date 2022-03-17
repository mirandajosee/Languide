import CoursesList from "../../Components/Search/Courses";

const INITIAL_STATE = {
  list: CoursesList,
  selected: null,
  filteredList: [],
}

const CourseReducer = (state = INITIAL_STATE, action) => {
  return state;
}

export default CourseReducer;