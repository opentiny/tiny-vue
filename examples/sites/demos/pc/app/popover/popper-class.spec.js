import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#popper-class')

  let button1 = page.getByRole('button', { name: /单个class/ })
  let button2 = page.getByRole('button', { name: /多个class/ })

  let poppers = page.locator('body > .tiny-popover')

  // 单个class
  await button1.hover()
  await expect(poppers.nth(0)).toHaveClass(/demo-popover-class1/)
  await page.waitForTimeout(200)
  await page.mouse.move(0, 0)

  // 多个class
  await button2.hover()
  await expect(poppers.nth(1)).toHaveClass(/demo-popover-class2/)
})
