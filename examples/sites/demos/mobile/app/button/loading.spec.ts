import { test, expect } from '@playwright/test'

test('加载中状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#loading')

  const buttons = page.locator('.button-wrap .tiny-mobile-button')

  await expect(buttons.first()).toHaveClass(/is-loading/)
  await expect(buttons.first().locator('.tiny-mobile-button-loading-white')).toBeVisible()
})
