import { expect, test } from '@playwright/test'

test('加载完成', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('skeleton#loading-completed')

  const square = page.locator('.tiny-skeleton-item--square')
  const button = page.locator('.tiny-button')

  await button.click()
  await page.waitForTimeout(500)
  await expect(square).toBeHidden()
  const p = page.locator('.paragraph')
  await expect(p).toHaveText(/内容比较短的一段文字/)
})
