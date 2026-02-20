import { test, expect } from '@playwright/test'


test('placement', async ({ page }) => { 
    // 测试
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.locator('#placement').selectOption('top')
    await expect(page.locator('.t-color-picker__panel')).toHaveCSS('top', '0px')
    await page.locator('#placement').selectOption('bottom')
    await expect(page.locator('.t-color-picker__panel')).toHaveCSS('top', 'auto')
})