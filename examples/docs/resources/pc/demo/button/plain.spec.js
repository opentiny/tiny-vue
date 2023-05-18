import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/circle');
    await page.locator('.f12 > div:nth-child(10)').click();
    await page.getByRole('button', { name: '朴素按钮' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[1]')).toHaveClass(/is-plain/)
});