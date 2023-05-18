import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:7130/pc/autocomplete');
  await page.getByTitle('表单组件').click();
  await page.getByTitle('输入框 Input').click();
  await page.locator('#preview').getByPlaceholder('请输入内容').click();
  await page.locator('#preview').getByPlaceholder('请输入内容').fill('1111');
});