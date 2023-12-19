import { test, expect } from '@playwright/test'

test('设置组件尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drop-times#size')

  const droptimes = page.locator('.drop-time-demo-size > div:nth-child(1)')
  await expect(droptimes).toHaveClass(/tiny-select--medium/)
  const droptimesSmall = page.locator('.drop-time-demo-size > div:nth-child(2)')
  await expect(droptimesSmall).toHaveClass(/tiny-select--small/)
  const droptimesMini = page.locator('.drop-time-demo-size > div:nth-child(3)')
  await expect(droptimesMini).toHaveClass(/tiny-select--mini/)
})
