import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/image');
    await page.getByText('图片按钮').nth(2).click();
    await page.getByRole('button', { name: '图片按钮' }).click();
});