import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/highlight-first-item');
    await page.getByText('聚焦不显示建议列表').click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.locator('#preview').getByPlaceholder('请输入内容').fill('宣传单');
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/input')).toHaveAttribute('highlightfirstitem', 'false')
});