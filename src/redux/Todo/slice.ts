import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

export interface Todo {
  description: string;
  id: string;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        description: action.payload,
        id: nanoid(),
      });
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
