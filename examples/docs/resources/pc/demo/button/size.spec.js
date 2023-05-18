import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/loading');
    await page.getByText('尺寸').nth(1).click();
    await page.getByRole('button', { name: '默认按钮' }).click();
    await page.getByRole('button', { name: '超大按钮' }).click();
    await page.getByRole('button', { name: '中等按钮' }).click();
    await page.getByRole('button', { name: '小型按钮' }).click();
    await page.getByRole('button', { name: '超小按钮' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).toHaveClass(/tiny-button--large/)
});