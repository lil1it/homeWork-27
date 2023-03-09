/// USER: /foods GET
/// ADMIN: // foods GET
// foods/ post body: {title, description, price : number} ?// header: {authorization}
// foods/:id PUT body: {title, description, price : number} ?// header: {authorization}
// foods/:id get

// /orders post body: {totalPrice: number}

// get orders /orders get my orders
// */
//  get orders/all for admin

import { axiosInstace } from '../axiosInstace'

export const getBasketRequest = (token) => {
    return axiosInstace.get('/basket', { headers: { Authorization: token } })
}

export const addMealRequest = (token, data) => {
    return axiosInstace.post('/foods', data, {
        headers: { Authorization: token },
    })
}
export const getMealsAdminRequest = () => {
    return axiosInstace.get('/foods')
}

export const deleteMealRequest = (token, id) => {
    return axiosInstace.delete(`/foods/${id}`, {
        headers: { Authorization: token },
    })
}

export const getOneMealRequest = (token, id) => {
    return axiosInstace.get(`/foods/${id}`, {
        headers: { Authorization: token },
    })
}

export const updateMealRequest = (token, data) => {
    return axiosInstace.put(`/foods/${data.id}`, data, {
        headers: { Authorization: token },
    })
}

export const addToBasketRequest = (token, newItem) => {
    return axiosInstace.post(
        `foods/${newItem.id}/addToBasket`,
        { amount: newItem.amount },
        {
            headers: { Authorization: token },
        }
    )
}

export const updeteBasketItemRequest = (id, amount, token) => {
    return axiosInstace.put(
        `basketItem/${id}/update`,
        { amount },
        {
            headers: { Authorization: token },
        }
    )
}
export const deleteBasketItemRequest = (id, token) => {
    return axiosInstace.delete(`/basketItem/${id}/delete`, {
        headers: { Authorization: token },
    })
}
