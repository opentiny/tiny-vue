import { test, expect } from '@playwright/test'

test('避免用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('directives-highlight-query#avoid')

  const hlNode = page.locator('.pc-demo-container .tiny-hl-query-node')
  const button = page.locator('.pc-demo-container .tiny-button').first()

  await expect(hlNode).toHaveCount(12)

  await button.click()
  await expect(hlNode).toHaveCount(6)
})
