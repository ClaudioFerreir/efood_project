import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../Pages/Home'

type CartState = {
  items: CardapioItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
