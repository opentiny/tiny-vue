import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/plain');
    await page.getByText('数据字段映射').click();
    await page.getByRole('button', { name: 'Button1' }).click();
});