import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/image');
    await page.getByText('主题样式').click();
    await page.getByRole('button', { name: '主要按钮' }).click();
    await expect(page.getByRole('button', { name: '主要按钮' })).toHaveText('主要按钮')
    await page.getByRole('button', { name: '成功按钮' }).click();
    await page.getByRole('button', { name: '信息按钮' }).click();
    await page.getByRole('button', { name: '警告按钮' }).click();
    await page.getByRole('button', { name: '危险按钮' }).click();
    await page.getByRole('button', { name: '文本按钮' }).click();
    await expect(page.getByRole('button', { name: '文本按钮' })).toHaveText('文本按钮')
});