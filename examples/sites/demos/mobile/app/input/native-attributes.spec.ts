import { test, expect } from '@playwright/test'

test('输入框原生属性', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.goto('input#native-attributes')

  const inputs = page.locator('.demo-input .tiny-mobile-input input')

  await expect(inputs.first()).toHaveAttribute('autofocus')
  await expect(inputs.nth(1)).toHaveAttribute('readonly')
  await expect(inputs.nth(2)).toHaveAttribute('autocomplete', 'on')
  await expect(inputs.nth(3)).toHaveAttribute('step', '2')
  await expect(inputs.nth(4)).toHaveAttribute('name', 'username')
})
