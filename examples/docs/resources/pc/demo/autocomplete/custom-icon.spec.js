import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete');
    await page.getByText('自定义图标').first().click();
    //测试输入框架的前置图标
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/span[1]')).toHaveClass(/tiny-input__prefix/)
    //测试输入框架的后置图标
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div/div/span[2]')).toHaveClass(/tiny-input__suffix/)
});