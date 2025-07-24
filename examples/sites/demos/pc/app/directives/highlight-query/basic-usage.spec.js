import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('directives-highlight-query#basic-usage')

  const input = page.locator('.pc-demo-container .tiny-input__inner')
  const hlNode = page.locator('.pc-demo-container .tiny-hl-query-node')

  await input.fill('一片')
  await expect(hlNode).toHaveCount(3)
})
