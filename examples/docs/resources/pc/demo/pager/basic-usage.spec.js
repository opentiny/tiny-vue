import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/basic-usage');
    await page.getByText('基本用法').nth(1).click();
    await page.getByText('2').nth(1).click();
    await page.getByText('5').first().click();
    await expect(page.getByText('5').first()).toHaveAttribute('class', 'is-active')
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div[1]/button[2]')).toBeDisabled
});