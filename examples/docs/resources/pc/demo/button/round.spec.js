import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/text');
    await page.getByText('按钮圆角').click();
    await page.getByRole('button', { name: '默认按钮' }).click();
    await page.getByRole('button', { name: '主要按钮' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[1]')).toHaveClass(/is-round/)
});