import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/custom-next-prev-text');
    await page.getByText('Grid 表格分页').click();
    await page.locator('span').filter({ hasText: '5102050' }).locator('svg').click();
    await page.getByRole('listitem', { name: '5' }).first().click();
    await page.getByRole('listitem').filter({ hasText: '4' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[2]/button[2]')).toBeDisabled
    await page.locator('.tiny-pager__input-btn > .tiny-svg > .st0').click();
    await page.getByRole('listitem', { name: '10' }).click();
    await page.getByRole('listitem').filter({ hasText: '2' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[2]/button[2]')).toBeDisabled
});