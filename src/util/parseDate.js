import dayjs from 'dayjs';

export const parseDate = (date) => {
  return dayjs(date).format('MMMM DD, YYYY');
};
