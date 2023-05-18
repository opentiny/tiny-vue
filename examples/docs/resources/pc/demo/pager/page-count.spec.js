import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-count');
    await page.getByText('页码按钮数量').nth(1).click();
    await page.locator('.is-active').click();
    await page.getByText('14').click();
    await page.locator('#preview').getByText('20').click();
});