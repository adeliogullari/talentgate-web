import { configureStore } from '@reduxjs/toolkit'
import  loginReducer  from '@/app/login/_lib/slice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      loginReducer: loginReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']