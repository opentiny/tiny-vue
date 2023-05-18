import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/show-more');
    await page.getByText('是否显示编辑按钮').nth(1).click();
    await page.getByRole('listitem').filter({ hasText: 'Button4Button5' }).getByRole('button').click();
    await page.getByText('Button4').click();
    await page.locator('#preview').getByRole('button').nth(4).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/ul/li[5]/button')).toHaveClass(/edit-button/)
});