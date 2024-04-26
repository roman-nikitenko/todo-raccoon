import React from 'react';
import { CompletedList } from '../components/CompletedList';
import { useAppSelector } from '../customHook/redux';

export const CompletedPage: React.FC = () => {
  const { completedTodos } = useAppSelector(state => state)
  
  if (completedTodos.length === 0) {
    return <h2>Completed list is empty</h2>
  }
  
  return (
    <CompletedList />
  );
};
