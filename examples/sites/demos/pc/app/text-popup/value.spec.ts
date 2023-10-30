import { test, expect } from '@playwright/test'

test('Textpopup 基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('text-popup#value')

  const preview = page.locator('#preview')
  const small = preview.locator('input')
  const larger = preview.locator('textarea')

  await expect(small).toHaveValue('我是 TextPopup 组件')
  await small.click()
  await expect(larger).toHaveValue('我是 TextPopup 组件')
})
