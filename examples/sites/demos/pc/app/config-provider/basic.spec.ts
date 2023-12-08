import { test, expect } from '@playwright/test'

test('测试自定义事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('config-provider#base')
  await page.locator('.tiny-config-provider > .tiny-alert > .tiny-svg').nth(1).click()
  await page.waitForTimeout(500)
  await expect(page.locator('.tiny-modal > .tiny-modal__box').nth(1)).toHaveText('触发自定方法')
})
