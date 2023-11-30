import { test, expect } from '@playwright/test'

test('标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('notify#title')
  await page.getByRole('button', { name: '自定义标题' }).click()
  const title = page.locator('.tiny-notify__title')
  await expect(title).toBeVisible()
})
