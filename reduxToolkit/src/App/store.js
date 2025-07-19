import { conigureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/todoslice';



export const store = conigureStore({
    reducer:todoReducer
})