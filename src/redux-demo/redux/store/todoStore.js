import { todoReducer } from "../reducer/todoSlice";
const { configureStore } = require("@reduxjs/toolkit");

const rootReducer = {todoReducer: todoReducer};
export const store = configureStore ({
    reducer: rootReducer,
});