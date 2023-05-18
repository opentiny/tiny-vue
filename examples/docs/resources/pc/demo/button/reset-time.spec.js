import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/reset-time');
    await page.getByText('防止表单重复提交').nth(1).click();
    await page.getByRole('button', { name: '默认禁用' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[1]')).toBeDisabled
    await page.getByRole('button', { name: '无禁用' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).not.toBeDisabled
    await page.getByRole('button', { name: '禁用 5 秒' }).click();
});