import { API_URL } from "../../Constants/Database";

export const ADD_ITEM="ADD_ITEM";
export const REMOVE_ITEM="REMOVE_ITEM";
export const CONFIRM_CART="CONFIRM_CART";

export const addItem = item => ({
    type: ADD_ITEM,
    item,
})

export const removeItem = itemID => ({
    type: REMOVE_ITEM,
    itemID,
})

export const confirmCart = (payload,total,userId) => {
    return async dispatch => {
        try{
            const response = await fetch(`${API_URL}/ordenes.json`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  date: Date.now(),
                  userId,
                  items: payload,
                  total,
                })
              });
            
              // Recibir los resultados de la petición
            const result = await response.json();

            // Continuar el flujo llamando a dispatch
            dispatch({
                type: CONFIRM_CART,
                status: 'success',
            })
            } catch (error) {
            console.log(error.message)
            dispatch({
                type: CONFIRM_CART,
                status: 'error',
                error: error.message,
            })
        }
    }
}