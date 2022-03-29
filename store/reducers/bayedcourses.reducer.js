import { BUY_COURSE } from "../actions/bayedcourses.action";

const INITIAL_STATE = {
    Data: []
  }

const BayedCoursesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case BUY_COURSE:
            return {...state,Data:action.Data}
        default:
            return state
    }
}

export default BayedCoursesReducer;