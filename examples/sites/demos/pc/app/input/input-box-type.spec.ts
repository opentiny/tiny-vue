import { test, expect } from '@playwright/test'

test('下划线模式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#input-box-type')

  const demo = page.locator('#input-box-type')
  const input = demo.locator('.tiny-input')

  await expect(input).toHaveClass(/tiny-input-underline/)
  await expect(input).toHaveCSS('border-top', 'none)')
})
