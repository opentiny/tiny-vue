import { test, expect } from '@playwright/test'

test('显示title', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('icon#show-title')

  await expect(page.getByTitle('复制')).toHaveCount(1)
})
