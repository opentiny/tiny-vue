import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/reset-time');
    await page.getByText('默认聚焦').nth(1).click();
    await page.getByRole('button', { name: '默认按钮' }).click();
    await page.getByRole('button', { name: '默认聚焦' }).click();
    const button = await page.getByRole('button', { name: '默认聚焦' });
    const hasAutofocus = await button.evaluate(button => button.hasAttribute('autofocus'));
    await expect(hasAutofocus).toBe(true);
});