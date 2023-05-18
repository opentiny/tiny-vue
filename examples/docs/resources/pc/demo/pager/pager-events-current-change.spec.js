import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-events');
    await page.locator('.f12 > div:nth-child(9)').click();
    await page.getByText('6').click();
    await page.locator('div').filter({ hasText: 'current-change 事件，当前页: 6' }).nth(1).click();
});