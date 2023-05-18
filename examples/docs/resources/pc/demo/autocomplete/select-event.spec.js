import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/select-event');
    await page.getByText('事件').nth(3).click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByRole('option', { name: 'RFV有限责任公司' }).click();
    await page.getByText('当前选择：{"value":"RFV有限责任公司","address":"中山市"}').click();
});