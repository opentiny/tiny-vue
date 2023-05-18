import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/prefix-suffix-slot');
    await page.getByText('通过插槽自定义图标').nth(1).click();
    await page.locator('#preview').getByPlaceholder('请输入内容').click();
    await page.getByRole('option', { name: 'WWWW科技YX公司' }).click();
    await page.locator('#preview svg').nth(1).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/span[1]')).toHaveAttribute('class', 'tiny-input__prefix')
    await page.locator('#preview svg').nth(2).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div[1]/span[2]')).toHaveAttribute('class', 'tiny-input__suffix')
});