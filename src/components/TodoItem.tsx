import React, { FC, useEffect, useRef, useState } from 'react';
import { Todo } from '../type/todo';
import pencilSvg from '../assets/pencil.svg';
import completedSvg from '../assets/done.svg';
import { addToCompleted, setCompletedLocalStorage } from '../redux/completed/completedTodosSlice';
import { editTodo, removeTodo, setLocalStorage } from '../redux/todo/todoSlice';
import { useAppDispatch } from '../customHook/redux';

type Props = {
  todo: Todo
}

export const TodoItem: FC<Props> = ({ todo }) => {
  const [editeField, setEditField] = useState<string>('')
  const [editMode, setEditMode] = useState<boolean>(false)
  
  const inputRef = useRef<HTMLInputElement>(null);
  
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    inputRef.current?.focus();
  }, [editMode])

  const removeHandler = (todo: Todo) => {
    dispatch(addToCompleted(todo));
    dispatch(removeTodo(todo.id));
    dispatch(setCompletedLocalStorage());
    dispatch(setLocalStorage());
  };

  const editHandler = (todo: Todo) => {
    setEditField(todo.todo)
    setEditMode(true)
  };
  
  const closeEditHandler = () => {
    dispatch(editTodo({ idTodo: todo.id, newTitle: editeField }));
    setEditMode(false);
    dispatch(setLocalStorage());
  };
  
  return (
    <>
      { editMode ? 
        <input 
          ref={inputRef}
          className="edit-input" 
          type='text'
          value={ editeField }
          onBlur={closeEditHandler}
          onChange={(e) => setEditField(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') closeEditHandler();
          }}
        />
          : (
        <div className="item">
          { todo.todo }
        </div>
      ) }
      <div className='navigation'>
        <button onClick={() => editHandler(todo)}>
          <img src={pencilSvg} alt='edit button' />
        </button>
        <button onClick={() => removeHandler(todo)}>
          <img src={completedSvg} alt='delete button' />
        </button>
      </div>
    </>
  );
}