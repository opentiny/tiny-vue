import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-mode-simple');
    await page.getByText('simple 模式').nth(1).click();
    await page.locator('.tiny-pager__input-btn').click();
    await page.getByRole('listitem', { name: '10' }).first().click();
    await page.locator('#preview').getByRole('listitem').click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.locator('button').nth(4).click();
    await page.getByRole('listitem').filter({ hasText: '10' }).click();
    await expect(page.getByRole('listitem').filter({ hasText: '10' })).toHaveAttribute('class', 'is-active')
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/button[2]')).toBeDisabled
});