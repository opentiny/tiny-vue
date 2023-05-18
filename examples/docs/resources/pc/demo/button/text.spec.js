import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/icon');
    await page.getByText('文字按钮').click();
    await page.getByRole('button', { name: 'text属性' }).click();
});