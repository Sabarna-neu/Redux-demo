import { ADD_TASK, DELETE_TASK, COMPLETED_TASK, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "./todoType"
const initialState = {
    items: [],
    users: {},
    error: '',
    loading:true
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: console.log("ADD item case called");
            return {
                ...state,
                items: [...state.items, { id: Math.random() * 10, value: action.payload, status: 0 }]
            }
        case COMPLETED_TASK: console.log("Completed task case called");
            for (let i of state.items) {
                if (i.id === action.payload) {
                    i.status = 1;
                }
            }
            return state;
        case DELETE_TASK: const filteredList = state.items.filter(item => item.id !== action.payload);
            state.items = filteredList;
            return { ...state, items: filteredList };

        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading:false,
            users: {...action.user}
        }
        case FETCH_USERS_FAILURE: return {
            ...state,
            loading:false,
            error: action.message
        }
        default: return state;
    }
}

export default todoReducer;