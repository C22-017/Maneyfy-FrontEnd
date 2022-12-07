Feature('Kategori Pendapatan on Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 Add Kategori Pendapatan', async ({ I }) => {
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

  I.click('Kelola Pendapatan');
  I.wait(5);
  I.click('.add-earning');
  I.wait(5);
  I.click('.icon-selected', '#tambahKategoriPemasukan');
  I.wait(5);
  I.click('.icon-select', '#iconTambahKategoriPemasukan item-icon');
  I.click('.btnChooseIconEarning', '#iconTambahKategoriPemasukan');
  I.wait(5);
  I.fillField('#inputNameEarningTambah', 'Dikasih');
  I.wait(5);
  I.click('#btnTambahEarning');
  I.wait(5);
});

Scenario('2 Edit Kategori Pendapatan', async ({ I }) => {
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

  I.click('Kelola Pendapatan');
  I.wait(5);
  I.click('btnIconEditEarning');
  I.wait(5);
  I.click('.icon-selected', '#editKategoriPemasukan');
  I.wait(5);
  I.click('.icon-select', '#iconEditKategoriPemasukan item-icon');
  I.click('.btnChooseIconEarning', '#iconEditKategoriPemasukan');
  I.wait(5);
  I.fillField('#inputNameEarningEdit', 'Gajian');
  I.wait(5);
  I.click('btnEditEarning');
  I.wait(5);
});

Scenario('3 Delete Kategori Pendapatan', async ({ I }) => {
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

  I.click('Kelola Pendapatan');
  I.wait(5);
  I.click('btnIconDeleteEarning');
  I.wait(5);
  I.click('btnDeleteEarning');
  I.wait(5);
});
