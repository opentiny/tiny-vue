import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/placement');
    await page.getByText('高亮显示第一项').click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByRole('option', { name: 'TGBYX公司' }).click();
    await expect(page.locator('#preview').getByPlaceholder('请输入内容')).toHaveAttribute('highlightfirstitem', 'true')
});