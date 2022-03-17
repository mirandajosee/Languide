import CoursesList from "../../Components/Search/Courses";
import { FILTERS } from "../../data/filters";
import { FILTER_ITEMLIST, selectFilter } from "../actions/itemlist.action";

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
            if (action.filterID==""){return {...state,list: CoursesList,SelectedFilter: "Cursos"}}
            const newList = CoursesList.filter(function(item) {return item.language==state.filters[index].title})
            return {
                ...state,
                SelectedFilter: state.filters[index].title,
                list:newList
            }
        default: 
            return state;}
}

export default ItemListReducer;