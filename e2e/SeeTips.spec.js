Feature('See Tips on Maneyfy');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('1 See Tips', async ({ I }) => {
  I.see('Login', '.getstarted');
  I.click('.getstarted');
  I.amOnPage('/#/login');

  I.see('MASUK');
  I.fillField('email', 'testing@gmail.com');
  I.fillField('password', 'testing123');
  I.click('Login', '.button-filled');
  I.wait(5);

  I.click('.iconify--mdi');
  I.wait(5);
  I.see('Tips Mengelola Keuangan');
});
