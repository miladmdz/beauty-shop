import { createSlice } from '@reduxjs/toolkit'

export const widthSlice = createSlice({
  name: 'width',
  initialState: {
    value: window.innerWidth
  },
  reducers: {
    updateWidth:(state,action)=>{
        state.value=action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateWidth } = widthSlice.actions

export default widthSlice.reducer