import { test, expect } from '@playwright/test'

test('不可搜索时，获取焦点不下拉', async ({ page }) => {
  await page.goto('select#automatic-dropdown')
  const wrap = page.locator('#automatic-dropdown')
  const input = wrap.locator('.tiny-input__inner').first()
  const dropdown = page.locator('.tiny-select-dropdown').first()
  const button = page.getByRole('button', { name: '点击获取焦点' }).first()

  await button.click()
  // 聚焦高亮
  await expect(input).toHaveCSS('border-color', 'rgb(94, 124, 224)')
  // 不下拉
  await expect(dropdown).toBeHidden()
})

test('可搜索时，获取焦点自动下拉', async ({ page }) => {
  await page.goto('select#automatic-dropdown')
  const wrap = page.locator('#automatic-dropdown')
  const input = wrap.locator('.tiny-input__inner').nth(1)
  const dropdown = page.locator('.tiny-select-dropdown').nth(1)
  const button = page.getByRole('button', { name: '点击获取焦点' }).nth(1)

  await button.click()
  // 聚焦下拉
  await dropdown.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(input).toHaveValue('双皮奶')
  // 验证选中
  await input.click()
  await expect(page.getByRole('listitem').filter({ hasText: '双皮奶' })).toHaveClass(/selected/)
})
