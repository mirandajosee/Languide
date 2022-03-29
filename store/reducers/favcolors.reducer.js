import CoursesList from "../../Components/Search/Courses";
import {CHANGE_FAV} from "../actions/favcolors.action";

let initialValue={}
for (const item of CoursesList) {
        initialValue={...initialValue,[item.id] : item.isFav? ("red"):("white")}
    }

const INITIAL_STATE = {
  Dictionary: initialValue
}

const FavColorReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CHANGE_FAV:
            const newValue = {...state.Dictionary,[action.course.id]: action.course.isFav? ("red"):("white")}
            return ({...state,Dictionary: newValue})
        default:
            return state
    }
}

export default FavColorReducer;