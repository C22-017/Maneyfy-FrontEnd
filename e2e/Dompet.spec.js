Feature('Add Dompet on Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 Add Dompet', async ({ I }) => {
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

  I.click('Dompet');
  I.wait(5);
  I.click('.add-dompet');
  I.wait(5);
  I.click('.icon-selected', '#tambahDompet');
  I.wait(5);
  I.click('.icon-select', '#iconTambahDompet item-icon');
  I.click('.btnChooseIconDompet', '#iconTambahDompet');
  I.wait(5);
  I.fillField('#inputNameDompetTambah', 'Dana Darurat');
  I.wait(5);
  I.click('#btnTambahDompet');
  I.wait(5);
});

Scenario('2 Edit Dompet', async ({ I }) => {
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

  I.click('Dompet');
  I.wait(5);
  I.click('btnIconEditDompet');
  I.wait(5);
  I.click('.icon-selected', '#editDompet');
  I.wait(5);
  I.click('.icon-select', '#iconEditDompet item-icon');
  I.click('.btnChooseIconDompet', '#iconEditDompet');
  I.wait(5);
  I.fillField('#inputNameDompetEdit', 'Tabungan');
  I.wait(5);
  I.click('btnEditDompet');
  I.wait(5);
});

Scenario('3 Delete Dompet', async ({ I }) => {
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

  I.click('Dompet');
  I.wait(5);
  I.click('btnIconDeleteDompet');
  I.wait(5);
  I.click('btnDeleteDompet');
  I.wait(5);
});
