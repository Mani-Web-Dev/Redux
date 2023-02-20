import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasksList: [],
    selectedTask: {}
}

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id }
            state.tasksList.push(task);

            console.log(task);
        },
        removeFromList: (state, action) => {
            state.tasksList.filter((task) => task.id !== action.payload.id);
        },
        updateTaskInList: (state, action) => {
            state.tasksList = state.tasksList.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                } else {
                    return task;
                }
            })
        },
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload;
            console.log(state.selectedTask);
        }
    }
})

export const { addTaskToList, removeFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions;

export default tasksSlice.reducer;