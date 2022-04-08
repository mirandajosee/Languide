import { SIGNUP_API_URL,SIGNIN_API_URL } from "../../Constants/Database";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const GET_USER = "GET_USER";
import { loadUser } from "../../data/localdatabase";
import { insertUser } from "../../data/localdatabase";

export const signUp = (email, password) => {
  return async dispatch => {
    try{
    const response = await fetch(SIGNUP_API_URL, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      })
    });
    const data = await response.json();
    const result = await insertUser(
      data.idToken,
      data.localId
  )
    dispatch({
      type: SIGN_UP,
      token: data.idToken,
      userId: data.localId,
    });
    }catch (error) {
    console.log(error.message)
  }
}}

export const signIn = (email,password) =>{
    return async dispatch => {
        const response = await fetch(SIGNIN_API_URL, {
            method: 'POST',
            header: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
              returnSecureToken: true,
            })
          });
        const data = await response.json();
        const result = await insertUser(
        data.idToken,
        data.localId
        )
        dispatch({
            type: SIGN_IN,
            token: data.idToken,
            userId: data.localId,
          })

    }
}

export const getUser = () => {
  return async dispatch => {
      try {
          const result = await loadUser()
          if (result.rows._array[0]==undefined){
            dispatch({
              type: GET_USER,
              userData: [],
          })
          }
          dispatch({
              type: GET_USER,
              userData: result.rows._array,
          })
      } catch(error) {
          throw error
      }
  }
}