import { test, expect } from '@playwright/test'

test('表尾样式(自定义表尾行样式)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-footer-style-footer-cell-style')
  await expect(page.locator('.footer__cell--blue')).toHaveCount(6)
})
