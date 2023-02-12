
import { Box, Button, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function App() {
  return (
    <div className="App text-center max-w-7xl">
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

        <div className="data mt-10">
          <table class="table-auto w-full text-left">
            <thead>
              <tr class="text-black">
                <th class="border border-gray-300 px-4 py-4">Id</th>
                <th class="border border-gray-300 px-4 py-4">Task</th>
                <th class="border border-gray-300 px-4 py-4">Description</th>
                <th class="border border-gray-300 px-4 py-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-4">1</td>
                <td class="border border-gray-300 px-4 py-4">Task One</td>
                <td class="border border-gray-300 px-4 py-4">Description One</td>
                <td className='border border-gray-300 px-4'>
                  <EditIcon className='mr-2 cursor-pointer' size="medium" sx={{ fontSize: 23, color: "#1976d2" }} />
                  <HighlightOffIcon className='mr-2 cursor-pointer' sx={{ fontSize: 23, color: "#1976d2" }} />
                </td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-4">1</td>
                <td class="border border-gray-300 px-4 py-4">Task One</td>
                <td class="border border-gray-300 px-4 py-4">Description One</td>
                <td className='border border-gray-300 px-4'>
                  <EditIcon className='mr-2 cursor-pointer' size="medium" sx={{ fontSize: 23, color: "#1976d2" }} />
                  <HighlightOffIcon className='mr-2 cursor-pointer' sx={{ fontSize: 23, color: "#1976d2" }} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>


    </div>
  );
}

export default App;
