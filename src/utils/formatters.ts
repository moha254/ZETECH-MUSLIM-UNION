export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-KE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const formatTime = (time: string): string => {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-KE', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};