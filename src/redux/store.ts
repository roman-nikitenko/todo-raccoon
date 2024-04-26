import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todo/todoSlice';
import completedTodoSlice from './completed/completedTodosSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    completedTodos: completedTodoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch