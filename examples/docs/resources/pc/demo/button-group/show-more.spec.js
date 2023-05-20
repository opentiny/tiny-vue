import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/text-value-field');
    await page.getByText('是否显示更多按钮').click();
    await page.getByRole('button', { name: 'Button1' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Button4Button5' }).getByRole('button').click();
    await page.getByText('Button4').click();
});