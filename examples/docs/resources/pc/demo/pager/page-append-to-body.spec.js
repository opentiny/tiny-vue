import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/popper-append-to-body');
    await page.getByText('分页下拉框显示位置').nth(1).click();
    await page.locator('span').filter({ hasText: '51020304050100' }).locator('svg').click();
    await page.getByRole('listitem', { name: '5' }).first().click();
});