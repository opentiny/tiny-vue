import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/placement');
    await page.getByText('设置菜单弹出位置').nth(2).click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByRole('option', { name: 'YHN科技YX公司' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/input')).toHaveAttribute('placement', 'top-end')
});