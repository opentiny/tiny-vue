import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/value-key');
    await page.getByText('自定义列表样式').click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByText('康康物业YX公司').click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/input')).toHaveAttribute('popperappendtobody', 'false')
});