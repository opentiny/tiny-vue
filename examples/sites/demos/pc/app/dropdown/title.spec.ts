import { test, expect } from '@playwright/test'

test('自定义文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#title')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')

  await expect(dropDown).toContainText('自定义文本')
})
