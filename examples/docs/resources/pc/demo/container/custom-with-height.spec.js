import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/container/legend');
    await page.locator('.f12 > div:nth-child(6)').click();
    await page.getByText('header-height：80').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]')).toHaveAttribute('style', 'height: 80px;');
    await page.getByText('aside-width：200').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[2]')).toHaveAttribute('style', 'width: 200px; top: 80px;');
    await page.getByText('footer-height：80').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[4]')).toHaveAttribute('style', 'height: 80px; left: 200px;');
});