import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './TodoReducer';

export default configureStore({
    reducer:{
        todo:todoReducer
    }
})