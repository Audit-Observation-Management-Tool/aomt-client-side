import * as React from 'react';
import { Snackbar, Alert } from '@mui/material'; 
import MuiAlert from '@mui/material/Alert';

export default function SnackbarComponent({ open, message, variant, onClose }) 
{
  const Alert = React.forwardRef(function Alert(props, ref) 
  {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Snackbar open={open} autoHideDuration={1200} onClose={onClose}>
      <Alert onClose={onClose} severity={variant} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}