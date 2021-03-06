import { SIGN_UP } from '../actions/auth.action';
import { SIGN_IN } from '../actions/auth.action';
import { GET_USER } from '../actions/auth.action';
const INITIAL_STATE = {
  token: null,
  userId: null,
}

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      }
    case SIGN_IN:
        return {
            ...state,
            token: action.token,
            userId: action.userId,
        }
    case GET_USER:
      if (JSON.stringify(action.userData)==JSON.stringify([])) {
        return state
      }
      return {
        ...state,
        token:action.userData[0].token,
        userId:action.userData[0].LocalUserId,
      }
    default:
      return state;
  }
}

export default AuthReducer;