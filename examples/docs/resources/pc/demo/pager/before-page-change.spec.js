import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/pager/before-page-change');
    await page.getByText('分页事件before-page-change').nth(1).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('4');
    await page.getByRole('button', { name: '前往' }).click();
    await page.getByRole('button', { name: '确认' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('9');
    await page.getByRole('button', { name: '前往' }).click();
    await page.getByRole('button', { name: '确认' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('5');
    await page.getByRole('button', { name: '前往' }).click();
    await page.getByRole('button', { name: '取消' }).click();
});