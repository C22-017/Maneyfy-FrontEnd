const assert = require('assert');

Feature('Add Transaction');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 Add Transaction Pemasukan', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('.button-add');
  I.wait(5);
  I.click('.add-category', '#addTransaksi');
  I.wait(5);
  I.click('#kategoriPendapatan', '#addKategori');
  I.wait(5);
  I.click('item-category', '#tambahpendapatanKategori');
  I.click('#btnChooseCategoryAdd');
  I.wait(5);

  I.fillField('#amountAddTransaction', '1500000');
  I.fillField('#nameAddTransaction', 'Gajian');
  I.click('#btnCreateTransaction');
  I.wait(5);
});

Scenario('2 Add Transaction Pengeluaran', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('.button-add');
  I.wait(5);
  I.click('.add-category', '#addTransaksi');
  I.wait(5);
  I.click('#kategoriPengeluaran', '#addKategori');
  I.wait(5);
  I.click('item-category', '#tambahpengeluaranKategori');
  I.click('#btnChooseCategoryAdd');
  I.wait(5);

  I.fillField('#amountAddTransaction', '30000');
  I.fillField('#nameAddTransaction', 'Beli Pulsa');
  I.click('#btnCreateTransaction');
  I.wait(5);
});

Scenario('3 Edit Transaction', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('.riwayat-list', 'item-history-transaction');
  I.wait(5);
  I.click('#btnEditTransaction', '#detailTransaksi');
  I.wait(5);
  I.click('.dompet-pick', '#editTransaksi');
  I.wait(5);
  I.click('item-category', '#editKategori');
  I.click('#btnChooseCategory');
  I.wait(5);

  I.fillField('#amountEditTransaction', '5000000');
  I.fillField('#nameEditTransaction', 'Gaji Pertama');
  I.click('#btnUpdateTransaction');
  I.wait(5);
});

Scenario('4 Delete Transaction', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('.riwayat-list', 'item-history-transaction');
  I.wait(5);
  I.click('Hapus', '#detailTransaksi');
  I.wait(5);
  I.click('.btnDeleteTransaction', '#hapusTransaksi');
  I.wait(5);
});
