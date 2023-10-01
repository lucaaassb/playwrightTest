// @ts-check
const { test, expect } = require('@playwright/test');


test('go to bugbank', async ({ page }) => {
  await page.goto('https://bugbank.netlify.app/');

  //Register 

  await page.getByRole('button', { name: 'Registrar' }).click();
  await page.locator('form').filter({ hasText: 'Voltar ao loginE-mailNomeSenhaConfirmação senhaCriar conta com saldo ?Cadastrar' }).getByPlaceholder('Informe seu e-mail').click();
  await page.locator('form').filter({ hasText: 'Voltar ao loginE-mailNomeSenhaConfirmação senhaCriar conta com saldo ?Cadastrar' }).getByPlaceholder('Informe seu e-mail').fill('teste@gmail.com');
  await page.getByPlaceholder('Informe seu Nome').click();
  await page.getByPlaceholder('Informe seu Nome').fill('teste');
  await page.locator('form').filter({ hasText: 'Voltar ao loginE-mailNomeSenhaConfirmação senhaCriar conta com saldo ?Cadastrar' }).getByPlaceholder('Informe sua senha').click();
  await page.locator('form').filter({ hasText: 'Voltar ao loginE-mailNomeSenhaConfirmação senhaCriar conta com saldo ?Cadastrar' }).getByPlaceholder('Informe sua senha').fill('123');
  await page.getByPlaceholder('Informe a confirmação da senha').click();
  await page.getByPlaceholder('Informe a confirmação da senha').fill('123');
  await page.getByPlaceholder('Informe a confirmação da senha').press('Enter');
  await page.getByText('A conta').click(); //Tive que por um click no texto para acertar o momento exato da screenshot
  await page.screenshot({ path: 'screenshot/success1.png', fullPage: true });
  //await page.getByText('A conta').screenshot({ path: '/screenshot/success1.png' });
  await page.getByText('Fechar').click();
});


