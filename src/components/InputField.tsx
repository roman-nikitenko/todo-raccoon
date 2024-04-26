import React, { useEffect, useId, useRef, useState } from 'react';
import { useAppDispatch } from '../customHook/redux';
import { setLocalStorage, setTodo } from '../redux/todo/todoSlice';
import { Todo } from '../type/todo';

export const InputField: React.FC = () => {
  const [todoField, setTodoField] = useState<string>('');
  const [error, setError] = useState<boolean>(false)
  const dispatch = useAppDispatch();
  
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    inputRef.current?.focus();  
  }, [])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setTodoField(e.target.value)
  };

  const clickHandler = () => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000),
      todo: todoField,
    }

    if (!todoField.trim()) {
      setError(true)
      return
    }

    dispatch(setTodo(newTodo));
    setTodoField('');
    dispatch(setLocalStorage());
  }
  
  return (
    <div className="todo-list-container-input">
      <input
        ref={inputRef}
        className={`${error && 'error'}`} 
        placeholder="Please enter todo"
        type="text"
        value={todoField}
        onChange={changeHandler}
        onKeyPress={(e) => {
        if (e.key === 'Enter') clickHandler()
      }}/>
      <button type="button" onClick={clickHandler}>Add</button>
    </div>
  );
};
