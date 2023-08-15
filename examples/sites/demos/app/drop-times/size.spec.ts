import { test, expect } from '@playwright/test'

test('设置组件尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/drop-times/size')

  const droptimes = page.locator('.tiny-select')
  await expect(droptimes).toHaveClass(/tiny-select--medium/)
})
