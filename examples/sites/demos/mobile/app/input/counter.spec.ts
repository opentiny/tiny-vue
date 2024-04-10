import { test, expect } from '@playwright/test'

test('输入长度限制与计数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#counter')

  const input = page.locator('.demo-input .tiny-mobile-input')
  const textarea = page.locator('.demo-input .tiny-mobile-textarea')

  await input.locator('input').fill('12345')
  await expect(input.locator('.tiny-mobile-input__count-inner')).toContainText('5')
  await input.locator('input').fill('1234567890123')
  await expect(input.locator('input')).toHaveValue('1234567890')

  await textarea.locator('textarea').fill('1234567890')
  await expect(textarea.locator('.tiny-mobile-textarea__count')).toContainText('10/20')
  await textarea.locator('textarea').fill('12345678901234567890123')
  await expect(textarea.locator('textarea')).toHaveValue('12345678901234567890')
})
