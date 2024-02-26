import { CalculateDaysDifference } from "../calculateDaysDifference/CalculateDaysDifference";

export const DaysLeftTillDeadline = (deadline) => {
    const daysDifference = CalculateDaysDifference(deadline);
  
    if (daysDifference === 0) 
    {
      return <span style={{ color: 'red' }}>Due Today</span>;
    } 
    else if (daysDifference === 1) 
    {
      return <span style={{ color: 'red' }}>Due Tomorrow</span>;
    } 
    else if (daysDifference < 0) 
    {
      return <span style={{ color: 'gray' }}>Deadline passed</span>;
    } 
    else if (daysDifference < 7) 
    {
      return <span style={{ color: 'red' }}>{daysDifference} days till deadline</span>;
    }
    else if (daysDifference < 30) 
    {
      const weeks = Math.floor(daysDifference / 7);
      return <span style={{ color: 'orange' }}>{weeks} week{weeks > 1 ? 's' : ''} till deadline</span>;
    } 
    else 
    {
      const months = Math.floor(daysDifference / 30);
      return <span style={{ color: 'green' }}>{months} month{months > 1 ? 's' : ''} till deadline</span>;
    }
  };  