import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-count');
    await page.getByText('每页显示数量').click();
    await page.getByRole('listitem').filter({ hasText: '10' }).click();
    await expect(page.getByRole('listitem').filter({ hasText: '10' })).toHaveAttribute('class', 'is-active');
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).toBeDisabled
    await page.locator('span').filter({ hasText: '51020304050100' }).locator('path').click();
    await page.getByRole('listitem', { name: '10' }).first().click();
    await page.locator('#preview').getByText('5').click();
    await expect(page.locator('#preview').getByText('5')).toHaveAttribute('class', 'is-active')
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).toBeDisabled
});