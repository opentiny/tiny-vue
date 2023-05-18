import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/basic-usage');
    await page.getByText('fixed 模式').click();
    await page.locator('#preview').getByText('1').first().click();
    await expect(page.locator('#preview').getByText('1').first()).toHaveAttribute('class', 'is-active')
    await page.locator('#preview').getByText('10').click();
    await expect(page.locator('#preview').getByText('10')).toHaveAttribute('class', 'is-active')
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/button[2]')).toBeDisabled
});