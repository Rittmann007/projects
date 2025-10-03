import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const dataslice = createSlice({
  name: 'cartdata',
  initialState,
  reducers: {
    addtocart : (state,action)=> {
        state.value.push(action.payload)
    },
    remove : (state,action) => {
      state.value =  state.value.filter((item)=>item.id != action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addtocart,remove } = dataslice.actions

export default dataslice.reducer