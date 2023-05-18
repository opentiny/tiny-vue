import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/autofocus');
    await page.getByText('事件').click();
    await page.getByRole('button', { name: '默认按钮' }).click();
    await page.getByText('click').nth(2).click();
});