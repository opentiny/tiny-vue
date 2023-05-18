import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/pager-mode');
    await page.getByRole('textbox').nth(1).click();
    await page.locator('.tiny-pager__input-btn').click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('6');
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/button[2]')).not.toBeDisabled
    await page.getByRole('button', { name: '前往' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('10');
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/button[2]')).not.toBeDisabled
    await page.getByRole('button', { name: '前往' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).press('ArrowRight');
    await page.getByRole('textbox').nth(2).fill('12');
    await page.getByRole('button', { name: '前往' }).click();
    await expect(page.locator('#preview').getByRole('button').nth(1)).toBeDisabled
});