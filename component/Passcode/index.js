import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Passcode({ open, handleClick }) {
  const [passcode, setPasscode] = useState("")
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClick}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Enter the unique code"}</DialogTitle>
      <DialogContent>
        <div className="py-3">
          <TextField type='number' value={passcode} onChange={(e) => setPasscode(e.target.value)} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} variant='contained' color='warning'>Cancel</Button>
        <Button onClick={handleClick} variant='contained' color='success'>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}