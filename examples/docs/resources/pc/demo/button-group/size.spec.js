import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/show-edit');
    await page.getByText('设置组件大小').nth(1).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/ul/li[1]/button')).toHaveAttribute('style', 'height: 24px; line-height: 22px;')
});