import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ModalComponent = (props) => {
  console.log('propsprops', props)
  return
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const approve = () => {
  //   if ({ operation } === 'approve') {
  //     dispatch(orderActions.approveOrder({ id }))
  //   } else {
  //     dispatch(orderActions.rejectOrder({ id }))
  //   }
  //   setOpen(false);
  // }

  // const reject = () => {
  //   setOpen(false);
  // }


  return (
    <>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to {operation}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={approve} color="primary" autoFocus>
            Yes
          </Button>
          <Button onClick={reject} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}

export default ModalComponent;