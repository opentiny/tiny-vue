import { test, expect } from '@playwright/test'

test('可一键清空', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#clearable')

  const input = page.locator('.demo-input .tiny-mobile-input')

  await input.click()
  await expect(input.locator('input')).toHaveValue('可一键清空')
  await input.locator('.tiny-mobile-input__clear').click()
  await expect(input.locator('input')).toHaveValue('')
})
