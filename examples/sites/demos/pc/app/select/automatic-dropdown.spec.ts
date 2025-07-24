import { test, expect } from '@playwright/test'

test('不可搜索时，获取焦点不下拉', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#automatic-dropdown')
  const wrap = page.locator('#automatic-dropdown')
  const input = wrap.locator('.tiny-input__inner').first()
  const dropdown = page.locator('.tiny-select-dropdown').first()

  await wrap.getByRole('button').first().click()
  // 聚焦高亮
  await expect(input).toHaveCSS('border-color', 'rgb(25, 25, 25)')
  // 不下拉
  await expect(dropdown).toBeHidden()
})

test('可搜索时，获取焦点自动下拉', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#automatic-dropdown')
  const wrap = page.locator('#automatic-dropdown')
  const input = wrap.locator('.tiny-input__inner').nth(1)
  const dropdown = page.locator('.tiny-select-dropdown').nth(1)

  await wrap.getByRole('button').nth(1).click()
  // 聚焦下拉
  await dropdown.getByRole('listitem').filter({ hasText: '上海' }).click()
  await expect(input).toHaveValue('上海')
  // 验证选中
  await input.click()
  await expect(page.getByRole('listitem').filter({ hasText: '上海' })).toHaveClass(/selected/)
})
