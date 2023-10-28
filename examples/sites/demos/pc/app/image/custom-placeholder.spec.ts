import { test, expect } from '@playwright/test'

test('占位内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.route(/jpg$/, async (route) => {
    await page.waitForTimeout(300)
  })
  await page.goto('image#custom-placeholder')
  const wait = page.locator('.image-slot')
  await expect(wait).toHaveText('加载中...')
})
