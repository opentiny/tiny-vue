import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-mode');
    await page.getByText('总页数').nth(2).click();
    await page.getByText('200').click();
    await expect(page.getByText('200')).toHaveText('200')
    await expect(page.locator('button').nth(4)).toBeDisabled
});