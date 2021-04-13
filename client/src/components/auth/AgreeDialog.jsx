import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AgreeDialog(props) {
 
  // const handleClickOpen = (props) => {
  //  props.open()
  // };
  console.log(props)
  const handleClose = () => {
  if (typeof props.close == 'function') {
            props.close();
        }
  };

  return (
    <div>
   
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Lorem ipsum dolor sit amet"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ok
          </Button>
          {/* <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
