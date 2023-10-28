import { test, expect } from '@playwright/test'

test('宽度是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/progress/progress-width')

  const progress1 = page.getByRole('progressbar').nth(0).locator('.tiny-progress-bar__outer')
  const progress2 = page.getByRole('progressbar').nth(1).locator('.tiny-progress-bar__outer')

  await expect(progress1).toHaveCSS('height', '4px')
  await expect(progress2).toHaveCSS('height', '12px')
})
