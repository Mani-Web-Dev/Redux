import React, { useState } from 'react'
import { Box, Button, IconButton, TextField } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateTask from './UpdateTask';

const TaskList = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                    <tr>
                        <td className="border border-gray-300 px-4 py-4">1</td>
                        <td className="border border-gray-300 px-4 py-4">Task One</td>
                        <td className="border border-gray-300 px-4 py-4">Description One</td>
                        <td className='border border-gray-300 px-4'>
                            <IconButton onClick={handleClickOpen}>
                                <EditIcon className='cursor-pointer' size="medium" sx={{ fontSize: 23, color: "#1976d2" }} />
                            </IconButton>
                            <IconButton>
                                <DeleteForeverIcon className='cursor-pointer' sx={{ fontSize: 23, color: "#1976d2" }} />
                            </IconButton>
                        </td>
                    </tr>
                </tbody>
            </table>
            {open && <UpdateTask handleClickOpen={handleClickOpen} handleClose={handleClose} />}
        </div>
    )
}

export default TaskList