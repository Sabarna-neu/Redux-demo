import { ADD_ITEM, DELETE_TASK, COMPLETED_TASK, FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./todoType"
export const addItem = (value)=>{
    return {
        type: ADD_ITEM,
        payload:value
    }
}

export const deleteTask = (id)=>{
    return {
        type: DELETE_TASK,
        payload:id
    }
}

export const completedTask = (id)=>{
    return {
        type: COMPLETED_TASK,
        payload:id
    }
}

export const fetchUser = ()=>{
    return {
        type:FETCH_USERS
    }
}

export const fetchUserSuccess = ()=>{
    return {
        type:FETCH_USERS_SUCCESS
    }
}

export const fetchUserFailure = ()=>{
    return{
        type:FETCH_USERS_FAILURE
    }
}