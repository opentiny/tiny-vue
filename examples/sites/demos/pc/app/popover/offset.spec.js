import { test, expect } from '@playwright/test'

test('箭头偏移', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('popover#arrow-offset')

  // 默认偏移和50偏移
  await expect(page.locator('.popper__arrow').nth(0)).toHaveCSS('left', '8px')
  await expect(page.locator('.popper__arrow').nth(1)).toHaveCSS('left', '50px')

  // 偏移100时， 箭头超过 popper 的宽度了 。 所以它的left =  popper.width - 8px -12px
  // 8px是保留宽度  12px是小箭头的宽度
  let arrow = page.locator('.popper__arrow').nth(2)
  let { width } = await page.locator('.tiny-popover').nth(2).boundingBox()

  await expect(arrow).toHaveCSS('left', `${width - 8 - 12}px`)
})
