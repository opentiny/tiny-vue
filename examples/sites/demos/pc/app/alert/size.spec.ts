import { test, expect } from '@playwright/test'

test('测试 Alert 大尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('alert#size')

  const largeAlert = page.locator('.tiny-alert').nth(1)
  await expect(largeAlert).toHaveClass(/tiny-alert--large/)
  await expect(largeAlert).not.toHaveCSS('height', 'var(--ti-alert-normal-height)')
})
