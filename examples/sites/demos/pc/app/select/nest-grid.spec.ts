import { test, expect } from '@playwright/test'

test('嵌套表格（单选）', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#nest-grid')

  const wrap = page.locator('#nest-grid')
  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-select__caret')
  const row = dropdown.getByRole('row')

  await expect(suffixSvg).toHaveCount(1)
  await expect(suffixSvg).toBeVisible()

  await input.click()
  await expect(dropdown).toBeVisible()
  await expect(row).toHaveCount(6)

  await row.nth(1).getByRole('cell').first().click()
  await expect(input).toHaveValue('深圳1')
  await input.click()
  await expect(row.filter({ hasText: '深圳1' })).toHaveClass(/row__current/)
})

test('嵌套表格（多选）', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#nest-grid')

  const wrap = page.locator('#nest-grid')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-select__caret')
  const row = dropdown.getByRole('row')
  const tag = select.locator('.tiny-tag')
  const currentRow = dropdown.locator('.row__selected')

  await expect(tag).toHaveCount(0)
  await suffixSvg.click()

  await expect(row).toHaveCount(6)
  await expect(currentRow).toHaveCount(0)
  await expect(row.nth(0).getByRole('cell').first().locator('.icon-half-select')).toBeHidden()
  await expect(row.nth(0).getByRole('cell').first().locator('.icon-checked-sur')).toBeHidden()

  await row.nth(1).getByRole('cell').first().click()
  await row.nth(2).getByRole('cell').first().click()
  await row.nth(3).getByRole('cell').first().click()
  await expect(tag).toHaveCount(3)
  await expect(currentRow).toHaveCount(3)
  await expect(row.nth(0).getByRole('cell').first().locator('.icon-half-select')).toBeVisible()

  await row.nth(0).getByRole('cell').first().click()
  await expect(tag).toHaveCount(5)
  await expect(currentRow).toHaveCount(5)
  await expect(row.nth(0).getByRole('cell').first().locator('.icon-checked-sur')).toBeVisible()

  await row.nth(0).getByRole('cell').first().click()
  await expect(tag).toHaveCount(0)
  await expect(currentRow).toHaveCount(0)
  await expect(row.nth(0).getByRole('cell').first().locator('.icon-half-select')).toBeHidden()
  await expect(row.nth(0).getByRole('cell').first().locator('.icon-checked-sur')).toBeHidden()
})

test('嵌套表格 + 可搜索 + 可清除', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('select#nest-grid')

  const wrap = page.locator('#nest-grid')
  const select = wrap.locator('.tiny-select').nth(2)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const suffixSvg = select.locator('.tiny-select__caret')
  const row = dropdown.getByRole('row')

  await input.click()

  // 可搜索
  await expect(row).toHaveCount(6)
  await input.fill('深圳')
  await input.press('Enter')
  await page.waitForTimeout(200)
  await expect(row).toHaveCount(3)
  await row.nth(1).getByRole('cell').first().click()
  await expect(input).toHaveValue('深圳1')
  await input.click()
  await page.waitForTimeout(200)
  await expect(row.filter({ hasText: '深圳1' })).toHaveClass(/row__current/)
  await page.waitForTimeout(200)
  // 可清除
  await input.hover()
  await suffixSvg.nth(0).click()
  await expect(input).toHaveValue('')
})
