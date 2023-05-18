import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/size');
    await page.getByText('远程搜索').nth(1).click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByText('TGBYX公司').click();
});