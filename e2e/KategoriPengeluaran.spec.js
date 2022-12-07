Feature('Kategori Pengeluaran on Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 Add Kategori Pengeluaran', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('img.profile-picture');
  I.click('.profile__link');
  I.wait(5);

  I.click('Kelola Pengeluaran');
  I.wait(5);
  I.click('.add-spending');
  I.wait(5);
  I.click('.icon-selected', '#tambahKategoriPengeluaran');
  I.wait(5);
  I.click('.icon-select', '#iconTambahKategoriPengeluaran item-icon');
  I.click('.btnChooseIconSpending', '#iconTambahKategoriPengeluaran');
  I.wait(5);
  I.fillField('#inputNameSpendingTambah', 'Ngasih Orang');
  I.wait(5);
  I.click('#btnTambahSpending');
  I.wait(5);
});

Scenario('2 Edit Kategori Pengeluaran', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('img.profile-picture');
  I.click('.profile__link');
  I.wait(5);

  I.click('Kelola Pengeluaran');
  I.wait(5);
  I.click('btnIconEditSpending');
  I.wait(5);
  I.click('.icon-selected', '#editKategoriPengeluaran');
  I.wait(5);
  I.click('.icon-select', '#iconEditKategoriPengeluaran item-icon');
  I.click('.btnChooseIconSpending', '#iconEditKategoriPengeluaran');
  I.wait(5);
  I.fillField('#inputNameSpendingEdit', 'Pulsa');
  I.wait(5);
  I.click('btnEditSpending');
  I.wait(5);
});

Scenario('3 Delete Kategori Pemasukan', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('img.profile-picture');
  I.click('.profile__link');
  I.wait(5);

  I.click('Kelola Pengeluaran');
  I.wait(5);
  I.click('btnIconDeleteSpending');
  I.wait(5);
  I.click('btnDeleteSpending');
  I.wait(5);
});
