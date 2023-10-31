import { test, expect } from '@playwright/test'

test('Textpopup 提示占位文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('text-popup#placeholder')

  const preview = page.locator('#preview')
  const small = preview.locator('input')
  const larger = preview.locator('textarea')

  await small.click()
  await expect(larger).toHaveAttribute('placeholder', '请输入文字')
})
