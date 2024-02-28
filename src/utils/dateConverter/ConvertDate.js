export const convertDate = (dateString) => {

  if (!dateString) return '';
  
  const date = new Date(dateString);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  return `${formattedDate}   ${formattedTime}`;
};



