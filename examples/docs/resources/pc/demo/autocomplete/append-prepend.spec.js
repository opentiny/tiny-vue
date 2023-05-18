import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/autocomplete');
    await page.getByText('输入框前置内容').nth(1).click();
    //判断是否获取到前置内容
    const prependText = await page.textContent('div.tiny-input-group__prepend');
    await expect(prependText).toBe('前置内容');
    //判断是否获取到后置内容
    const appendText = await page.textContent('div.tiny-input-group__append');
    await expect(appendText).toBe('后置内容');
});