import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        items:[],
        editItem : []
    },
    reducers:{
        addItem:(state,action)=>{
            state.items= [...state.items,{id:Math.random()*10,value:action.payload, status:0}]
        },
        completedTask: (state,action)=>{
            for(let i of state.items){
                if(i.id === action.payload){
                    i.status = 1;
                }
            }
        },
        deleteTask : (state,action)=>{
            const filteredList = state.items.filter(item=> item.id !== action.payload);
            state.items = filteredList;
        }
    }
})

export const {addItem, completedTask, deleteTask} = todoSlice.actions
export default todoSlice.reducer;
 