import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button/base');
    await page.getByText('图标按钮').click();
    await page.locator('.rel').click();
    await page.locator('.tiny-button').first().click();
    await page.locator('button:nth-child(2)').click();
    await page.locator('button:nth-child(3)').click();
    await page.locator('button:nth-child(4)').click();
    await page.locator('button:nth-child(5)').click();
    await page.locator('button:nth-child(6)').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[1]')).toHaveAttribute('class', 'tiny-button tiny-button--default')
});