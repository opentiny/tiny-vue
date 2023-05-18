import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/type');
    await page.getByText('显示加载中').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[1]')).toHaveClass(/is-loading/)
});