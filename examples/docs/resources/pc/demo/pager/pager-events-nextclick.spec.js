import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-events-nextclick');
    await page.locator('.f12 > div:nth-child(11)').click();
    await page.getByRole('listitem').filter({ hasText: '3' }).click();
    await page.locator('button').nth(4).click();
    await page.getByText('next-click 事件，当前页: 4').click();
});