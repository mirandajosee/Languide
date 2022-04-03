import { BUY_COURSE } from "../actions/bayedcourses.action";

const INITIAL_STATE = {
    Data: []
  }

const BayedCoursesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case BUY_COURSE:
            let newData=[]
            if (JSON.stringify(state.Data)==JSON.stringify([])) {newData=action.Data}
            if (state.Data==undefined) {newData=action.Data}
            else {newData=[...state.Data,...action.Data]}
            return {...state,Data:newData}
        default:
            return state
    }
}

export default BayedCoursesReducer;