import { test, expect } from '@playwright/test'

test('ProcessDesigner getter', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#basic-usage')
  await expect(page.locator('g:nth-child(3) > .djs-element > .djs-hit').first()).toBeVisible()
})
