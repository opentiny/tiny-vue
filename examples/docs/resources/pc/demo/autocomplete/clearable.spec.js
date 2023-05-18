import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete/select-event');
    await page.getByText('可清除').click();
    await page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/input').click();
    await page.getByRole('option', { name: 'WWWW科技YX公司' }).click();
});