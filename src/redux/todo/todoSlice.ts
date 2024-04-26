import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../type/todo';

const initialState: Todo[] = [];


export const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
    setLocalStorage: (todos) => {
      localStorage.setItem('todos', JSON.stringify(todos))
    },
    getTodosFromLocalStore: (todos, ) => {
      const todosFromStore = localStorage.getItem('todos')
      
      if (todosFromStore) {
        const todosPars = JSON.parse(todosFromStore)
        return todos = todosPars;
      } else {
        setLocalStorage();
      }
    },
    setTodo: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload);
    },
    removeTodo: (todos, action: PayloadAction<number>) => {
      return todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ idTodo: number, newTitle: string }>) => {
      state.map(todo => todo.id === action.payload.idTodo ? todo.todo = action.payload.newTitle : todo)
    }
  }
});

export const { setTodo, removeTodo, setLocalStorage, getTodosFromLocalStore, editTodo } = todoSlice.actions

export default todoSlice.reducer