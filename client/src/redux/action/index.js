import axios from 'axios';

import { ADDNEW_TASK, GETALL_TASK, TOGGLE_TASK, UPDATE_TASK, DELETE_TASK, TOGGLE_TAB } from './type';

const API_URL = 'http://localhost:8000';

export const addNewTask = (data) => async (dispatch)=> {
    try {
     const res = await axios.post(`${API_URL}/tasks`, { data });

     dispatch({ type: ADDNEW_TASK, payload: res.data});
    } catch (error) {
        console.log('Error while calling addNewTask API', error.message);
    }


}

export const getAllTasks = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/tasks`);
   
       dispatch({ type: GETALL_TASK, payload: res.data});
       } catch (error) {
           console.log('Error while calling getALLTasks API', error.message);
       }
   
}

export const toggleTask = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);

        dispatch({ type: TOGGLE_TASK , payload: res.data });
    } catch (error) {
        console.log('Error while calling getAllTodos API ', error.message);
    }
}

export const updateTask = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/tasks/${id}`, { data });

        dispatch({ type: UPDATE_TASK , payload: res.data });
    } catch (error) {
        console.log('Error while calling updateTodo API ', error.message);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/tasks/${id}`);

        dispatch({ type: DELETE_TASK , payload: res.data });
    } catch (error) {
        console.log('Error while calling deleteTodo API ', error.message);
    }
}

export const toggleTab = (tab) => async (dispatch) => {
    dispatch({ type: TOGGLE_TAB, selected: tab })
}
