import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-events');
    await page.getByText('分页事件size-change').nth(1).click();
    await page.locator('.tiny-pager__input-btn > .tiny-svg').click();
    await page.getByRole('listitem', { name: '30' }).click();
    await page.getByText('size-change 事件，每页 30 条').click();
});