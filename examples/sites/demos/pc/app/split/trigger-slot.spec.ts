import { test, expect } from '@playwright/test'

test('拖拽插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#trigger-slot')
  const centerDiv = page.locator('.line')
  await expect(centerDiv).toHaveCSS('background-color', 'rgb(0, 0, 0)')
})
