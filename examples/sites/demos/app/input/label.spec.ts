import { test, expect } from '@playwright/test'

test('输入框关联文字', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/input/label')
  const form = page.locator('.demo-input > .tiny-input > .tiny-input-display-only > input')
  await expect(form).toHaveAttribute('aria-label', 'aria-label')
})
