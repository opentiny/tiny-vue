import { test, expect } from '@playwright/test'

test('嵌套表格禁用某项（单选）', async ({ page }) => {
  await page.goto('select#nest-grid-disable')
  const wrap = page.locator('#nest-grid-disable')

  const select = wrap.locator('.tiny-select').nth(0)
  const input = select.locator('.tiny-input__inner')
  const dropdown = page.locator('body > .tiny-select-dropdown')

  await select.click()
  await expect(dropdown.locator('.tiny-grid-radio.is__disabled')).toHaveCount(3)
  await expect(input).toHaveValue('')

  await dropdown.getByRole('row').nth(1).getByRole('cell').first().click()
  await expect(input).toHaveValue('')

  await dropdown.getByRole('row').nth(2).getByRole('cell').first().click()
  await expect(input).toHaveValue('深圳市')
})

test('嵌套表格禁用某项（多选）', async ({ page }) => {
  await page.goto('select#nest-grid-disable')

  const wrap = page.locator('#nest-grid-disable')
  const select = wrap.locator('.tiny-select').nth(1)
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const tag = select.locator('.tiny-tag')

  await select.click()
  await dropdown.getByRole('row').nth(2).getByRole('cell').first().click()
  await expect(tag).toHaveCount(0)

  await dropdown.getByRole('row').nth(1).getByRole('cell').first().click()
  await expect(tag).toHaveCount(1)

  await dropdown.getByRole('row').nth(4).getByRole('cell').first().click()
  await expect(tag).toHaveCount(1)
})
