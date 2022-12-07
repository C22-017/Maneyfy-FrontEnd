const assert = require('assert');

Feature('Logout from Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 Logout', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'tetsing123');
  I.click('Login');
  I.wait(5);

  I.click('img.profile-picture');
  I.click('.logout-content');
  I.wait(5);
  I.click('#btnLogout');
});
