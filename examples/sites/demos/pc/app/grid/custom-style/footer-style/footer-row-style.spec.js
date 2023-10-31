import { test, expect } from '@playwright/test'

test('表尾样式(自定义表尾单元格样式)', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-custom-style#custom-style-footer-style-footer-row-style')
  await expect(page.locator('.footer__row--red')).toBeVisible()
  await expect(page.locator('.footer__row--green')).toBeVisible()
})
