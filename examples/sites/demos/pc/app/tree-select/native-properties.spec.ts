import { test, expect } from '@playwright/test'

test('原生属性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tree-select#native-properties')

  const wrap = page.locator('#native-properties')
  const select = wrap.locator('.tiny-tree-select')
  const input = select.locator('.tiny-input__inner')

  await expect(input).toHaveAttribute('name', 'inputName')
  await expect(input).toHaveAttribute('placeholder', '请选择一个选项')

  const isHasAutocomplete = await input.evaluate((input) => input.hasAttribute('autocomplete'))
  await expect(isHasAutocomplete).toBe(true)
})
