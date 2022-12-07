const assert = require('assert');

Feature('Register Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 Go to Web Maneyfy', async ({ I }) => {
  I.see('Kelola keuanganmu', '.hero');
});

Scenario('2 Register to Maneyfy', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('BELUM PUNYA AKUN ?');
  I.click('Register');
  I.fillField('name', 'testing');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.fillField('confirmPassword', 'testing123');
  I.click('Register', '.button-filled');
  I.wait(5);
});

Scenario('3 Login to Maneyfy', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);
  I.see('Riwayat Transaksi');
});
