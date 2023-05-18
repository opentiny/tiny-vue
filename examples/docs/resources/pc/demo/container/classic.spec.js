import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/container/simple');
    await page.getByText('经典布局').click();
    await page.locator('#preview').getByText('header').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]')).toHaveAttribute('style', 'height: 60px;');
    await page.getByText('Main').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]')).toHaveAttribute('style', 'top: 60px; left: 0px; bottom: 60px;');
    await page.locator('#preview').getByText('footer').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[3]')).toHaveAttribute('style', 'height: 60px; left: 0px;');
});