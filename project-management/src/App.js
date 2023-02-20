

import { useState } from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


import TaskList from './TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToList } from './slices/tasksSlice';

function App() {

  const dispatch = useDispatch();

  const { tasksList } = useSelector((state) => state.tasks);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTasksHandler = (event) => {
    event.preventDefault();
    dispatch(addTaskToList({ title, description }));
    setTitle("");
    setDescription("");
  }



  return (
    <div className="App text-center max-w-7xl mx-auto">
      <div className="header  p-5 bg-gray-100">
        <Typography variant="h4" className='text-blue-500'>
          Product Management
        </Typography>
        <p className='mt-3 font-light'>{`Currently ${tasksList.length} task(s) pending`}</p>
      </div>
      <div className="content p-6">

        <TextField onChange={(e) => setTitle(e.target.value)} value={title} fullWidth id="outlined-basic" label="Task Name" variant="outlined" />

        <div className="mb-5"></div>

        <TextField onChange={(e) => setDescription(e.target.value)} value={description} fullWidth id="outlined-basic" label="Task Description" variant="outlined" />
        <div className="mb-5"></div>

        <div className="text-right">
          <Button onClick={addTasksHandler} size='large' variant='contained'>Add</Button>
        </div>

        <TaskList />

      </div>
    </div>
  );
}

export default App;
