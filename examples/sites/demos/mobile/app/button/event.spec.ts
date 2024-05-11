import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#event')

  const button = page.locator('#event .tiny-mobile-button')

  await button.click()
  await expect(button).toHaveClass(/is-loading/)
  await page.waitForTimeout(2000)
  await expect(button).not.toHaveClass(/is-loading/)
})
