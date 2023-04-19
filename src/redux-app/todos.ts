import { v4 } from "uuid"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface ToDo {
  id: string
  message: string
  completed: boolean
}

const toDos = createSlice({
  name: "toDos",
  initialState: [] as ToDo[],
  reducers: {
    addToDo: (state, action: PayloadAction<string>) => {
      state.push({ id: v4(), message: action.payload, completed: false })
      return state
    },
    deleteToDo: (state, action: PayloadAction<string>) =>
      state.filter((todo) => todo.id !== action.payload),
    completeToDo: (state, action: PayloadAction<string>) => {
      const completedToDo = state.find((todo) => todo.id === action.payload)

      if (completedToDo) {
        completedToDo.completed = Boolean(!completedToDo.completed)
      }
      return state
    },
    sort: (state) => state.sort((a, b) => a.message.localeCompare(b.message))
  }
})

export const { addToDo, deleteToDo, completeToDo, sort } = toDos.actions

export default toDos
