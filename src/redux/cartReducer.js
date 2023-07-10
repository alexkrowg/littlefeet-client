import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => (item.id === action.payload.id) && (item.selectedColor === action.payload.selectedColor) && (item.selectedSize === action.payload.selectedSize))
            item ? item.quantity += action.payload.quantity : state.products.push(action.payload)
        },
        removeItem: (state, action) => {
            state.products = state.products.filter(item => item.removeId !== action.payload)
            console.log(action.payload)
        },
        emptyCart: (state) => {
            state.products = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, emptyCart } = cartSlice.actions

export default cartSlice.reducer