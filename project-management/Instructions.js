/**
 *  Instructions to create a redux app using redux and redux toolkit
 */

/**
 * Create a Store 
 * in the root folder
 */

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        // this contains the slices for the reducers
    }
})



/**
 * Add Provider component in App.js
 * And pass the global store object to the provider so that it is available accross the App
 */

import { Provider } from 'react-redux';
import { store } from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);



/**
 * Creating a slice
 * Slice is new method for managing reducer
 * In Redux, a "slice" refers to a specific portion of the global state that is managed by the Redux store.
 */

/**
 * Slice contains:
 *  1. Slice name
 *  2. Initial State
 *  3. Reducers
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
    selectedTask: {}
}

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        // Contains reducer functions(Logic to update the state) Example:
        addTaskToList: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload.id }
            state.tasksList.push(task);
        },
    }
});



/**
 * Then import the reducer into the store  as shown below
 */

import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasksSlice";

export const store = configureStore({
    reducer: {
        // All the reducers will come here
        tasks: tasksReducer
    }
})
