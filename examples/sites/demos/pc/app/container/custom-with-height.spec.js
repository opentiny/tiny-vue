import { test, expect } from '@playwright/test'

test('自定义宽度和高度', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('container#custom-with-height')
  const header = page.locator('.pc-demo-container .tiny-container__header')
  await expect(header).toHaveCSS('height', '80px')
})
