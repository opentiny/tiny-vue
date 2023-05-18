import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/click');
    await page.getByText('动态禁用按钮').click();
    await page.getByRole('button', { name: '点击禁用按钮' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[2]/button[1]')).toBeDisabled
    await page.getByRole('button', { name: '点击启用按钮' }).click();
    await page.getByRole('button', { name: '默认按钮' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[2]/button[1]')).not.toBeDisabled
});