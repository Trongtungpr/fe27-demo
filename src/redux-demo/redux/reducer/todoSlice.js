import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: 'todo', 
    initialState: {
        data: [],
    },
    reducers: {
    getTodoList: (state, action) => {},
    addNewTodo: (state, action) => {
        //gắn trực tiếp giá trị mới vào biến state.data
        //thực sự thì đây nhìn giuongs như 1 phép gắn nhưng redux/toolskit
       //đã xử lý phần copy data dể không bị trùng vùng nhớ
        state.data = [action.payload, ...state.data]
    },
    updateTpdpItem :(state, action) => {},
    deleteTodo:(state, action) => {
        const newList = [...state.data]
        newList.splice(action.payload,1)
        console.log(action.payload);
        state.data = newList
    },
    },
});

export const { getTodoList, addNewTodo, updateTodoItem, deleteTodo } =
  todoSlice.actions;

export const todoReducer = todoSlice.reducer;