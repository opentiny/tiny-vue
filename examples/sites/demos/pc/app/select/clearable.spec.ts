import { test, expect } from '@playwright/test'

test('clearable', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#clearable')
  const wrap = page.locator('#clearable')
  const dropdown = page.locator('.tiny-select-dropdown')
  const input = wrap.locator('.tiny-input__inner')
  const icon = wrap.locator('.tiny-input__suffix')

  // 验证默认值
  await expect(input).toHaveValue('天津')
  // 验证清空
  await input.hover()
  await icon.click()
  await expect(input).toHaveValue('')
  // 验证选中
  await icon.click()
  await dropdown.getByRole('listitem').filter({ hasText: '上海' }).click()
  await expect(input).toHaveValue('上海')
})
