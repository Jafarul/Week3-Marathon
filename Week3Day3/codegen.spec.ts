
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/login');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.locator('#login')).toContainText('Username');
  await expect(page.locator('#login')).toContainText('Password');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('democsr2');
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('democsr2');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#container')).toMatchAriaSnapshot(`
    - img
    - heading "Welcome Demo B2C CSR" [level=2]
    - link:
      - /url: /crmsfa/control/main?externalLoginKey=EL620469194859
      - img
    - link "CRM/SFA":
      - /url: /crmsfa/control/main?externalLoginKey=EL620469194859
    - button "Logout"
    `);
  await page.locator('#container').click();
});