import { test, expect } from '@playwright/test'

test('grid-filterable', async ({ page }) => {
  await page.goto('select#nest-checkbox-grid-clearable')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.waitForTimeout(500)
  const tr = page.locator('.tiny-select-dropdown .tiny-grid__body-wrapper .tiny-grid-body__row')
  await expect(tr).toHaveCount(5)
  await input.fill('深圳')
  await input.press('Enter')
  await page.waitForTimeout(500)
  await expect(tr).toHaveCount(2)
  await page.getByRole('row', { name: '华南区 广东省 深圳1' }).getByRole('cell').first().click()
  await expect(input).toHaveValue('深圳1')
  await input.click()
  await page.waitForTimeout(500)
  await expect(tr.filter({ hasText: '深圳1' })).toHaveClass(/row__current/)
})

test('grid-clearable', async ({ page }) => {
  await page.goto('select#nest-checkbox-grid-clearable')
  const input = page.locator('#preview .tiny-input__inner')
  const suffix = page.locator('#preview .tiny-input__suffix')

  await input.click()
  await page.waitForTimeout(500)
  const tr = page.locator('.tiny-select-dropdown .tiny-grid__body-wrapper .tiny-grid-body__row')
  await expect(tr).toHaveCount(5)
  await input.fill('深圳')
  await input.press('Enter')
  await page.waitForTimeout(500)
  await expect(tr).toHaveCount(2)
  await page.getByRole('row', { name: '华南区 广东省 深圳1' }).getByRole('cell').first().click()
  await expect(input).toHaveValue('深圳1')
  await input.hover()
  await suffix.click()
  await expect(input).toHaveValue('')
})
