import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  TypedUseSelectorHook,
  useSelector as useSelectorDefault,
  useDispatch as useDispatchDefault
} from "react-redux"

import todos from "./todos"

const reducer = combineReducers({
  todos: todos.reducer
})

export const store = configureStore({
  reducer: {
    todos: todos.reducer
  }
})

export type Reducer = ReturnType<typeof reducer>

export type Dispatch = typeof store.dispatch

export const useDispatch = () => useDispatchDefault<Dispatch>()

// other posibilities
// export const useDispatch: () => Dispatch = useDispatchDefault
// export const useDispatch = () => useDispatchDefault<typeof store.dispatch>()
//

export type State = ReturnType<typeof store.getState>

export const useSelector: TypedUseSelectorHook<State> = useSelectorDefault
