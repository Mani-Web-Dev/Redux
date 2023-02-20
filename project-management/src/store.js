import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";

export const store = configureStore({
    reducer: {
        // All the reducers will come here
        tasks: tasksReducer
    }
})