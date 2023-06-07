import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/disabled');
    await page.getByText('朴素按钮').nth(1).click();
    await page.getByRole('button', { name: 'Button1' }).click();
    await expect(page.getByRole('button', { name: 'Button1' })).toHaveAttribute('class', 'plain')
});