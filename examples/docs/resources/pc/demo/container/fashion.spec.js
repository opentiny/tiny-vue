import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/container/classic');
    await page.getByText('时尚布局').click();
    await page.locator('#preview').getByText('Aside').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]')).toHaveAttribute('style', 'top: 0px; width: 200px;');
    await page.locator('#preview').getByText('Header').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]')).toHaveAttribute('style', 'height: 60px; left: 200px;');
    await page.getByText('Main').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[3]')).toHaveAttribute('style', 'top: 60px; left: 200px; bottom: 0px;');
});