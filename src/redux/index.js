import { configureStore } from "@reduxjs/toolkit";
import { todoListReducer } from "./slice/todoListSlice";

const rootReducer = {
    todoListReducer: todoListReducer,
};
//nhận 1 cái obj
export const appStore = configureStore({
    reducer: rootReducer,
});