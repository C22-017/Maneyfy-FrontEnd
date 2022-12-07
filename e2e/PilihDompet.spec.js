const assert = require('assert');

Feature('Pilih Dompet on Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 Pilih Dompet', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login');
  I.wait(5);

  I.click('#dropdownWallet');
  I.wait(5);
  I.click('.radio-wallet');
  I.wait(5);
});
