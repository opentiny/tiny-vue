import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-events-prev-click');
    await page.getByText('分页事件prev-click').nth(1).click();
    await page.getByText('6').click();
    await page.locator('button').nth(3).click();
    await page.getByText('prev-click 事件，当前页: 5').click();
});