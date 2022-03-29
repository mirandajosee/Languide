import { API_URL } from "../../Constants/Database";

export const GET_ORDERS = 'GET_ORDERS';

export const getOrders = () => {
  return async dispatch => {
    try {
      dispatch({
        type: GET_ORDERS,
        status: 'loading',
        payload:[]
      })

      const response = await fetch(`${API_URL}/ordenes.json`)

      const result = await response.json();

      const orders = Object.keys(result).map(key => ({
        ...result[key],
        id: key,
      }))
      dispatch({
        type: GET_ORDERS,
        payload: orders,
        status: 'success',
      })
    } catch (error) {
      console.log(error.message)
      dispatch({
        type: GET_ORDERS,
        status: 'error',
        payload:[]
      })
    }
  }
}