import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/hide-on-single-page');
    await page.getByText('只有一页时隐藏分页').nth(2).click();
    await page.locator('#preview').getByText('1').click();
    await expect(page.locator('#preview').getByText('1')).toHaveAttribute('class', 'is-active')
    await page.locator('#preview span').nth(1).click();
    await expect(page.locator('#preview').getByText('1')).toBeHidden(0);
});