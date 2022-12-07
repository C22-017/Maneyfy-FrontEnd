Feature('See Profile on Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 See Profile', async ({ I }) => {
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
});

Scenario('2 Edit Profile', async ({ I }) => {
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

  I.click('.edit');
  I.fillField('name', 'fajar');
  I.fillField('email', 'testing@gmail.com');
  I.click('Simpan', '#kelolaProfil');
  I.wait(8);
});

Scenario('3 Hapus Akun', async ({ I }) => {
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

  I.click('.edit');
  I.wait(5);
  I.click('Hapus Akun', '#kelolaProfil');
  I.wait(5);
  I.click('#btnDeleteUser', '#hapusAkun');
  I.wait(5);
});
