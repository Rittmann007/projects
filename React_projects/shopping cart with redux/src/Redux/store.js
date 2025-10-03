import { configureStore } from '@reduxjs/toolkit'
import cartdatareducer from './dataslice'

export const store = configureStore({
  reducer: {
    cartdata: cartdatareducer,
  },
})