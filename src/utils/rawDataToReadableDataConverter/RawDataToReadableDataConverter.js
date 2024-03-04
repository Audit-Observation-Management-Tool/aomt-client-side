export const RawDataToReadableDataConverter = (richText) => {
  try 
  {
    const { blocks } = JSON.parse(richText);
    return blocks.map(block => block.text).join('\n');
  } 
  catch (error)
  {
    console.error('Error parsing rich text:', error);
    return 'Error: Unable to parse rich text';
  }
};