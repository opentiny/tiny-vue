import { test, expect } from '@playwright/test'

test('size', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('autocomplete#size')
  const demo = page.locator('#size')
  const meiumSize = demo.locator('.tiny-autocomplete').first()
  const defaultSize = demo.locator('.tiny-autocomplete').nth(1)
  const smallSize = demo.locator('.tiny-autocomplete').nth(2)
  const miniSize = demo.locator('.tiny-autocomplete').nth(3)

  await expect(meiumSize).toHaveCSS('height', '40px')
  await expect(defaultSize).toHaveCSS('height', '32px')
  await expect(smallSize).toHaveCSS('height', '28px')
  await expect(miniSize).toHaveCSS('height', '24px')
})
