import { test, expect } from '@playwright/test'

test('自定义文本样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('scroll-text#custom-text-style')
  await expect(page.locator('.scrollclass')).toHaveCSS('background-color', 'rgb(184, 217, 249)')
})
