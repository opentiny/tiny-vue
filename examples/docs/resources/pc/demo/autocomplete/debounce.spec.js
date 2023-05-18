import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/debounce');
    await page.getByText('去抖延时').nth(3).click();
    await page.locator('.rel').click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByRole('option', { name: 'WWWW科技YX公司' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/input')).toHaveAttribute('debounce', '1000');
});