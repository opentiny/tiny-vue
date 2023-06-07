import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/button/base');
  await page.getByText('基本用法').nth(1).click();
  await page.getByRole('button', { name: '默认按钮' }).click();
  await page.getByRole('button', { name: '朴素按钮' }).click();
  await page.getByRole('button', { name: '圆角按钮' }).click();
});