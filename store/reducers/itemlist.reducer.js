import CoursesList from "../../Components/Search/Courses";
import { FILTERS } from "../../data/filters";
import { FILTER_ITEMLIST, SEARCH_ACTION } from "../actions/itemlist.action";

const INITIAL_STATE = {
  list: CoursesList,
  filters: FILTERS,
  SelectedFilter: "Cursos",
}

const ItemListReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case FILTER_ITEMLIST:
            const index = state.filters.findIndex(cat => cat.id === action.filterID)
            switch (action.filterID){
                case "":
                    return {...state,list: CoursesList,SelectedFilter: "Cursos"}
                case "Fav":
                    return {...state,list: CoursesList.filter(function(item) {return item.isFav==true}),SelectedFilter: "Cursos"}
                default: break
            }
            const newList = CoursesList.filter(function(item) {return item.language==state.filters[index].title})
            return {
                ...state,
                SelectedFilter: state.filters[index].title,
                list:newList
            }
        
        case SEARCH_ACTION:
            if (action.textInput=="" ||action.textInput==undefined ) {return state}
            const localList = state.list
            return {
                ...state,
                list:localList.filter(function(item) {return item.value.toUpperCase().trim().includes(action.textInput.toUpperCase().trim())})
            }
        default: 
            return state;}
}

export default ItemListReducer;