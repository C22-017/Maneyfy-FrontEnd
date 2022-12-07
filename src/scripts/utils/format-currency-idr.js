const rupiahFormat = (money) => new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
}).format(money);

const integerRupiahToInput = (money) => new Intl.NumberFormat('id-ID').format(money);

const formattingRupiahToInput = (money) => {
  const number_string = money.replace(/[^,\d]/g, '').toString();
  const split = number_string.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  return rupiah;
};

const rupiahToInteger = (money) => Number(money.replace(/[^,\d]/g, ''));

export {
  rupiahFormat, formattingRupiahToInput,
  rupiahToInteger, integerRupiahToInput,
};
