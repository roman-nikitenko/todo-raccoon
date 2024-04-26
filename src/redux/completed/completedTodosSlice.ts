import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../type/todo';

const initialState: Todo[] = [];


export const completedTodosSlice = createSlice({
  name:'completedTodos',
  initialState,
  reducers:{
    addToBin: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload)
    },
    setBinLocalStorage: (todos) => {
      localStorage.setItem('bin', JSON.stringify(todos))
    },
    getBinFromLocalStore: (todos, ) => {
      const todosFromStore = localStorage.getItem('bin')

      if (todosFromStore) {
        const binPars = JSON.parse(todosFromStore)
        return todos = binPars;
      } else {
        setBinLocalStorage();
      }
    },
    removeTodoFromBin: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload)
    }
  }
});

export const { addToBin, setBinLocalStorage, getBinFromLocalStore, removeTodoFromBin } = completedTodosSlice.actions

export default completedTodosSlice.reducer