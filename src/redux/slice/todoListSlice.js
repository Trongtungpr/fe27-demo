import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientServer } from "../../server/clientServer";


export const fetchTodoList = createAsyncThunk(
    "todoList/fetchTodoList", 
    async (payload, thunkAPI) => {
    const response = await clientServer.get("todoItems");
    return response.data; 
});

export const addTodoItemAsync = createAsyncThunk(
    "todoList/addTodoItemAsync",
    async(payload, thunkAPI) => {
        const response = await clientServer.post("todoItems", payload);
        thunkAPI.dispatch(fetchTodoList());
        return response.data;
    }
);

export const todoListSlice = createSlice({
    name: "todoList",
    initialState: {
        loading: false,
        loadingAddTodoItem: false,
        data: [],
        error: null,
        addTodoItemError: null,
    },
    reducers: {
        setTodoList: (state, action) => {
            state.data = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodoList.pending, (state, action) => {
            state.loading = true;
        });
        // "todoList/fetchTodoList/fulfiller"
        builder.addCase(fetchTodoList.fulfilled, (state,action)=> {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchTodoList.rejected, (state, action) => {
            state.error = action.error;
            state.loading = false;
        });
        //"todoList/addTodoItemAsync/pending" => action type
        builder.addCase(addTodoItemAsync.pending, (state, action) => {
            state.loadingAddTodoItem = true;
        });
        //"todoList/addTodoItemAsync/fulfiller" => action type
        builder.addCase(addTodoItemAsync.fulfilled, (state, action) => {
            state.loadingAddTodoItem = false;
            // state.data = [action, ...state.data];
        });
        //"todoList/addTodoItemAsync/rejected" => action type
        builder.addCase(addTodoItemAsync.rejected, (state, action) => {
            state.loadingAddTodoItem = false;
            state.addTodoItemError = action.addTodoItemError
        });
    },
});

// export const {} = todoListSlice.actions;
export const todoListReducer = todoListSlice.reducer;