import { configureStore } from '@reduxjs/toolkit'
import widthReducer from './slice'

export const store= configureStore({
  reducer: {
    width:widthReducer
  }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch