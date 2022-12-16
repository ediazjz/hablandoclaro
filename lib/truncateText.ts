export const truncateText = (text: string): string => {
  let truncatedText = text;

  if (text.length > 150) truncatedText = text.slice(0, 147) + "...";

  return truncatedText;
};
