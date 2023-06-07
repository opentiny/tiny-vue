import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/current-page');
    await page.getByText('number 模式').click();
    await page.getByRole('listitem').filter({ hasText: '2' }).click();
    await expect(page.getByRole('listitem').filter({ hasText: '2' })).toHaveText('2')
});