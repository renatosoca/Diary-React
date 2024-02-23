export const getTodayDate = () => {
  const formatDate = new Date();
  const day = formatDate.toString().split(' ')[2];
  const month = formatDate.getMonth() + 1;
  const year = formatDate.getFullYear();

  return `${year}-${month < 10 ? '0' + month : month}-${day.length === 1 ? '0' + day : day}`;
};

export const getFirstDayOfDate = () => {
  const formatDate = new Date();
  const month = formatDate.getMonth() + 1;
  const year = formatDate.getFullYear();

  return `${year}-${month < 10 ? '0' + month : month}-01`;
};

export const getTodayUserDate = (date: number | string | Date = new Date()) => {
  const formatDate = new Date(date);
  const day = formatDate.toString().split(' ')[2];
  const month = formatDate.getMonth() + 1;
  const year = formatDate.getFullYear();
  const dayWeek = formatDate.getDay() + 1;
  let dayWeekString = '';
  let monthString = '';

  switch (dayWeek) {
    case 1:
      dayWeekString = 'Dom.';
      break;
    case 2:
      dayWeekString = 'Lun.';
      break;
    case 3:
      dayWeekString = 'Mar.';
      break;
    case 4:
      dayWeekString = 'Mie.';
      break;
    case 5:
      dayWeekString = 'Jue.';
      break;
    case 6:
      dayWeekString = 'Vie.';
      break;
    case 7:
      dayWeekString = 'Sab.';
      break;
  }

  switch (month) {
    case 1:
      monthString = 'Ene.';
      break;
    case 2:
      monthString = 'Feb.';
      break;
    case 3:
      monthString = 'Marz.';
      break;
    case 4:
      monthString = 'Abr.';
      break;
    case 5:
      monthString = 'May.';
      break;
    case 6:
      monthString = 'Jun.';
      break;
    case 7:
      monthString = 'Jul.';
      break;
    case 8:
      monthString = 'Ago.';
      break;
    case 9:
      monthString = 'Sep.';
      break;
    case 10:
      monthString = 'Oct.';
      break;
    case 11:
      monthString = 'Nov.';
      break;
    case 12:
      monthString = 'Dic.';
      break;
  }

  return `${dayWeekString} ${day.length === 1 ? '0' + day : day} de ${monthString} ${year}`;
};

export const getDayByAddMonths = (today: string | number | Date, months: number) => {
  const date = new Date(today);
  date.setMonth(date.getMonth() + months);
  let dateString = date.toLocaleDateString();
  let dateParts = dateString.split('/');
  if (dateParts[0]?.length === 1) {
    dateParts[0] = '0' + dateParts[0];
  }
  if (dateParts[1]?.length === 1) {
    dateParts[1] = '0' + dateParts[1];
  }
  dateString = dateParts.join('/');
  return dateString;
};

export const formatDate = (date: number | Date, locale: string | string[], options?: Intl.DateTimeFormatOptions) => {
  return new Intl.DateTimeFormat(locale, options).format(date);
};
