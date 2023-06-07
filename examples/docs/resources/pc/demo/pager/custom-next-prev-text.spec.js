import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/hide-on-single-page');
    await page.getByText('自定义上下页按钮文本').click();
    await page.locator('#preview').getByText('2').click();
    await page.getByRole('button', { name: '上一页' }).click();
    await expect(page.getByRole('button', { name: '上一页' })).toHaveText('上一页')
    await page.getByRole('button', { name: '下一页' }).click();
    await expect(page.getByRole('button', { name: '下一页' })).toHaveText('下一页')
});