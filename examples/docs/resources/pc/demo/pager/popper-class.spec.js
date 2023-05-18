import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/popper-class');
    await page.getByText('自定义分页下拉框的类名').nth(2).click();
    await page.locator('#preview svg').nth(1).click();
    await page.getByRole('listitem', { name: '5' }).first().click();
    await expect(page.locator('//div[@role="tooltip"]')).toHaveClass(/custom-pager/)
});