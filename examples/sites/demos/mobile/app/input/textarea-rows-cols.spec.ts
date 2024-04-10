import { test, expect } from '@playwright/test'

test('文本框行数与列数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#textarea-rows-cols')

  const textarea = page.locator('.demo-input .tiny-mobile-textarea textarea')

  await expect(textarea).toHaveAttribute('rows', '3')
  await expect(textarea).toHaveAttribute('cols', '30')
})
