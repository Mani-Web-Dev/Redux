import * as React from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function UpdateTask({ handleClickOpen, handleClose, selTask }) {
    return (
        <div>
            {
                console.log(selTask)
            }
            <Dialog
                open={handleClickOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "500px",  // Set your width here
                        },
                    },
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Update Details"}
                </DialogTitle>

                <DialogContent>
                    <TextField sx={{ mt: 2, minWidth: 120 }} fullWidth id="outlined-basic" label="Task Name" variant="outlined" />

                    <div className="mb-5"></div>

                    <TextField fullWidth id="outlined-basic" label="Task Description" variant="outlined" />

                </DialogContent>
                <DialogActions>
                    <div className="px-5 mb-5">
                        <Button onClick={handleClose} autoFocus variant="contained" >
                            Update Details
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}