import { test, expect } from '@playwright/test';

test('经典布局', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('http://localhost:7130/pc/container/simple');
    await page.getByText('经典布局').click();
    await page.locator('#preview').getByText('header').click();
    await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'height: 60px;');
    await page.getByText('Main').click();
    await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute('style', 'top: 60px; left: 0px; bottom: 60px;');
    await page.locator('#preview').getByText('footer').click();
    await expect(page.locator('.tiny-container > div').nth(2)).toHaveAttribute('style', 'height: 60px; left: 0px;');
});