import { test, expect } from '@playwright/test'

test('显示title', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('icon#show-title')

  await expect(page.getByTitle('可见提示')).toHaveCount(1)
})
