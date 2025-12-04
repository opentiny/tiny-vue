import { test, expect } from '@playwright/test'

test('width 属性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#width')

  const demo = page.locator('#width')
  const switchBtns = demo.locator('.tiny-switch')

  // 测试 number 类型的 width
  const numberSwitch = switchBtns.nth(0)
  await expect(numberSwitch).toHaveCSS('width', '150px')

  // 测试 string 类型的 width
  const stringSwitch = switchBtns.nth(1)
  await expect(stringSwitch).toHaveCSS('width', '150px')
})
