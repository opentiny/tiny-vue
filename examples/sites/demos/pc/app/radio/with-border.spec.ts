import { test, expect } from '@playwright/test'

test('带有边框', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('radio#with-border')
  const bordered1 = page.locator('.is-bordered').nth(0)
  const bordered2 = page.locator('.is-bordered').nth(1)
  const bordered3 = page.locator('.is-bordered').nth(2)
  await expect(bordered1).toBeVisible()
  await expect(bordered2).toBeVisible()
  await expect(bordered3).toBeVisible()
})
