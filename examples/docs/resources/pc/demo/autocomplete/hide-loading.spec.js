import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/custom-icon');
    await page.getByText('隐藏加载图标').click();
    await page.getByPlaceholder('请输入内容').nth(1).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[1]/div/div/input')).toHaveAttribute('hideloading', 'false')
    await page.getByPlaceholder('请输入内容').nth(2).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[2]/div/div[1]/input')).toHaveAttribute('hideloading', 'true')
});