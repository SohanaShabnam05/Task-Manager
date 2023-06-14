import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../redux/action';

const TaskForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTask(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
  return (
    <form className='form' onSubmit={onFormSubmit}>
        <input 
            placeholder='Enter New Task...'
            className='input'
            onChange={onInputChange}
            value={text}
        />
    </form>
  )
}

export default TaskForm;
