import { test, expect } from '@playwright/test'

test('测试插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('image#slot')
  const errorSlot = page.locator('.tiny-image__error')
  const customLost = page.getByText('图片已丢失')

  await expect(errorSlot).toBeVisible()
  await expect(customLost).toBeVisible()
})
