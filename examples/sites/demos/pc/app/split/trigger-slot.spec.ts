import { test, expect } from '@playwright/test'

test('拖拽插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#trigger-slot')
  const centerDiv = page.locator('.trigger-line')
  await expect(centerDiv).toBeVisible()
})
