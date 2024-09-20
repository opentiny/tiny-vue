import { test, expect } from '@playwright/test'

test('目标容器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('sticky#target')

  const demo = page.locator('#target')

  await demo.locator('i').first().scrollIntoViewIfNeeded()
  await expect(demo.locator('.tiny-sticky--fixed')).toHaveCount(0)
})
