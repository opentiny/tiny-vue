import { test, expect } from '@playwright/test'

test('迷你尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('switch#mini-mode')

  const demo = page.locator('#mini-mode')
  const switchBtn = demo.locator('.tiny-switch')

  await expect(switchBtn).toHaveCSS('width', '34px')
})
