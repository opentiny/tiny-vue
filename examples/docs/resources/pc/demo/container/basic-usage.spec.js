import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/container/custom-container');
    await page.getByText('默认布局').click();
    await page.locator('#preview').getByText('Header').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]')).toHaveAttribute('style', 'height: 60px;');
    await page.locator('#preview').getByText('Aside').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]')).toHaveAttribute('style', 'width: 200px; top: 60px;');
    await page.getByText('Main').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[3]')).toHaveAttribute('style', 'top: 60px; left: 200px; bottom: 0px;');
});