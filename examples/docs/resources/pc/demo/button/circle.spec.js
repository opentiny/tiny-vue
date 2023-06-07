import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/size');
    await page.getByText('圆形按钮').nth(1).click();
    await page.locator('.tiny-button').first().click();
    await page.locator('div:nth-child(2) > button').first().click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[1]/button[2]')).toHaveClass(/is-circle/)
});