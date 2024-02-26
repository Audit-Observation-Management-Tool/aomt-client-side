export const CalculatePercentageOfDaysPassed = (daysDifference) => {
   const daysPassed =  100 - ((daysDifference/100)*100);
   return daysPassed;
}