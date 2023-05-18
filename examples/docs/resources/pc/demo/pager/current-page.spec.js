import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/current-page');
    await page.locator('div:nth-child(2) > .link-primary').click();
    await page.locator('#preview').getByText('1').click();
    await page.locator('#preview').getByText('5').click()
    await expect(page.locator('#preview').getByText('5')).toHaveText('5')
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).toBeDisabled
});