import { test, expect } from '@playwright/test'

test('可缩放文本域', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/resize')
  const textarea = page.locator('.demo-input > .tiny-textarea > .tiny-textarea-display-only > textarea')
  await expect(textarea.nth(0)).toHaveCSS('resize', 'vertical')
  await expect(textarea.nth(1)).toHaveCSS('resize', 'none')
  await expect(textarea.nth(2)).toHaveCSS('resize', 'both')
  await expect(textarea.nth(3)).toHaveCSS('resize', 'horizontal')
  await expect(textarea.nth(4)).toHaveCSS('resize', 'vertical')
})
