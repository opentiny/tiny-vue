import { test, expect } from '@playwright/test'

test('原生属性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#native-properties')

  const wrap = page.locator('#native-properties')
  const select = wrap.locator('.tiny-select')
  const input = select.locator('.tiny-input__inner')

  await expect(input).toHaveAttribute('name', 'inputName')
  await expect(input).toHaveAttribute('placeholder', '自定义 placeholder')

  const isHasAutocomplete = await input.evaluate((input) => input.hasAttribute('autocomplete'))
  await expect(isHasAutocomplete).toBe(true)
})
