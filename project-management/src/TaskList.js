import React, { useState } from 'react'
import { Box, Button, IconButton, TextField } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateTask from './UpdateTask';
import { useSelector, useDispatch } from 'react-redux';

import { setSelectedTask } from './slices/tasksSlice';



const TaskList = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const { tasksList } = useSelector(state => state.tasks);

    const dispatch = useDispatch();



    const updateTask = (task) => {
        handleClickOpen();
        dispatch(setSelectedTask(task))
        console.log("You have selected this task", task);
    }



    return (
        <div className="data mt-10">
            <table className="table-auto w-full text-left">
                <thead>
                    <tr className="text-black">
                        <th className="border border-gray-300 px-4 py-4">Id</th>
                        <th className="border border-gray-300 px-4 py-4">Task</th>
                        <th className="border border-gray-300 px-4 py-4">Description</th>
                        <th className="border border-gray-300 px-4 py-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksList && tasksList.map((task, index) => {
                            return (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-4">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-4">{task.title}</td>
                                    <td className="border border-gray-300 px-4 py-4">{task.description}</td>
                                    <td className='border border-gray-300 px-4'>
                                        <IconButton onClick={updateTask.bind(this, task)}>
                                            <EditIcon className='cursor-pointer' size="medium" sx={{ fontSize: 23, color: "#1976d2" }} />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteForeverIcon className='cursor-pointer' sx={{ fontSize: 23, color: "#1976d2" }} />
                                        </IconButton>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {open && <UpdateTask handleClickOpen={handleClickOpen} handleClose={handleClose} />}
        </div>
    )
}

export default TaskList;