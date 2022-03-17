import { createStore, combineReducers } from 'redux';
import CourseReducer from './reducers/courses.reducer';
import ItemListReducer from './reducers/itemlist.reducer';

const RootReducer = combineReducers({
  //categories: CategoryReducer,
  courses: CourseReducer,
  itemlist: ItemListReducer,
})

export default createStore(RootReducer);