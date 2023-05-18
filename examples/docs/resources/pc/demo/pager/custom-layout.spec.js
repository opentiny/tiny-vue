import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/custom-layout');
    await page.getByText('自定义分页布局').nth(1).click();
    await page.locator('#preview svg').nth(1).click();
    await page.getByRole('listitem', { name: '20' }).click();
    await page.locator('#preview').getByText('50').click();
    await expect(page.locator('#preview').getByText('50')).toHaveAttribute('class', 'is-active');
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).toBeDisabled;
    await page.locator('#preview svg').nth(1).click();
    await page.getByRole('listitem', { name: '50' }).click();
    await page.locator('#preview').getByText('20').click();
    await expect(page.locator('#preview').getByText('20')).toHaveAttribute('class', 'is-active')
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).toBeDisabled;
});