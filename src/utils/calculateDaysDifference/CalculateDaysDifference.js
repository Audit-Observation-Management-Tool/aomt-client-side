export const CalculateDaysDifference = (deadline) => {
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const timeDifference = deadlineDate.getTime() - today.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
};