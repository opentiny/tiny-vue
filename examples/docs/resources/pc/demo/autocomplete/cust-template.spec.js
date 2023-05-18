import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete');
    await page.getByText('自定义模板').click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByText('WWWW科技YX公司').click();
});