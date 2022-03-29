import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CartReducer from './reducers/cart.reducer';
import CourseReducer from './reducers/courses.reducer';
import ItemListReducer from './reducers/itemlist.reducer';
import FavColorReducer from './reducers/favcolors.reducer';
import OrderReducer from './reducers/order.reducer';
import AuthReducer from './reducers/auth.reducer';
import BayedCoursesReducer from './reducers/bayedcourses.reducer';

const RootReducer = combineReducers({
  courses: CourseReducer,
  itemlist: ItemListReducer,
  cart: CartReducer,
  favcolor: FavColorReducer,
  orders:OrderReducer,
  auth:AuthReducer,
  buy:BayedCoursesReducer
})

export default createStore(RootReducer,applyMiddleware(thunk));