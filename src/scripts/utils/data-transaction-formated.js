import { formattingDateFromServer } from './format-date';
import { rupiahFormat } from './format-currency-idr';

const transactionFormated = (transaction) => {
  const name = transaction.name_transaction;
  const date = formattingDateFromServer(transaction.date_transaction);

  let urlIcon;
  let category;
  let amount;
  let colorTextAmountClass;

  if (transaction.type_transaction === 'earning') {
    urlIcon = transaction.CategoryEarning.IconEarning.url_icEarning;
    category = transaction.CategoryEarning.categoryName_earning;
    amount = `+${rupiahFormat(transaction.amount_transaction)}`;
    colorTextAmountClass = 'color-earning';
  } else {
    urlIcon = transaction.CategorySpending.IconSpending.url_icSpending;
    category = transaction.CategorySpending.categoryName_spending;
    amount = `-${rupiahFormat(transaction.amount_transaction)}`;
    colorTextAmountClass = 'color-spending';
  }

  const data = {
    name,
    date,
    urlIcon,
    category,
    amount,
    colorTextAmountClass,
  };

  return data;
};

export { transactionFormated };
