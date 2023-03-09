import { createAsyncThunk } from '@reduxjs/toolkit'
import { getBasketRequest } from '../../lib/constans/mealServis'

export const getBasket = createAsyncThunk(
    'basket/getBasket',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { token } = getState().auth

            const { data } = await getBasketRequest(token)
            return data.data.items
        } catch (error) {
            return rejectWithValue('something went wrong getBasket ')
        }
    }
)
