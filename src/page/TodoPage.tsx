import React from 'react';
import { InputField } from '../components/InputField';
import { TodoList } from '../components/TodoList';

export const TodoPage: React.FC = () => {
  return (
    <>
      <InputField />
      <TodoList />
    </>
  );
};
            