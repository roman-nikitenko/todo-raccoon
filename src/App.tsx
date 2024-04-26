import React from 'react';
import { SelectorList } from './components/SelectorList';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './customHook/redux';
import { getTodosFromLocalStore } from './redux/todo/todoSlice';
import { getCompletedFromLocalStore } from './redux/completed/completedTodosSlice';

function  App() {
  const dispatch = useAppDispatch()
  
  dispatch(getTodosFromLocalStore());
  dispatch(getCompletedFromLocalStore());
  
  return (
    <div className="todo-list-container">
      <SelectorList />
      <Outlet />
    </div>
  );
}

export default App;
