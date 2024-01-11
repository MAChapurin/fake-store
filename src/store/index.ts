import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productSlice'


const store = configureStore({
  reducer: {
    products
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
