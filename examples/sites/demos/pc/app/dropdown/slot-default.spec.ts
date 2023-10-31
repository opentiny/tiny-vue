import { test, expect } from '@playwright/test'

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#slot-default')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')

  await expect(dropDown).toContainText('默认插槽')
})
