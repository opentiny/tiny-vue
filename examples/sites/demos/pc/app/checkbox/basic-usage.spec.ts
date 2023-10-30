import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#basic-usage')
  const preview = page.locator('#preview')
  const checkbox = preview.locator('.tiny-checkbox')
  await expect(checkbox).toHaveClass(/is-checked/)
  await checkbox.click()
  await expect(checkbox).not.toHaveClass(/is-checked/)
})
