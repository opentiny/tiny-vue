import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/size');
    await page.getByText('禁用状态').click();
    await page.getByRole('button', { name: 'Button1' }).click();
    await expect(page.getByRole('button', { name: 'button1' })).toBeDisabled
});