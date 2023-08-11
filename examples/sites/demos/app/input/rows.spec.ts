import { test, expect } from '@playwright/test'

test('文本域行数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/rows')
  const textarea = page.locator('.demo-input > .tiny-textarea > .tiny-textarea-display-only > textarea')
  await expect(textarea.nth(1)).toHaveAttribute('rows', '1')
})
