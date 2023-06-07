import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/container/basic-usage');
    await page.getByText('简约布局').click();
    await page.locator('#preview').getByText('Aside').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]')).toHaveAttribute('style', 'top: 0px; width: 200px;');
    await page.getByText('Main').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]')).toHaveAttribute('style', 'top: 0px; left: 200px; bottom: 0px;');
});