import { configureStore,createAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import thunk from 'redux-thunk'
import LoginSlice from './Slices/LoginSlice'
import NewPasswordInitializationSlice from './Slices/NewPasswordInitializationSlice'
// ...
const store = configureStore({
  reducer: {
    Login:LoginSlice,
    NewPassword:NewPasswordInitializationSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        // correctly typed middlewares can just be used
        thunk,
      )
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store