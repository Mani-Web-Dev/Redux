

import { useState } from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';


import TaskList from './TaskList';

function App() {
  return (
    <div className="App text-center max-w-7xl mx-auto">
      <div className="header  p-5 bg-gray-100">
        <Typography variant="h4" className='text-blue-500'>
          Product Management
        </Typography>
        <p className='mt-3 font-light'>Currently 1 task(s) pending</p>
      </div>
      <div className="content p-6">
        <TextField fullWidth id="outlined-basic" label="Task Name" variant="outlined" />

        <div className="mb-5"></div>

        <TextField fullWidth id="outlined-basic" label="Task Description" variant="outlined" />
        <div className="mb-5"></div>

        <div className="text-right">
          <Button size='large' variant='contained'>Add</Button>
        </div>

        <TaskList />

      </div>
    </div>
  );
}

export default App;
