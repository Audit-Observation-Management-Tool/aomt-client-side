import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { CalculatePercentageOfDaysPassed } from '../../../utils/calculatePercentageOfDaysPassed/CalculatePercentageOfDaysPassed'; 
import { CalculateDaysDifference } from '../../../utils/calculateDaysDifference/CalculateDaysDifference';
import { green, orange, red } from '@mui/material/colors';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

/***
 * 
 * Custom linear progress bar color theme based on severity of deadline
 */

const theme = createTheme({
  palette: {
    primary: green,
    secondary: orange,
    error: red
  },
});

export default function LinearProgressLine({ deadline }) {
  const daysDifference = CalculateDaysDifference(deadline);
  let color;

  if (daysDifference < 7) 
  {
    color = "error"; 
  } 
  else if (daysDifference < 30) 
  {
    color = "secondary"; 
  } 
  else 
  {
    color = "primary"; 
  }

  const value = CalculatePercentageOfDaysPassed(daysDifference);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <BorderLinearProgress variant="determinate" value={value} color={color} />
      </ThemeProvider>
    </Box>
  );
}