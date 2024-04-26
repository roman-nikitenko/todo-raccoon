import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../type/todo';

const initialState: Todo[] = [];


export const completedTodosSlice = createSlice({
  name:'completedTodos',
  initialState,
  reducers:{
    addToCompleted: (todos, action: PayloadAction<Todo>) => {
      todos.push(action.payload)
    },
    setCompletedLocalStorage: (todos) => {
      localStorage.setItem('bin', JSON.stringify(todos));
    },
    getCompletedFromLocalStore: (todos, ) => {
      const todosFromStore = localStorage.getItem('bin');

      if (todosFromStore) {
        const binPars = JSON.parse(todosFromStore)
        
        return todos = binPars;
      } else {
        setCompletedLocalStorage();
      }
    },
    removeTodoFromCompleted: (state, action: PayloadAction<number>) => {
      return state.filter(todo => todo.id !== action.payload)
    }
  }
});

export const { removeTodoFromCompleted,getCompletedFromLocalStore, setCompletedLocalStorage, addToCompleted } = completedTodosSlice.actions

export default completedTodosSlice.reducer