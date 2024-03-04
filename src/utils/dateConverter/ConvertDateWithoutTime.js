export const convertDateWithoutTime = (dateString) => {

    if (!dateString) return '';
    
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
    return `${formattedDate}`;
  };