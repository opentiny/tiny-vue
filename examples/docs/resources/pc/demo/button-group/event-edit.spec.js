import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/show-edit');
    await page.getByText('编辑事件').click();
    await page.locator('#preview').getByRole('button').nth(4).click();
    await page.locator('.tiny-notify__icon-close > .tiny-svg').click();
});