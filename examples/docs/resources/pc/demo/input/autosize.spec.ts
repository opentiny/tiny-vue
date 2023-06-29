import { test, expect } from '@playwright/test'

test('可自适应文本高度的文本域', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/autosize')
  const textarea = page.locator('.demo-input > .tiny-textarea > .tiny-textarea-autosize-display-only > textarea')
  await expect(textarea.nth(1)).toHaveCSS('min-height', '52px')
})
