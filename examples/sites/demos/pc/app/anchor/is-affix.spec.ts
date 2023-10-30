import { test, expect } from '@playwright/test'

test('固定模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('anchor#is-affix')

  const button = page.locator('.tiny-switch')
  const anchor = page.locator('.tiny-anchor__wrapper')
  const { x: x1, y: y1 } = await anchor.boundingBox()

  await button.click()
  await expect(anchor).toHaveClass(/tiny-anchor__affix/)
  await expect(anchor).toHaveCSS('position', 'fixed')
  await page.mouse.wheel(0, 500)
  const { x: x2, y: y2 } = await anchor.boundingBox()
  await expect(x1).toEqual(x2)
  await expect(y1).toEqual(y2)
})
