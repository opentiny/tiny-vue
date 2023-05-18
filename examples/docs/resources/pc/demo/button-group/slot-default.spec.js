import { test, expect } from '@playwright/test';
import exp from 'constants';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/button-group/event-edit');
    await page.getByText('默认插槽').click();
    await page.getByRole('button', { name: 'Button1' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[1]')).toHaveClass(/tiny-button--primary/)
    await page.getByRole('button', { name: 'Button2' }).click();
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[2]')).toHaveClass(/tiny-button--success/)
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/button[3]')).toBeDisabled
});