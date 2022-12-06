const convertNumTo2Digit = (number) => number.toString().padStart(2, '0');

const getDateFormated = (date = new Date()) => [
  date.getFullYear(),
  convertNumTo2Digit(date.getMonth() + 1),
  convertNumTo2Digit(date.getDate()),
].join('-');

const getMonthYearFormated = (date = new Date()) => [
  date.getFullYear(),
  convertNumTo2Digit(date.getMonth() + 1),
].join('-');

const formattingDateFromServer = (date) => {
  const dateSplited = date.split('T')[0];
  const dateConvertToDateType = new Date(dateSplited);
  const dateValue = dateConvertToDateType.getDate();
  const monthValue = dateConvertToDateType.getMonth();
  const yearValue = dateConvertToDateType.getFullYear();

  let monthFormated;
  switch (monthValue) {
    case 0: monthFormated = 'Januari'; break;
    case 1: monthFormated = 'Februari'; break;
    case 2: monthFormated = 'Maret'; break;
    case 3: monthFormated = 'April'; break;
    case 4: monthFormated = 'Mei'; break;
    case 5: monthFormated = 'Juni'; break;
    case 6: monthFormated = 'Juli'; break;
    case 7: monthFormated = 'Agustus'; break;
    case 8: monthFormated = 'September'; break;
    case 9: monthFormated = 'Oktober'; break;
    case 10: monthFormated = 'November'; break;
    case 11: monthFormated = 'Desember'; break;
    default: monthFormated = 'Undefined';
  }

  return `${dateValue} ${monthFormated} ${yearValue}`;
};

export { getDateFormated, getMonthYearFormated, formattingDateFromServer };
