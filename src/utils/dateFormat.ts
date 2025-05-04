const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const format = (date: string) => {
  const dateString = new Date(date).toDateString();
  const currentDate = new Date(date).getDate();
  const day = new Date(date).getDay();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  return {
    day: days[day],
    month: months[month],
    year,
    date: currentDate,
    dateStringFormat: `${days[day]}, ${months[month]} ${year}`,
    dateString: dateString,
  };
};

export const getDateByRequiredFormat = (ini_date: string) => {
  const padZero = (value: number) => (value < 10 ? `0${value}` : value);

  const year = new Date(ini_date).getFullYear();
  const month = new Date(ini_date).getMonth() + 1; // Months are 0-based
  const date = new Date(ini_date).getDate();

  return `${year}-${padZero(month)}-${padZero(date)}`;
};

export const getDateByForHeader = (ini_date: string) => {
  const year = new Date(ini_date).getFullYear();
  const month = new Date(ini_date).getMonth();
  const date = new Date(ini_date).getDate();

  return `${date} ${months[month]}`;
};
