import { test, expect } from '@playwright/test'

test('重置时间', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#reset-time')

  const button = page.locator('.button-wrap .tiny-mobile-button')
  await button.click()

  await expect(button).toHaveClass(/is-disabled/)
  await page.waitForTimeout(500)
  await expect(button).not.toHaveClass(/is-disabled/)
})
